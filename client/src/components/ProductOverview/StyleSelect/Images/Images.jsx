import React from 'react';
import SelectedImage from './SelectedImage.jsx';
import Carousel from './Carousel.jsx';
import { ImagesOfSelectedStyle } from '../StyleSelect.jsx';


export var VisibleThumbnails = React.createContext();

var Images = () => {

  var [imageGallery, updateImageGallery] = React.useContext(ImagesOfSelectedStyle);
  var visiblePhotos = imageGallery.slice(0, 7);
  // initialize to first 7 in gallery
  var [visibleThumbnails, updateVisibleThumbnails] = React.useState(visiblePhotos);

  React.useEffect(() => {
    console.log('called useEffect to update visible thumbnails');
    updateVisibleThumbnails(visiblePhotos);
  }, [JSON.stringify(visiblePhotos)]);


  // todo: conditionally render the expanded view, add a clickevent listener for assessing the t/f value of expanded state, switch the flag when clicked
  return (
    <div id="all-images">
      {/* TODO: project requirement: overlay the gallery onto the selected image */}
      <VisibleThumbnails.Provider value={[visibleThumbnails, updateVisibleThumbnails]} >
        <SelectedImage />
        <Carousel />
      </VisibleThumbnails.Provider>
    </div>
  );
};

export default Images;
