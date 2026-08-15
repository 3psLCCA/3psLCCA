import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import type {ReleaseData} from '../../../plugins/latest-release-plugin';
import {usePlatform, type DetectedPlatform} from '../../utils/usePlatform';
import styles from './styles.module.css';

function formatSize(bytes: number): string {
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

type Platform = 'windows' | 'linux' | 'conda';

// Conda is the catch-all download for anything that isn't Windows/Linux
// (e.g. macOS), matching the 'other' bucket from platform detection.
const DETECTED_MATCH: Record<Platform, DetectedPlatform> = {
  windows: 'windows',
  linux: 'linux',
  conda: 'other',
};

const CARDS: {platform: Platform; label: string; detail: string; icon: string}[] = [
  {platform: 'windows', label: 'Windows', detail: '.exe installer', icon: '/img/platforms/windows.svg'},
  {platform: 'linux', label: 'Linux', detail: '.sh installer', icon: '/img/platforms/linux.svg'},
  {platform: 'conda', label: 'Conda', detail: '.conda package · all platforms', icon: '/img/platforms/anaconda.svg'},
];

export default function DownloadCards(): ReactNode {
  const release = usePluginData('latest-release-plugin') as ReleaseData;
  const detected = usePlatform();

  return (
    <div className={styles.grid}>
      {CARDS.map((card) => {
        const asset = release.assets[card.platform];
        const recommended = DETECTED_MATCH[card.platform] === detected;
        return (
          <div
            key={card.platform}
            className={recommended ? `${styles.card} ${styles.cardRecommended}` : styles.card}>
            {recommended && <span className={styles.badge}>Recommended</span>}
            <div className={styles.iconWrap}>
              <img src={card.icon} alt="" className={styles.icon} />
            </div>
            <p className={styles.label}>{card.label}</p>
            <p className={styles.detail}>
              {card.detail} · ~{formatSize(asset.size)}
            </p>
            <Link to={asset.url} className={`button button--primary ${styles.button}`}>
              Download {release.tag}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
