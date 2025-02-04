import bestsellerList from "../utils/bestseller-list";
import TitleText from "./title";
import { Card, FlexContainer, FlexRow, ItemTitle, ItemPrice } from "../styles/bestsellers.styled";

export default function BestSellers() {
  return (
    <FlexContainer>
      <TitleText>Bestsellers</TitleText>
      <FlexRow>
        {bestsellerList.map((item, ind) => {
          return (
            <Card key={ind}>
              <img src={item.imgUrl} width="200px" height="240px" alt={item.altText}></img>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>From ${item.price}</ItemPrice>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
