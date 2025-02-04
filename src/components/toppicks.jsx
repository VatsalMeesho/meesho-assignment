import TitleText from "./title";
import { FlexContainer, Card, SubText, FlexRow } from "../styles/toppicks.styled";
const topPicksList = [
  {
    title: "Meesho Trusted",
    imgUrl: "/assets/toppicks/mtrusted.svg",
    bgColor: "#fde9f2",
    textColor: "#F43397",
  },
  {
    title: "Best Quality",
    imgUrl: "/assets/toppicks/best-quality.svg",
    bgColor: "#E7EEFF",
    textColor: "#5585F8",
  },
  {
    title: "Most Wishlisted",
    imgUrl: "/assets/toppicks/most-wishlist.svg",
    bgColor: "#FFDAD6",
    textColor: "#FB4B4B;",
  },
];
export default function Toppicks() {
  return (
    <FlexContainer>
      <TitleText>Top Picks</TitleText>
      <FlexRow>
        {topPicksList.map((item, ind) => {
          return (
            <Card key={ind} $bgColor={item.bgColor}>
              <img src={item.imgUrl} />
              <SubText $textColor={item.textColor}>{item.title}</SubText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
