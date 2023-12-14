import styled from "styled-components";
import ImgData from "../../data/gallery/data-gallery";

const StyledGallerySection = styled.section`
  width: 80%;
  height: 100%;
  padding: 1.4rem 4.8rem;
  margin: 0 auto;
 
`;
const StyledGalleryDiv = styled.div`
  column-count: 4;
  column-width: 33%;
  padding: 0 2rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 350ms ease;
   
`;
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
function HomeGallerySection() {
  const images = ImgData;

  return (
    <StyledGallerySection>
      <StyledP>Gallery</StyledP>
      <StyledH1>Visit Our Customer Tour Gallery</StyledH1>
      <StyledGalleryDiv>
        {images.map((image, index) => (
          <Image key={index} src={image.Img} alt={`Image ${index + 1}`} />
        ))}
      </StyledGalleryDiv>
    </StyledGallerySection>
  );
}

export default HomeGallerySection;
