/* eslint-disable react/prop-types */
import styled from "styled-components";

import ProgressBar from "../../ui/ProgressBar";
import { HiHome } from "react-icons/hi2";
import { HiWifi } from "react-icons/hi2";
import { HiMiniTv } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { GiKitchenScale, GiSlippers, GiTowel } from "react-icons/gi";
import { MdSmokeFree } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import { FaToiletPaper } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GoStopwatch } from "react-icons/go";
import { GiCoffeeCup } from "react-icons/gi";
import { GiWaterBottle } from "react-icons/gi";
import { TbFreezeColumn } from "react-icons/tb";
import { GiCook } from "react-icons/gi";
import { MdPreview } from "react-icons/md";

const DetailsContainer = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  height: 400px;
  overflow-y: auto;
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
            {galleryDetails?.info?.detailsRoom}
          </StyledHeading>
          <StyledHeading>Guest Ratings</StyledHeading>
          <p><MdPreview/> {galleryDetails?.info?.review} reviews</p>
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
              <li>
                <MdSmokeFree /> {galleryDetails?.info?.features?.smoke}
              </li>
              <li>
                <FaShower /> {galleryDetails?.info?.features?.shower}
              </li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading value="h3">Bathroom and toiletries</StyledHeading>
            <ul>
              <li>💇‍♀️{galleryDetails?.info?.bathroomAndToiletries?.one}</li>
              <li>💇‍♀️{galleryDetails?.info?.bathroomAndToiletries?.two}</li>
              <li>
                <GiMirrorMirror />{" "}
                {galleryDetails?.info?.bathroomAndToiletries?.three}
              </li>
              <li>
                <FaToiletPaper />{" "}
                {galleryDetails?.info?.bathroomAndToiletries?.four}
              </li>
              <li>
                <GiTowel /> {galleryDetails?.info?.bathroomAndToiletries?.five}
              </li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading>Kitchen</StyledHeading>
            <ul>
              <li>
                <GiKitchenScale /> {galleryDetails?.info?.kitchen}
              </li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading value="h3">Entertainment</StyledHeading>
            <ul>
              <li>
                <HiWifi /> {galleryDetails?.info?.entertainment?.network}
              </li>
              <li>
                <HiMiniTv /> {galleryDetails?.info?.entertainment?.satelite}
              </li>
              <li>
                <HiPhone /> {galleryDetails?.info?.entertainment?.contact}
              </li>
              <li>🎮 {galleryDetails?.info?.entertainment?.childEnjoy}</li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading value="h3">Comforts</StyledHeading>
            <ul>
              <li>
                <TbAirConditioning /> {galleryDetails?.info?.comforts?.one}
              </li>
              <li>
                <GiSlippers /> {galleryDetails?.info?.comforts?.two}
              </li>
              <li>
                <GoStopwatch /> {galleryDetails?.info?.comforts?.three}
              </li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading value="h3">
              Dining, drinking, and snacking
            </StyledHeading>
            <ul>
              <li>
                <GiCoffeeCup /> {galleryDetails?.info?.dining?.one}
              </li>
              <li>
                <GiWaterBottle /> {galleryDetails?.info?.dining?.two}
              </li>
              <li>
                <TbFreezeColumn /> {galleryDetails?.info?.dining?.three}
              </li>
            </ul>
          </ParentDiv>
          <ParentDiv>
            <StyledHeading>Services and conveniences</StyledHeading>
            <ul>
              <li>
                <GiCook/> {galleryDetails?.info?.servicesAndConveniences}
              </li>
        
            </ul>
          </ParentDiv>
        </>
      }
    </DetailsContainer>
  );
}

export default GalleryDetailsContainer;
