import {useEffect, useState} from 'react';

export type DetectedPlatform = 'windows' | 'linux' | 'other';

function detectPlatform(): DetectedPlatform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = `${navigator.userAgent} ${navigator.platform ?? ''}`.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux') && !ua.includes('android')) return 'linux';
  return 'other';
}

export function usePlatform(): DetectedPlatform {
  const [platform, setPlatform] = useState<DetectedPlatform>('other');
  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);
  return platform;
}
