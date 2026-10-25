import type { ReactNode } from "react";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: Props & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Fill({ children, ...props }: Props & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

/* Navigation & actions */
export const ArrowRight = (p: Props) => (
  <Stroke {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Stroke>
);

export const ArrowLeft = (p: Props) => (
  <Stroke {...p}>
    <path d="M20 12H5" />
    <path d="m11 6-6 6 6 6" />
  </Stroke>
);

export const ArrowUpRight = (p: Props) => (
  <Stroke {...p}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </Stroke>
);

export const ChevronDown = (p: Props) => (
  <Stroke {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Stroke>
);

export const Menu = (p: Props) => (
  <Stroke {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
);

export const Close = (p: Props) => (
  <Stroke {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Stroke>
);

export const Check = (p: Props) => (
  <Stroke {...p}>
    <path d="m5 12.6 4.4 4.4L19 7.5" />
  </Stroke>
);

/* Search & trip fields */
export const Search = (p: Props) => (
  <Stroke {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
  </Stroke>
);

export const MapPin = (p: Props) => (
  <Stroke {...p}>
    <path d="M12 21s-7-5.7-7-11a7 7 0 1 1 14 0c0 5.3-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Stroke>
);

export const Calendar = (p: Props) => (
  <Stroke {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </Stroke>
);

export const CalendarCheck = (p: Props) => (
  <Stroke {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
    <path d="m8.7 15.4 2.2 2.2 4.4-4.4" />
  </Stroke>
);

export const Users = (p: Props) => (
  <Stroke {...p}>
    <circle cx="9.5" cy="8.5" r="3.5" />
    <path d="M3.5 19.5v-1.2A4.3 4.3 0 0 1 7.8 14h3.4a4.3 4.3 0 0 1 4.3 4.3v1.2" />
    <path d="M16.2 5.4a3.5 3.5 0 0 1 0 6.2" />
    <path d="M17.7 14.4a4.3 4.3 0 0 1 2.8 4v1.1" />
  </Stroke>
);

export const Wallet = (p: Props) => (
  <Stroke {...p}>
    <rect x="3" y="6" width="18" height="13" rx="3" />
    <path d="M3 10.5h18" />
    <circle cx="16.6" cy="14.9" r="1.2" fill="currentColor" stroke="none" />
  </Stroke>
);

/* Feature icons */
export const ShieldCheck = (p: Props) => (
  <Stroke {...p}>
    <path d="M12 3.2 5 6v5.4c0 4.3 2.9 7.5 7 9.4 4.1-1.9 7-5.1 7-9.4V6l-7-2.8Z" />
    <path d="m9 12.1 2.2 2.2 4.3-4.4" />
  </Stroke>
);

export const Compass = (p: Props) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="m15.4 8.6-2.1 5-4.8 2.1 2.1-5 4.8-2.1Z" />
  </Stroke>
);

export const Headset = (p: Props) => (
  <Stroke {...p}>
    <path d="M4.2 13.4v-1.6a7.8 7.8 0 0 1 15.6 0v1.6" />
    <path d="M4.2 13h2.4a1.4 1.4 0 0 1 1.4 1.4v3.2A1.4 1.4 0 0 1 6.6 19H5.6a1.4 1.4 0 0 1-1.4-1.4V13Z" />
    <path d="M19.8 13h-2.4a1.4 1.4 0 0 0-1.4 1.4v3.2a1.4 1.4 0 0 0 1.4 1.4h1a1.4 1.4 0 0 0 1.4-1.4V13Z" />
    <path d="M18.6 19v.4a2.4 2.4 0 0 1-2.4 2.4h-2.6" />
  </Stroke>
);

export const Tag = (p: Props) => (
  <Stroke {...p}>
    <path d="M4 12.6V5.6A1.6 1.6 0 0 1 5.6 4h7L20 11.4a1.6 1.6 0 0 1 0 2.2l-6.4 6.4a1.6 1.6 0 0 1-2.2 0L4 12.6Z" />
    <circle cx="8.6" cy="8.6" r="1.4" />
  </Stroke>
);

export const Sparkle = (p: Props) => (
  <Fill {...p}>
    <path d="M12 3.2 13.8 9l5.8 1.8-5.8 1.8L12 18.4l-1.8-5.8L4.4 10.8 10.2 9 12 3.2Z" />
    <path d="M18.6 15.4l.8 2.3 2.3.8-2.3.8-.8 2.3-.8-2.3-2.3-.8 2.3-.8.8-2.3Z" />
  </Fill>
);

export const Plane = (p: Props) => (
  <Stroke {...p}>
    <path d="M20.8 3.4 10.6 13.6" />
    <path d="M20.8 3.4 14.3 21l-3.7-7.4L3.2 9.9l17.6-6.5Z" />
  </Stroke>
);

/* Contact & social */
export const Mail = (p: Props) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m3.9 7.2 6.7 4.9a2 2 0 0 0 2.4 0l6.7-4.9" />
  </Stroke>
);

export const Phone = (p: Props) => (
  <Stroke {...p}>
    <path d="M6.6 3.6h3l1.5 4-2 1.5a12 12 0 0 0 5.8 5.8l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.8a2 2 0 0 1 2-2.2Z" />
  </Stroke>
);

export const Instagram = (p: Props) => (
  <Stroke {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
  </Stroke>
);

export const Linkedin = (p: Props) => (
  <Stroke {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <path d="M8 10.4V17" />
    <circle cx="8" cy="7.7" r="1.1" fill="currentColor" stroke="none" />
    <path d="M12 17v-3.6a2.6 2.6 0 0 1 5.2 0V17" />
    <path d="M12 10.4V17" />
  </Stroke>
);

export const XLogo = (p: Props) => (
  <Fill {...p}>
    <path d="M4 3h4.6l4.1 5.6L17.6 3H20l-6.3 7.2L20.7 21h-4.6l-4.4-6-5.1 6H4l6.7-7.7L4 3Z" />
  </Fill>
);

export const Star = (p: Props) => (
  <Fill {...p}>
    <path d="m12 3.2 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9L12 3.2Z" />
  </Fill>
);
