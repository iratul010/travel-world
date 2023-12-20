/* eslint-disable react/prop-types */
import{ useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 250px;  
  height: 10px;  
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  position: relative;  
`;

const ProgressBarFill = styled.div`
  width: ${({ value }) => (value > 10 ? '100%' : `${value * 25}px`)};
  background-color: ${({ value }) => value > 10 ? '#3498db' : '#ff9800'};
  height: 100%;
  position: absolute;  
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
`;
 const StyledInfoDiv = styled.div`
      
       display: flex;
       align-items: center;
       justify-content: space-between;
       gap:1rem;
       font-size: small;
      
       width: 100%;
 `
const ProgressBar = ({ value ,title}) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (value >= 0 && value <= 10) {
      setProgressValue(value);
    }
  }, [value]);

  return (
    <>
    <ProgressBarContainer>
      <ProgressBarFill value={progressValue}/>
    </ProgressBarContainer>
    <StyledInfoDiv>
        <p>{title}</p>
        <p>{progressValue}</p>
       </StyledInfoDiv>
    </>
  );
};

export default ProgressBar;
