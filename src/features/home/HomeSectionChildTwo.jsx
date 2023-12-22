/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { toWords } from "number-to-words";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { DateRange } from "react-date-range";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutSideClick";
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
  margin: 1rem;
  gap: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
`;
const StyledItemInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0);

  &::placeholder {
    color: #fff; /* Set the color for the placeholder text */
  }
  &:focus,
  :active {
    outline-color: var(--color-orange-600);
    border-color: var(--color-orange-700);
    box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.5);
  }
`;
const StyledDateSpan = styled.span`
  cursor: pointer;
  &:hover {
    backdrop-filter: blur(10px);
  }
`;
const StyledDateRange = styled.div`
  position: absolute;
  top: 50px;
`;
const StyledDivSelect = styled.div`
  font-size: 18px;
  width: 60%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--color-grey-50);
  div {
    color: var(--color-grey-300);
  }
`;
const StyledParentSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
  padding: 1.5rem;
  width: 250px;
  height: auto;
  background-color: #f6f1f1;
  position: absolute;
  border-radius: 10px;
  top: 65px;
  left: -20px;
  text-shadow: none;
  z-index: 1;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 15px;
    width: 250px;
    height: 50px;
    color: black;

    p {
      width: 200px;
    }

    button {
      color: #333;
      border-radius: 50%;
      border: 1px solid blue;
      width: 30px;
      height: 30px;
    }
  }
`;
const AdultsChildsDiv = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  margin-right: 4rem;
  float: left;
`;

const StyledChildDiv = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: black;
  select{
    border:none;
    width: 90px;
  }
`;
function HomeSectionChildOne() {
  const [showingDate, setShowingDate] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [childAges, setChildAges] = useState([]);

  const [showOptions, setShowOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const refOne = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (refOne.current && !refOne.current.contains(event.target)) {
        setShowingDate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSpanClick = () => {
    setShowingDate(prevState => !prevState);
  };

  const handleSelectClick = () => {
    setShowOptions(!showOptions);
  };
  const handleParentSelectClick = e => {
    // Prevent the event from propagating to the parent
    e.stopPropagation();
  };
  const increment = type => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "rooms") {
      setRooms(rooms + 1);
    } else if (type === "childs") {
      setChilds(childs + 1);
    }
  };

  const decrement = type => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    } else if (type === "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };

  
  const [selectedAges, setSelectedAges] = useState(Array.from({ length: childs }, () => ""));
  const handleChange = (event, childIndex) => {
    const updatedAges = [...selectedAges];
    updatedAges[childIndex] = event.target.value;
    setSelectedAges(updatedAges);
  };

  const renderChildren = () => {
    let ages = Array.from({ length: 17 }, (_, index) => index + 1);

    const children = [];
    for (let i = 0; i < childs; i++) {
      children.push(
        <StyledChildDiv key={i}>
          <p> Child {toWords(i + 1)}</p>
          <div>
            <select
              value={selectedAges[i]} // Use selectedAges array for value
              onChange={(event) => handleChange(event, i)} // Pass child index to handleChange
            >
              <option>Age</option>
              {ages.map(age => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </StyledChildDiv>
      );
    }
    return children;
  };
  return (
    <StyledHeaderSearch ref={refOne}>
      <StyledHeaderItem>
        <HiMagnifyingGlass />
        <StyledItemInput type="text" placeholder="Location" />
      </StyledHeaderItem>
      <StyledHeaderItem>
        <HiCalendarDays />
        <StyledDateSpan onClick={handleSpanClick} ref={refOne}>
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
        <StyledDivSelect onClick={handleSelectClick}>
          <AdultsChildsDiv>
            <span>{adults} Adult</span>
            {childs !== 0 && <span>, {childs} Child</span>}
          </AdultsChildsDiv>

          <div>{rooms} Room</div>
          {showOptions && (
            <StyledParentSelect onClick={handleParentSelectClick}>
              <div>
                <p>Room</p>
                <div>
                  <button onClick={() => decrement("rooms")}>-</button>
                  <span>{rooms}</span>
                  <button onClick={() => increment("rooms")}>+</button>
                </div>
              </div>
              <div>
                <p>Adults</p>
                <div>
                  <button onClick={() => decrement("adults")}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => increment("adults")}>+</button>
                </div>
              </div>

              <div>
                <p>Child</p>
                <div>
                  <button onClick={() => decrement("childs")}>-</button>
                  <span>{childs}</span>
                  <button onClick={() => increment("childs")}>+</button>
                </div>
              </div>

              {childs !== 0 && renderChildren()}
            </StyledParentSelect>
          )}
        </StyledDivSelect>
      </StyledHeaderItem>

      <Button variation="primary" size="medium">
        Search
      </Button>
    </StyledHeaderSearch>
  );
}

export default HomeSectionChildOne;
