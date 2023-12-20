/* eslint-disable react/prop-types */
import styled from "styled-components";

import ProgressBar from "../../ui/ProgressBar";
import { HiHome } from "react-icons/hi2";

const DetailsContainer = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
`;
const ProgressDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const StyledHeading = styled.h3`
  margin-top: 8px;
  font-weight: "bold";
  font-size: ${({ value }) => (value === "h3" ? "1.17em" : "1em")};
`;
const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0;
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: small;
  }
`;
function GalleryDetailsContainer({ galleryDetails }) {
  return (
    <DetailsContainer>
      {
        <>
          <StyledHeading value="h3">
            {" "}
            {galleryDetails?.info?.detailsRoom}
          </StyledHeading>
          <StyledHeading>Guest Ratings</StyledHeading>
          <p>3733 reviews</p>
          <ProgressDiv>
            <ProgressBar
              value={galleryDetails?.info?.guestRatings?.roomComfort}
              title={"Room comfort and quality"}
            />
            <ProgressBar
              value={galleryDetails?.info?.guestRatings?.cleanliness}
              title={"Room comfort and quality"}
            />
          </ProgressDiv>
          <ParentDiv>
            <StyledHeading>Features</StyledHeading>
            <ul>
              <li>
                <HiHome /> Room size: {galleryDetails?.info?.features?.roomSize}
              </li>
              <li>🚬 {galleryDetails?.info?.features?.smoke}</li>
              <li>🛀 {galleryDetails?.info?.features?.shower}</li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading value="h3">Bathroom and toiletries</StyledHeading>
            <ul>
              <li>💇‍♀️ {galleryDetails?.info?.bathroomAndToiletries?.one}</li>
              <li>🪞 {galleryDetails?.info?.bathroomAndToiletries?.two}</li>
              <li>🛀 {galleryDetails?.info?.bathroomAndToiletries?.three}</li>
              <li>🪞 {galleryDetails?.info?.bathroomAndToiletries?.four}</li>
              <li>🛀 {galleryDetails?.info?.bathroomAndToiletries?.five}</li>
            </ul>
          </ParentDiv>
        </>
      }
    </DetailsContainer>
  );
}

export default GalleryDetailsContainer;
