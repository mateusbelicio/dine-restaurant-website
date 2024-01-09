import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'relative inline-block bg-end whitespace-nowrap text-[1.0625rem] font-semibold uppercase leading-4 tracking-wider border transition-colors duration-500 hover:bg-initial focus-visible:bg-initial focus-visible:outline-none focus-visible:outline-primary-400 focus-visible:outline-offset-2 from-50% to-50% bg-double disabled:cursor-not-allowed disabled:bg-none disabled:text-white/50 disabled:outline-white/50 bg-gradient-to-r',
  {
    variants: {
      variant: {
        default:
          'from-white to-transparent text-white border-white hover:text-black-400 focus-visible:text-black-400',
        black:
          'from-white to-black-400 text-white border-black-400 hover:text-black-400 focus-visible:text-black-400',
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
