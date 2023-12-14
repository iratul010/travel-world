import styled, { css } from "styled-components";
import { HiMiniCheckCircle } from "react-icons/hi2";

const StyledTourSection = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 250px 1fr;
  gap: 5px;
  width: 80%;
  height: 340px;
  padding: 1.6rem 4rem;
`;
const childs = {
  ChildOne: css`
    width: 300px;
    display: flex;
   
    flex-direction: column;
    align-items:center;
    justify-content: end;
  `,

  ChildTwo: css`
    display: flex;
    gap: 1rem;
    padding: 20px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
  `,
};

const StyledTourDiv = styled.div`
  flex: 1;
  box-sizing: border-box;
  ${props => childs[props.child]}
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
const StyledTourChild = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  border-radius: 10%;
  border: 2px solid var(--color-orange-600);
  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
`;
const StyledH3 = styled.h3`
  font-size: 2rem;
`;
const Styledp = styled.p`
  font-size: 1.5rem;
`;
const StyledLogo = styled(HiMiniCheckCircle)`
  color: var(--color-orange-600);
  width: 50px; /* Set your desired width */
  height: 50px; /* Set your desired height */
`;
function HomeTourServe() {
  return (
    <StyledTourSection>
      <StyledTourDiv child="ChildOne">
        <StyledP>What We Serve</StyledP>
        <StyledH1>
          We Offer Our <br />
          Best Services
        </StyledH1>
      </StyledTourDiv>
      <StyledTourDiv child="ChildTwo">
        <StyledTourChild>
          <StyledLogo />
          <StyledH3>Calculate Weather</StyledH3>
          <Styledp>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Styledp>
        </StyledTourChild>
        <StyledTourChild>
          <StyledLogo />
          <StyledH3>Best Tour Guide</StyledH3>
          <Styledp>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Styledp>
        </StyledTourChild>
        <StyledTourChild>
          <StyledLogo />
          <StyledH3>Customization</StyledH3>
          <Styledp>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Styledp>
        </StyledTourChild>
      </StyledTourDiv>
    </StyledTourSection>
  );
}

export default HomeTourServe;
