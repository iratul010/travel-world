/* eslint-disable no-unused-vars */
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
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  gap:10rem;
  padding: 1rem 2.4rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  flex: 1;
  
  margin: 0 auto;
  background-color: red;
`;
const Image = styled.img`
   width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(240, 236, 236, 0.1);
`;

const LoginCard = styled.div`
  width: 40%;
  height: 50vh;
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
  margin-bottom: 15px;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-orange-500);
    border-radius: 4px;
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

const Login = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <ImageContainer>
          <Image src={loginImg} alt="login-img" />
        </ImageContainer>
        <LoginCard>
          <Title>Login</Title>
          <LoginForm>
            <FormInput>
               
              <FormLabel htmlFor="email">Email</FormLabel>
              <input type="text" id="email" name="email" required placeholder= "&#x1F4E7; Enter your mail" />
            </FormInput>

            
            <FormInput>
            <FormLabel htmlFor="password">Password</FormLabel>
            <input type="password" id="password" name="password" placeholder="&#128274; Enter your Password" required />
              
             </FormInput>
            <Button size="medium" variation="primary">
              Login
            </Button>

            <SignupText>
              New to Travel World? <Link to="/signup">Sign Up</Link>
            </SignupText>
          </LoginForm>
        </LoginCard>
      </ContentContainer>
    </HeroSection>
  );
};

export default Login;
