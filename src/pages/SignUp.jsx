import styled from "styled-components";
import signUpImg from "../../src/data/signup.jpg";
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
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const SignUp = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <ImageContainer>
          <Image src={signUpImg} alt="login-img" />
        </ImageContainer>
        <LoginCard>
          <Title>Sign Up</Title>
          <LoginForm>
            <FormInput>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="👤 Enter your Full Name"
              />
            </FormInput>

            
            <FormInput>
              <FormLabel htmlFor="email">Email</FormLabel>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="&#x1F4E7; Enter your mail"
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="phoneNum">Phone</FormLabel>
              <input
                type="number"
                id="phoneNum"
                name="phoneNum"
                required
                placeholder="📞 Enter your Phone Number"
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="password">Create Password</FormLabel>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="&#128274; Enter your Create Password"
                required
              />
            </FormInput>
            <FormInput>
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="&#128274; Enter your Confirm Password"
                required
              />
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
