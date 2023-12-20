/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import styled from "styled-components";
import DetailsContaine from "./GalleryDetailsContainer";
import GalleryDetailsContainer from "./GalleryDetailsContainer";

// Sample image URLs

// Styled components
const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ImageGallery = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 260px;
  height: 200px;
  object-fit: cover;
  margin: 5px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Update shadow */
  transition: box-shadow 0.3s ease; /* Adding transition for hover effect */

  
`;

const FeaturesGalleryDetails = ({ galleryDetails }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleDetailsButtonClick = () => {
    // Handle details button click action
    console.log("Details button clicked for", selectedImage);
    // You can implement a modal or another action here
  };

  return (
    <GalleryContainer>
      <ImageGallery>
        {galleryDetails.gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </ImageGallery>
      <GalleryDetailsContainer galleryDetails={galleryDetails} />
    </GalleryContainer>
  );
};

export default FeaturesGalleryDetails;
