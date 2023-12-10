import styled from "styled-components";
import backgroundImage from "../../../public/bg.png";
const StyledSection = styled.section`
  height: 800px;
  width: 100%;
  background-image: linear-gradient(to right , transparent,rgba(12, 12, 0, 0.648) , rgba(12, 12, 0, 0.625)), url(${backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  

`;
function HomeSection() {
  return (
    <StyledSection> 
      <div>
        <h1>Welcome to My Website</h1>
        <p>Explore and Discover</p>
        {/* You can add more content here */}
      </div>
    </StyledSection>
  );
}

export default HomeSection;
