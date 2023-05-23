export const getImageDimensions = (imageUrl) => {
  return {
    width: imageUrl.split('/')[5].split('x')[0],
    height: imageUrl.split('/')[5].split('x')[1]
  };
};
