import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'relative inline-block bg-end whitespace-nowrap text-[1.0625rem] font-semibold uppercase leading-4 tracking-wider outline outline-1 transition-colors duration-500 hover:bg-initial focus-visible:bg-initial from-50% to-50% bg-double disabled:cursor-not-allowed disabled:bg-none disabled:text-white/50 disabled:outline-white/50 bg-gradient-to-r',
  {
    variants: {
      variant: {
        default:
          'from-white to-transparent text-white outline-white hover:text-black-400 focus-visible:text-black-400',
        dark: 'from-black-400 to-transparent text-black-400 outline-black-400 hover:text-white focus-visible:text-white',
        black:
          'from-white to-black-400 text-white outline-black-400 hover:text-black-400 focus-visible:text-black-400',
      },
      size: {
        default: 'p-6',
        large: 'px-14 py-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = ({ as = undefined, children, variant, size, className, ...props }) => {
  const Comp = as || 'button';

  return (
    <Comp {...props} className={buttonVariants({ variant, size, className })}>
      {children}
    </Comp>
  );
};

export default Button;
