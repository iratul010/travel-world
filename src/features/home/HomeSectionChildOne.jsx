import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import ImgOne from "../../../public/Rectangle-5.png";
import ImgTwo from "../../../public/Rectangle-6.png";
import ImgThree from "../../../public/Rectangle-7.png";

const StyledParentDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 7.8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const positions = {
  one: css`
    top: 120px;
    left: 35px;

    background-image: url(${ImgOne});
  `,
  two: css`
    top: 220px;
    left: 270px;
    background-image: url(${ImgTwo});
  `,
  three: css`
    top: 320px;
    left: 510px;
    background-image: url(${ImgThree});
  `,
};
const StyledImg = styled.img`
 border-radius: 42px;
  width: 220px;  
  height: 400px;  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute; 
  border: 2px solid var(--color-yellow-600);  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${props => positions[props.position]}
`;
const StyledChildOne = styled.div`
  
  width: 100%;
 
`;
const StyledChildTwo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  margin-left: 8rem;
`;

function HomeSectionChildOne() {
  return (
    <StyledParentDiv>
      <StyledChildOne>
        <p>Know before you go</p>
        <h1>Traveling opens the door to creating memories</h1>
        <p>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </p>
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
