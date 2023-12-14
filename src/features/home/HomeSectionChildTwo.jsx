import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { DateRange } from "react-date-range";
import Button from "../../ui/Button";
import { useState } from "react";
const StyledHeaderSearch = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  padding: 1.4rem 4.8rem;
  margin: 1rem 0px;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  border-radius: 1rem;
  background-color: #ffffff2b;
 
`;
const StyledHeaderItem = styled.div`
  width: 100%;
  height: 60px;
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
  color: var(--color-black);
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus,
  :active {
    outline-color: var(--color-orange-600);
    border-color: var(--color-orange-700);
    box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.5);
  }
`;
const StyledDateSpan = styled.span`
  cursor: pointer;
   
`;
const StyledDateRange = styled.div`
  position: absolute;
  top: 50px;
`;

function HomeSectionChildOne() {
  const [showingDate, setShowingDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  function handleDateShowing(e) {
    e.preventDefault();

    setShowingDate(!showingDate);
  }
  return (
    <StyledHeaderSearch>
      <StyledHeaderItem>
        <HiMagnifyingGlass />
        <StyledItemInput type="text" placeholder="Dhaka" />
      </StyledHeaderItem>
      <StyledHeaderItem>
        <HiCalendarDays />
        <StyledDateSpan onClick={handleDateShowing}>
          Date to Date
        </StyledDateSpan>
        {showingDate && (
          <StyledDateRange>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </StyledDateRange>
        )}
      </StyledHeaderItem>
      <StyledHeaderItem>
        <HiUsers />
        <span>2 adults 2 children 1 room</span>
      </StyledHeaderItem>

      <Button variation="primary" size="medium">
        Search
      </Button>
    </StyledHeaderSearch>
  );
}

export default HomeSectionChildOne;
