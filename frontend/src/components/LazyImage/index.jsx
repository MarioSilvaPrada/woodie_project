import React from 'react';
import { LazyImage } from 'react-lazy-images';

const MyLazyImage = ({ alt, Element, src }) => {
  return (
    <LazyImage
      alt={alt}
      placeholder={({ imageProps, ref }) => (
        <div
          ref={ref}
          style={{
            height: '100%',
            width: '100%',
            background: 'rgba(0,0,0,0.2)',
            margin: '.2rem',
          }}
        />
      )}
      src={src}
      actual={() => {
        return Element;
      }}
    />
  );
};

export default MyLazyImage;
