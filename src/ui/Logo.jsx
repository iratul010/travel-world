import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4.6rem;
  width: auto;
   background-color: #fff;
`;
Img.defaultProps={
   
}
function Logo() {
  return (
    <StyledLogo>
      <Img src="/public/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
