import styled from "styled-components";
import HomeBody from "../features/home/HomeBody";
import HomeSection from "../features/home/HomeSection";

 const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 `
function Home() {
  return (
    <StyledHomeContainer>
      <HomeSection/>
      <HomeBody/>
    </StyledHomeContainer>
  );
}

export default Home;
