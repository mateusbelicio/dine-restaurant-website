import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className }) => {
  return (
    <Link href='/' className={`inline-block h-8 sm:h-10 ${className || ''}`}>
      <Image src='/assets/logo.svg' alt='Dine logo' height={40} width={103} className='mx-auto h-full w-auto object-contain lg:mx-0' />
    </Link>
  );
};

export default Logo;
