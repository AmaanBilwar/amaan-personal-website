'use client';

import FooterAsciiWave from '@/components/FooterAsciiWave';
import FooterSocialLinks from '@/components/FooterSocialLinks';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = 'mt-20' }: FooterProps) {
  return (
    <div
      className={`${className} flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 max-w-lg w-full`}
    >
      <FooterSocialLinks />
      <FooterAsciiWave />
    </div>
  );
}
