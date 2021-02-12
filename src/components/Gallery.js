import React from "react";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import image1 from "../assets/images/buttonSML01.png"; 
import image2 from "../assets/images/buttonSML02.png";
import image3 from "../assets/images/buttonSML03.png";
import image4 from "../assets/images/buttonSML04.png";
import image5 from "../assets/images/buttonSML05.png";
import image6 from "../assets/images/buttonSML06.png";
import image7 from "../assets/images/buttonSML07.png";
import image8 from "../assets/images/buttonSML08.png";
import porfolio01 from "../assets/images/porfolio01.png";
import porfolio02 from "../assets/images/porfolio02.png";
import porfolio03 from "../assets/images/porfolio03.png";
import porfolio04 from "../assets/images/porfolio04.png";
import porfolio05 from "../assets/images/porfolio05.png";
import porfolio06 from "../assets/images/porfolio06.png";
import porfolio07 from "../assets/images/porfolio07.png";
import porfolio08 from "../assets/images/porfolio08.png";
import "../Gallery.css";


const IMAGES =
  [{
    src: porfolio01,
    thumbnail: image1,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    // isSelected: true,
     caption: "Abbott Diagnostics"
  },
  {
    src: porfolio02,
    thumbnail: image2,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "NSW Government Transport Department"
  }, {
    src: porfolio03,
    thumbnail: image3,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "Skycoin"
  }, {
    src: porfolio04,
    thumbnail: image4,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "Reuters"
  }, {
    src: porfolio05,
    thumbnail: image5,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "News Ltd"
  }, {
    src: porfolio06,
    thumbnail: image6,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "Governemnet Insurance Regulator"
  }, {
    src: porfolio07,
    thumbnail: image7,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "Pharmacy Guild of Australia"
  },
  {
    src: porfolio08,
    thumbnail: image8,
    thumbnailWidth: 170,
    thumbnailHeight: 130,
    caption: "Woolworths Supermarkets"
  }]

const MyGallery = ({ isOpen, lightboxWillClose }) => {


  return (
    <Gallery backdropClosesModal={true} enableImageSelection={false} images={IMAGES} isOpen={isOpen} lightboxWillClose={lightboxWillClose} />
  )
};


export default MyGallery;
