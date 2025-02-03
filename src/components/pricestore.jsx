import TitleText from "./title";
import priceList from "../utils/price-list";
import { Card, FlexContainer, FlexRow, CardText } from "../styles/pricestore";
export default function PriceStore() {
  return (
    <FlexContainer>
      <TitleText>Price Store</TitleText>
      <FlexRow>
        {priceList.map((item, ind) => {
          return (
            <Card key={ind}>
              <div>
                <img src={item.imgUrl} alt={item.altText}/>
              </div>
              <CardText>{item.title}</CardText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
