import styled from "styled-components";
import TitleText from "./title";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 76px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  overflow-x: scroll;
`;
const ItemTitle = styled.p`
  color: #999;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.018px;
`;
const ItemPrice = styled.p`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
`;
const bestsellerList = [
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 500,
    imgUrl: "src/assets/bestseller.png",
  },
];
export default function BestSellers() {
  return (
    <FlexContainer>
      <TitleText>Bestsellers</TitleText>
      <FlexRow>
        {bestsellerList.map((item, ind) => {
          return (
            <Card key={ind}>
              <img src={item.imgUrl} width="200px" height="240px" />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>From ${item.price}</ItemPrice>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
