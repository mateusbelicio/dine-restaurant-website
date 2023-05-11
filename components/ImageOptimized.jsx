const ImageOptimized = ({ path, type, alt, classImage, ...props }) => {
  const src = `/assets/${path}`;

  return (
    <picture {...props}>
      <source media='(min-width: 58em)' srcSet={`${src}-desktop.${type} 1x, ${src}-desktop@2x.${type} 2x`} />
      <source media='(min-width: 40em)' srcSet={`${src}-tablet.${type} 1x, ${src}-tablet@2x.${type} 2x`} />
      <source srcSet={`${src}-mobile.${type} 1x, ${src}-mobile@2x.${type} 2x`} />
      <img className={classImage} src={`${src}-mobile.${type}`} alt={alt} />
    </picture>
  );
};

export default ImageOptimized;
