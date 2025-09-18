import Image from 'next/image';

import Quran from '@/images/quran.svg';
import Search from '@/images/search.svg';

import { IconName } from '@/lib/iconNames';

const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  quran: Quran,
  search: Search
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  alt?: string;
};

export default function Icon({ name, size = 24, className = '', alt = '' }: IconProps) {
  return (
    <Image
      src={iconMap[name]}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
      priority={false}
      quality={100}
    />
  );
}
