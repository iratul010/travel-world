import styled from "styled-components";
import bgImg from "../../../public/bg.png";
import HomeSectionChildOne from "./HomeSectionChildOne";
import HomeSectionChildTwo from "./HomeSectionChildTwo";
 
 
const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to left, transparent,rgba(12, 1, 0, 0.648) , rgba(60, 61, 47, 0.625)), url(${bgImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:10rem;
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
