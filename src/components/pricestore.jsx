import styled from "styled-components";
import TitleText from "./title";
import priceList from "../utils/price-list";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 56px 76px;
  gap: 40px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CardText = styled.div`
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.018px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
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
