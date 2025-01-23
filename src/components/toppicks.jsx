import styled from "styled-components";
import TitleText from "./title";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 56px 60px 0;
  gap: 40px;
`;

const Card = styled.div`
  display: flex;
  padding: 32px 35px;
  gap: 28px;
  border-radius: 12px;
  background: ${(props) => props.bgColor || "#fde9f2"};
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const SubText = styled.h2`
  /* color: #f43397; */
  color: ${(props) => props.textColor || "#f43397"};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const FlexRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;
const topPicksList = [
  {
    title: "Meesho Trusted",
    imgUrl: "src/assets/toppicks/mtrusted.svg",
    bgColor: "#fde9f2",
    textColor: "#F43397",
  },
  {
    title: "Best Quality",
    imgUrl: "src/assets/toppicks/best-quality.svg",
    bgColor: "#E7EEFF",
    textColor: "#5585F8",
  },
  {
    title: "Most Wishlisted",
    imgUrl: "src/assets/toppicks/most-wishlist.svg",
    bgColor: "#FFDAD6",
    textColor: "#FB4B4B;",
  },
];
export default function Toppicks() {
  return (
    <FlexContainer>
      <TitleText>Top Picks</TitleText>
      <FlexRow>
        {/* <Card>
          <img src="src/assets/toppicks/mtrusted.svg" />
          <Text>Meesho Trusted</Text>
        </Card>
        <Card>
          <img src="src/assets/toppicks/mtrusted.svg" />
          <Text>Meesho Trusted</Text>
        </Card>
        <Card>
          <img src="src/assets/toppicks/mtrusted.svg" />
          <Text>Meesho Trusted</Text>
        </Card> */}
        {topPicksList.map((item, ind) => {
          return (
            <Card key={ind} bgColor={item.bgColor}>
              <img src={item.imgUrl} />
              <SubText textColor={item.textColor}>{item.title}</SubText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
