import { getImageDimensions } from '../../utils/get-image-dimensions';
import { optimizeImage } from '../../utils/optimize-image';

const CustomImage = ({ src, alt, loading, className }) => {
  const { width, height } = getImageDimensions(src);

  return (
    <img
      src={optimizeImage(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
      loading={loading}
    />
  );
};

export default CustomImage;
