import { getImageDimensions } from '../../utils/get-image-dimensions';

const Image = ({ src, alt, loading, className }) => {
  const { width, height } = getImageDimensions(src);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
      loading={loading}
    />
  );
};

export default Image;
