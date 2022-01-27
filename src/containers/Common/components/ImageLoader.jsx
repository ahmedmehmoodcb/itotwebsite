import React from "react";
import PropTypes from "prop-types";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageLoader({ src, alt, className, scrollPosition }) {
  return (
    <>
      <LazyLoadImage
        alt={alt}
        src={src}
        effect="blur"
        className={className}
        scrollPosition={scrollPosition}
      />
    </>
  );
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  scrollPosition: PropTypes.number.isRequired,
};

ImageLoader.defaultProps = {
  className: "",
};

export default trackWindowScroll(ImageLoader);
