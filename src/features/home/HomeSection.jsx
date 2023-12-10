import styled from "styled-components";
import bgImg from "../../../public/bg.png";
import HomeSectionChildOne from "./HomeSectionChildOne";
import HomeSectionChildTwo from "./HomeSectionChildTwo";
const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  gap:4rem;
  background-image: linear-gradient(to right , transparent,rgba(12, 12, 0, 0.648) , rgba(12, 12, 0, 0.625)), url(${bgImg});
  background-size: cover;
  overflow: hidden;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
function HomeSection() {
  return (
    <StyledSection> 
     <HomeSectionChildOne/>
     <HomeSectionChildTwo/>
    </StyledSection>
  );
}

export default HomeSection;
