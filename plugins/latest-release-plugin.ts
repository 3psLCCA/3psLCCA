import type {LoadContext, Plugin} from '@docusaurus/types';

export type ReleaseAsset = {
  url: string;
  size: number;
};

export type ReleaseData = {
  tag: string;
  assets: {
    windows: ReleaseAsset;
    linux: ReleaseAsset;
    conda: ReleaseAsset;
  };
};

// Pinned release used only if the GitHub API is unreachable at build time.
const FALLBACK: ReleaseData = {
  tag: 'v1.1.9',
  assets: {
    windows: {
      url: 'https://github.com/3psLCCA/3psLCCA-gui/releases/download/v1.1.9/threePSLCCA-1.1.9-Windows-x86_64.exe',
      size: 633567953,
    },
    linux: {
      url: 'https://github.com/3psLCCA/3psLCCA-gui/releases/download/v1.1.9/threePSLCCA-1.1.9-Linux-x86_64.sh',
      size: 616687352,
    },
    conda: {
      url: 'https://github.com/3psLCCA/3psLCCA-gui/releases/download/v1.1.9/three-ps-lcca-gui-1.1.9-py312_0.conda',
      size: 23100448,
    },
  },
};

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

export default function latestReleasePlugin(_context: LoadContext): Plugin<ReleaseData> {
  return {
    name: 'latest-release-plugin',

    async loadContent(): Promise<ReleaseData> {
      try {
        // Every release in this repo is currently tagged "prerelease", so
        // GET /releases/latest (which excludes prereleases) always 404s.
        // Fetch the release list instead and take the newest entry.
        const res = await fetch(
          'https://api.github.com/repos/3psLCCA/3psLCCA-gui/releases?per_page=1',
          {headers: {'User-Agent': '3psLCCA-docs-build', Accept: 'application/vnd.github+json'}},
        );
        if (!res.ok) {
          throw new Error(`GitHub API responded with ${res.status}`);
        }
        const releases = (await res.json()) as {tag_name: string; assets: GitHubAsset[]}[];
        const data = releases[0];
        if (!data) {
          throw new Error('No releases found');
        }

        const windows = data.assets.find((a) => /Windows.*\.exe$/i.test(a.name));
        const linux = data.assets.find((a) => /Linux.*\.sh$/i.test(a.name));
        const conda = data.assets.find((a) => a.name.endsWith('.conda'));

        if (!windows || !linux || !conda) {
          throw new Error('Latest release is missing an expected asset (Windows/Linux/Conda)');
        }

        return {
          tag: data.tag_name,
          assets: {
            windows: {url: windows.browser_download_url, size: windows.size},
            linux: {url: linux.browser_download_url, size: linux.size},
            conda: {url: conda.browser_download_url, size: conda.size},
          },
        };
      } catch (err) {
        console.warn(
          `[latest-release-plugin] Could not fetch the latest release, falling back to pinned ${FALLBACK.tag}:`,
          (err as Error).message,
        );
        return FALLBACK;
      }
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}
