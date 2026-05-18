import type { SVGProps } from 'react';

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

type Props = SVGProps<SVGSVGElement>;

export const Check = (p: Props) => (
  <svg {...base} {...p}><polyline points="20 6 9 17 4 12" /></svg>
);

export const Shield = (p: Props) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export const Home = (p: Props) => (
  <svg {...base} {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" /></svg>
);

export const Palette = (p: Props) => (
  <svg {...base} {...p}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h2a4 4 0 0 0 4-4 10 10 0 0 0-10-11z" />
  </svg>
);

export const Umbrella = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M22 12a10 10 0 0 0-20 0z" />
    <path d="M12 12v6a2 2 0 0 0 4 0" />
  </svg>
);

export const Star = (p: Props) => (
  <svg {...base} {...p}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" /></svg>
);