import styled from "styled-components";
import TitleText from "./title";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 76px;
  gap: 40px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* border: 1px solid red; */
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
  /* border: 1px solid; */
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const priceList = [
  {
    title: "Under $99",
    imgUrl: "src/assets/pricestore/circle.svg",
  },
  {
    title: "Under $199",
    imgUrl: "src/assets/pricestore/circle.svg",
  },
  {
    title: "Under $299",
    imgUrl: "src/assets/pricestore/circle.svg",
  },
  {
    title: "Under $399",
    imgUrl: "src/assets/pricestore/circle.svg",
  },
  {
    title: "Under $499",
    imgUrl: "src/assets/pricestore/circle.svg",
  },
];
export default function PriceStore() {
  return (
    <FlexContainer>
      <TitleText>Price Store</TitleText>
      <FlexRow>
        {priceList.map((item, ind) => {
          return (
            <Card key={ind}>
              <div>
                <img src={item.imgUrl} />
              </div>
              <CardText>{item.title}</CardText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
