import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import ImgOne from "../../../public/Rectangle-5.png";
import ImgTwo from "../../../public/Rectangle-6.png";
import ImgThree from "../../../public/Rectangle-7.png";

const StyledParentDiv = styled.div`
  width: 100%;
  height: 400px;
  padding: 1.2rem 7.8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const positions = {
  one: css`
    top: 70px;
    left: 35px;
    background-image: url(${ImgOne});
  `,
  two: css`
    top: 140px;
    left: 245px;
    background-image: url(${ImgTwo});
  `,
  three: css`
    top: 210px;
    left: 455px;
    background-image: url(${ImgThree});
  `,
};
const StyledImg = styled.img`
  width: 170px;
  height: 240px;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  border-radius: 10%;
  border: 1.5px solid var(--color-orange-600);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${props => positions[props.position]}
`;
const StyledChildOne = styled.div`
  width: 100%;
  margin-top: 25rem;
  
`;
const StyledChildTwo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  margin-left: 8rem;
`;
const StyledP = styled.p`
  width: fit-content;
  padding: 0.5rem 2rem;
  border-radius: 5rem;
  color: var(--color-grey-50);
  font-size: 28px;
  font-family: "Dancing Script", cursive;
  font-weight: 500;
  background-color: var(--color-orange-500);
`;
const StyledHOne = styled.h1`
  font-size: 3rem;
  span {
    color: var(--color-orange-600);
  }
`;
const StyledPSummery = styled.p`
  font-size: 2rem;
  margin: 1.5rem 0;
`;
function HomeSectionChildOne() {
  return (
    <StyledParentDiv>
      <StyledChildOne>
        <StyledP>Know before you go</StyledP>
        <StyledHOne>
          Traveling opens the door to creating <span>Memories</span>
        </StyledHOne>
        <StyledPSummery>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </StyledPSummery>
        <Button variation="primary" size="large">
          Sign In
        </Button>
      </StyledChildOne>
      <StyledChildTwo>
        <StyledImg position="one" />
        <StyledImg position="two" />
        <StyledImg position="three" />
      </StyledChildTwo>
    </StyledParentDiv>
  );
}

export default HomeSectionChildOne;
