import styled from "styled-components";
 
import HomeSection from "../features/home/HomeSection";
import HomeTourServeSection from "../features/home/HomeTourServeSection";
 
import HomeFeaturesSection from "../features/home/HomeFeaturesSection";
import HomeGallerySection from "../features/home/HomeGallerySection";
import HomeEmailSection from "../features/home/HomeEmailSection";

 const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  
 `
function Home() {
  return (
    <StyledHomeContainer>
      <HomeSection/>
      <HomeTourServeSection/>
      <HomeFeaturesSection/>
      <HomeGallerySection/>
      <HomeEmailSection/>
    </StyledHomeContainer>
  );
}

export default Home;
