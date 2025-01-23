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
  border: 1px solid red;
`;
const CardText = styled.div`
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.018px;
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
        <Card>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
            >
              <rect width="208" height="208" rx="104" fill="#FFF4D7" />
            </svg>
          </div>
          <CardText>Under $99</CardText>
        </Card>
        <Card>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
            >
              <rect width="208" height="208" rx="104" fill="#FFF4D7" />
            </svg>
          </div>
          <CardText>Under $99</CardText>
        </Card>
        <Card>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
            >
              <rect width="208" height="208" rx="104" fill="#FFF4D7" />
            </svg>
          </div>
          <CardText>Under $99</CardText>
        </Card>
        <Card>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="208"
              viewBox="0 0 208 208"
              fill="none"
            >
              <rect width="208" height="208" rx="104" fill="#FFF4D7" />
            </svg>
          </div>
          <CardText>Under $99</CardText>
        </Card>
      </FlexRow>
    </FlexContainer>
  );
}
