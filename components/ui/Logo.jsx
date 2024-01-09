import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const Logo = ({ className }) => {
  return (
    <Link
      href="/"
      className={twMerge(
        'inline-block h-8 outline-offset-4 focus-visible:outline-none focus-visible:outline-primary-400 sm:h-10',
        className
      )}
    >
      <Image
        src="/assets/logo.svg"
        alt="Dine restaurant logo"
        height={40}
        width={103}
        className="mx-auto h-full w-auto object-contain lg:mx-0"
      />
    </Link>
  );
};

export default Logo;
