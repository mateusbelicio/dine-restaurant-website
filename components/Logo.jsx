import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='h-8 sm:h-10 inline-block'>
      <Image src='/assets/logo.svg' alt='Dine logo' height={40} width={103} className='mx-auto h-full w-auto object-contain lg:mx-0' />
    </Link>
  );
};

export default Logo;
