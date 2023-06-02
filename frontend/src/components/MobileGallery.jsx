import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";



import NextIcon from "./Icons/NextIcon";
import PreviousIcon from "./Icons/PreviousIcon";

// const IMAGES = [product1, product10, product11, product12];

const MobileGallery = ({product}) => {
  console.log(product)
  const {gallery, image, name, videoTutorials } = product
  // const IMAGES = gallery.push(image)
  const [currentMobileImage, setCurrentMobileImage] = useState(image);
  const [mobileImageIndex, setMobileImageIndex] = useState(1);

  let IMAGES = [];

  useEffect(()=>{
    if(!product){
      return
    }
    let galleryAndMainPic = gallery.push(image)
    IMAGES.concat(galleryAndMainPic)
  },[product])
  const handleIncrement = () => {
    if (mobileImageIndex === IMAGES.length - 1) {
      setCurrentMobileImage(IMAGES[0]);
      setMobileImageIndex(0);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex + 1]);
      setMobileImageIndex(mobileImageIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (mobileImageIndex === 0) {
      setCurrentMobileImage(IMAGES[IMAGES.length - 1]);
      setMobileImageIndex(IMAGES.length - 1);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex - 1]);
      setMobileImageIndex(mobileImageIndex - 1);
    }
  };

  return (
    <section className="mobile-gallery hide-in-desktop">
      <IconButton
        className="icon-button-prev"
        disableRipple
        onClick={handleDecrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <PreviousIcon />
      </IconButton>
      <img src={currentMobileImage} alt="featured-product" />
      <IconButton
        className="icon-button-next"
        disableRipple
        onClick={handleIncrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        <NextIcon />
      </IconButton>
    </section>
  );
};

export default MobileGallery;
