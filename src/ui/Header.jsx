import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 1rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-orange-600);
   
    border-radius: var(--border-radius-sm);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  align-items: center;
  gap: 1rem;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to='/home'>
        <Logo />
      </StyledNavLink>
      <NavList>
        <li>
          <StyledNavLink to="/home">
            <span>Home</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/about">
            <span>About</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/tour">
            <span>Tour</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/hotel">
            <span>Hotel</span>
          </StyledNavLink>
        </li>
      </NavList>
      <StyledDiv>
        <StyledNavLink to="/login">
          <Button variation="primary" size="medium">
            Login
          </Button>
        </StyledNavLink>

        <StyledNavLink to="/signup">
          <Button variation="primary" size="medium">
            Register
          </Button>
        </StyledNavLink>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
