const Button = ({ as, children, variant, ...props }) => {
  const Comp = as || 'button';
  const variantClasses = variant
    ?.split(' ')
    .map((v) => `btn--${v}`)
    .join(' ');

  return (
    <Comp {...props} className={`btn ${variantClasses || ''}`}>
      {children}
    </Comp>
  );
};

export default Button;
