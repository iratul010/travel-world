import styled from "styled-components";
import loginImg from "../../src/data/hotel.jpg";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const HeroSection = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #e5dac4;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 2.4rem;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 50vh;
  flex: 2;
  margin: 0 auto;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(240, 236, 236, 0.1);
`;

const LoginCard = styled.div`
  width: 40%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
`;

const FormInput = styled.div`
  position: relative;

  margin-bottom: 15px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const SignupText = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #666;

  a {
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <ImageContainer>
          <Image src={loginImg} alt="login-img" />
        </ImageContainer>
        <LoginCard>
          <Title>Sign Up</Title>
          <LoginForm>
            <FormInput>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="👤 Enter your First Name"
              />
            </FormInput>
             
             
            <FormInput>
              <FormLabel htmlFor="firstName">Last Name</FormLabel>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="👤 Enter your Last Name"
              />
            </FormInput>
            <FormInput>
               
               <FormLabel htmlFor="email">Email</FormLabel>
               <input type="text" id="email" name="email" required placeholder= "&#x1F4E7; Enter your mail" />
             </FormInput>
 
             
             <FormInput>
             <FormLabel htmlFor="password">Create Password</FormLabel>
             <input type="password" id="password" name="password" placeholder="&#128274; Enter your Password" required />
               
              </FormInput>
             <FormInput>
             <FormLabel htmlFor="password">Confirm Password</FormLabel>
             <input type="password" id="password" name="password" placeholder="&#128274; Enter your Password" required />
               
              </FormInput>

            <Button size="medium" variation="primary">
              Register
            </Button>

            <SignupText>
              You have already an account? <Link to="/login">Login</Link>
            </SignupText>
          </LoginForm>
        </LoginCard>
      </ContentContainer>
    </HeroSection>
  );
};

export default SignUp;
