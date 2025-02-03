import styled from "styled-components";
const FlexContainer = styled.div`
  display: flex;
  padding: 60px 56px 60px;
  background: #f9f9f9;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-between;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MainText = styled.h3`
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
const Text = styled.p`
  color: ${(props) => (props.$bold ? "#333" : "#666")};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => (props.$normal ? 400 : props.$bold ? 700 : 600)};
  line-height: 24px;
  letter-spacing: ${(props) => (props.$normal ? "normal" : "0.018px")};
`;
const FlexCTA = styled.div`
  display: flex;
  gap: 16px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export default function Footer() {
  return (
    <FlexContainer>
      <FlexColumn>
        <MainText>Shop Non-Stop on Meesho</MainText>
        <Text $normal>
          Trusted by more than 1 Crore Indians <br />
          Cash on Delivery | Free Delivery
        </Text>
        <FlexCTA>
          <img src="/assets/footer/playstore.svg" />
          <img src="/assets/footer/appstore.svg" />
        </FlexCTA>
      </FlexColumn>
      <FlexColumn>
        <Text>Careers</Text>
        <Text>Become a Supplier</Text>
        <Text>Life@Meesho</Text>
      </FlexColumn>
      <FlexColumn>
        <Text>Terms & Conditions</Text>
        <Text>Support</Text>
        <Text>Whilstleblower Policy</Text>
      </FlexColumn>
      <FlexColumn>
        <Text $bold>Contact Us</Text>
        <Text>help@meesho.com</Text>
      </FlexColumn>
      <FlexColumn>
        <Text $bold>Reach out to us</Text>
        <IconContainer>
          <img src="/assets/footer/fb.png" />
          <img src="/assets/footer/insta.png" />
          <img src="/assets/footer/yt.png" />
          <img src="/assets/footer/linkedin.png" />
          <img src="/assets/footer/twitter.png" />
        </IconContainer>
      </FlexColumn>
    </FlexContainer>
  );
}
