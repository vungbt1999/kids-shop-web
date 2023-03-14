import clsx from 'clsx';
import { IconProps } from '.';

export default function ChevronRight({ className, transform, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
