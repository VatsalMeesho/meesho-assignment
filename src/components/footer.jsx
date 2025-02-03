import { FlexContainer, FlexColumn, MainText, Text, FlexCTA, IconContainer } from "../styles/footer";
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
