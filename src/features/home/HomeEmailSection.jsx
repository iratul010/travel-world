/* eslint-disable no-unused-vars */
import styled from "styled-components";
import EmailImg from "../../data/email.png";
import { useState } from "react";
import Button from "../../ui/Button";
const StyledEmailSection = styled.section`

  width: 100%;
  height: 500px;
  padding: 1.4rem 4.8rem;
  margin: 0 auto;
  /* background: linear-gradient(to bottom, #b2bcc1 0%, #b7e0ff 50%, #d0f0ff 100%); */
  /* box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5); */
  background: linear-gradient(to right, #faf9f621, #cbb48881);
`;
// const SkyBlur = styled.div`
//   content: "";
//   position: absolute;
//   top: -20px;
//   left: -20px;
//   right: -20px;
//   bottom: -20px;
//   background: inherit;
//   filter: blur(20px); /* Adjust blur intensity as needed */
//   z-index: -1;
// `;
const StyledParentDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`
const StyledEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1.4rem 2.6rem;
  
`;
const StyledImgDiv = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  height: 500px;
  padding: 1.4rem 2.6rem;
 
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const EmailForm = styled.form`
  display: flex;
  align-items: center;
  gap:1rem;
`;
const StyledP = styled.p`
  width: 50%;
`
const EmailInput = styled.input`
  padding: 1rem;
`;
function HomeEmailSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Handle email sending logic here (e.g., using an API or backend service)
    console.log("Sending email to:", email);
    // Reset the email input after sending
    setEmail("");
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  return (
    <StyledEmailSection>
      <StyledParentDiv>
        <StyledImgDiv>
          <Img src={EmailImg} alt="email" />
        </StyledImgDiv>
        <StyledEmailDiv>
          <h1>Subscribe now to get useful traveling information</h1>

          <EmailForm onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <Button type="submit" variation="primary" size="medium">
              Subscribe
            </Button>
          </EmailForm>
          <StyledP>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </StyledP>
        </StyledEmailDiv>
      </StyledParentDiv>
    </StyledEmailSection>
  );
}

export default HomeEmailSection;
