import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import Button from "../../ui/Button";

const StyledHeaderSearch = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  padding: 1.2rem 4.8rem;
  margin: 4rem 0px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c2bebe2d;
`;
const StyledHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledItemInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid var(--color-grey-100);
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;


  &:focus,:active {
    outline-color: var(--color-orange-600);
    border-color: #f1ddc2;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.5);  

  }
`;
const StyledDateSpan = styled.span`
  cursor: pointer;
  color: var(--color-grey-50);
`;
function HomeSectionChildOne() {
  return (
    <StyledHeaderSearch>
      <StyledHeaderItem>
        <HiMagnifyingGlass />
        <StyledItemInput type="text" placeholder="Dhaka" />
      </StyledHeaderItem>
      <StyledHeaderItem>
        <HiCalendarDays />
        <StyledDateSpan>Date to Date</StyledDateSpan>
      </StyledHeaderItem>
      <StyledHeaderItem>
        <HiUsers />
        <span>2 adults 2 children 1 room</span>
      </StyledHeaderItem>

      <Button variation="primary" size="large">
        Search
      </Button>
    </StyledHeaderSearch>
  );
}

export default HomeSectionChildOne;
