import styled from "styled-components";
import { useState } from "react";
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
  /* padding-top: 40px;
  padding-bottom: 76px; */
  padding: 40px 56px 76px;
`;

const FlexRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  /* overflow-x: scroll; */
  border: 1px solid red;
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
    price: 0,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 1,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 2,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 3,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 4,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 5,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 6,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 7,
    imgUrl: "src/assets/bestseller.png",
  },
  {
    title: "Kurtis",
    price: 8,
    imgUrl: "src/assets/bestseller.png",
  },
];
export default function BestSellers() {
  const [index, setIndex] = useState(0);
  const [viewList, setViewList] = useState(() =>
    bestsellerList.length <= 6 ? bestsellerList : bestsellerList.slice(0, 6),
  );
  return (
    <FlexContainer>
      <TitleText>Bestsellers</TitleText>
      <FlexRow>
        {viewList.map((item, ind) => {
          return (
            <Card key={ind}>
              <img src={item.imgUrl} width="200px" height="240px"></img>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>From ${item.price}</ItemPrice>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
