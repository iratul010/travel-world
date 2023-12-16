import styled from "styled-components";
import Button from "../ui/Button";
import Logo from "./Logo";

const FooterContainer = styled.footer`
  background-color: #212121;
  color: #fff;
  padding: 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin-right: 40px;
  flex: 1 1 250px;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const BookingSection = styled.div`
  flex: 1 1 100%;
  margin-bottom: 20px;
`;

const BookingTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
`;

const BookingText = styled.p`
  margin-bottom: 8px;
`;

 

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo />
        </FooterSection>
        <FooterSection>
          <FooterTitle>Explore</FooterTitle>
          <FooterLink href="#">Rooms</FooterLink>
          <FooterLink href="#">Amenities</FooterLink>
          <FooterLink href="#">Special Offers</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Social Media</FooterLink>
          <FooterLink href="#">Reviews</FooterLink>
        </FooterSection>
        <BookingSection>
          <BookingTitle>Book Your Stay</BookingTitle>
          <BookingText>Find the perfect hotel for your trip!</BookingText>
          <Button variation="primary" size="medium">Search Hotels</Button>
        </BookingSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
