/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import featuresData from "../../data/features/data-features";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import FeaturesGalleryDetails from "./FeaturesGalleryDetails";

const StyledP = styled.p`
  width: fit-content;
  padding: 0.5rem 2rem;
  color: var(--color-grey-50);
  font-size: 28px;
  font-family: "Dancing Script", cursive;
  font-weight: 500;
  color: var(--color-orange-500);
`;
const StyledH1 = styled.h1`
  font-size: 2.6rem;
  padding: 0.5rem 2rem;
`;
const StyledFeaturesSection = styled.section`
  width: 80%;
  height: 100vh;
  padding: 1.4rem 9.8rem;
`;
const StyledFeaturesDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
`;
const StyledFeaturesParent = styled.div`
  max-width: 350px;
  height: 400px;

  text-align: start;
  box-sizing: border-box;
  border: 2px solid var(--color-grey-100);
  border-radius: 5%;
`;
const StyledBudgetParent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const types = {
  img: css``,
  info: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 1.2rem;
  `,
};
const StyledFeaturesChild = styled.div`
  display: flex;

  ${props => types[props.type]}
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 200px;

  background-size: cover;
  background-position: center;
  border-radius: 3%;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

const StyledBudget = styled.div``;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Adjust bottom positioning */
  right: 10px; /* Adjust right positioning */
`;
const StyledBudgetSpan = styled.span`
  color: var(--color-orange-600);
  font-size: 2rem;
`;
const StyledPlaceDiv = styled.div`
  min-height: 10rem;
`;
const StyledDescriptionP = styled.p``;
function HomeFeaturesSection() {
  const datas = featuresData;
  console.log(datas);

  return (
    <StyledFeaturesSection>
      <StyledP>Explore</StyledP>
      <StyledH1>We Offer Our Best Services</StyledH1>
      <StyledFeaturesDiv>
        {datas.map(data => (
          <StyledFeaturesParent key={data.id}>
            <StyledFeaturesChild type="img">
              <ImgDiv>
                <img src={data.imageUrl} alt={data.imageUrl} />
                <ButtonContainer>
                  <Modal>
                    <Modal.Open opens="cabin-form">
                      <Button variation="primary" size="medium">
                        Featured
                      </Button>
                    </Modal.Open>
                    <Modal.Window name="cabin-form">
                       <FeaturesGalleryDetails galleryDetails ={data?.galleryDetails}/>
                    </Modal.Window>
                  </Modal>
                </ButtonContainer>
              </ImgDiv>
            </StyledFeaturesChild>
            <StyledFeaturesChild type="info">
              <StyledPlaceDiv>
                <h3>{data.placeName}</h3>
                <StyledDescriptionP>{data.description}</StyledDescriptionP>
              </StyledPlaceDiv>
              <StyledBudgetParent>
                <StyledBudget>
                  <StyledBudgetSpan>${data.budget}/</StyledBudgetSpan>per person
                </StyledBudget>
                <Button size="medium" variation="primary">
                  Book Now
                </Button>
              </StyledBudgetParent>
            </StyledFeaturesChild>
          </StyledFeaturesParent>
        ))}
      </StyledFeaturesDiv>
    </StyledFeaturesSection>
  );
}

export default HomeFeaturesSection;
