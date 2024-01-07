import { twMerge } from 'tailwind-merge';
import patternDivider from '/public/assets/patterns/pattern-divide.svg';
import Image from 'next/image';

const Divider = ({ className }) => {
  return (
    <span className={twMerge('inline-block text-center', className)}>
      <Image src={patternDivider} width={71} height={7} alt="" aria-hidden="true" />
    </span>
  );
};

export default Divider;
