import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/MyGallery.css";

import { Image } from "react-grid-gallery";

// Currenlty unused implementation of react-grid-gallery and yet-another-react-lightbox

export const images = [];

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

function MyGallery(props) {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <div id="ReactGridGallery">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default MyGallery;
