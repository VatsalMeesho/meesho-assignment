import styled from "styled-components";
import TitleText from "./title";
const TrendingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
// const TrendingTitle = styled.h2`
//   font-size: 32px;
//   font-weight: 700;
//   line-height: 40px;
//   color: var(--Grey-Base, #333);
// `;
const TrendingSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: var(--Grey-T1, #666);
  font-feature-settings:
    "liga" off,
    "clig" off;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px 60px 0px;
  /* border: 1px solid red; */
`;

const Card = styled.div`
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  width: 320px;
  height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CardText = styled.p`
  position: absolute;
  margin-bottom: 40px;
  color: #fff;
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
const FlexRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  /* border: 1px solid red; */
`;
const trendingList = [
  {
    title: "Summer Collection",
    imgUrl: "src/assets/trending-img.png",
  },
  {
    title: "Festive Collection",
    imgUrl: "src/assets/festive.png",
  },
  {
    title: "Kitchen Ware",
    imgUrl: "src/assets/kitchenware.png",
  },
  {
    title: "Summer Collection",
    imgUrl: "src/assets/trending-img.png",
  },
];
export default function Trending() {
  return (
    <FlexContainer>
      <TrendingHeader>
        <TitleText>Trending Now</TitleText>
        <TrendingSubTitle>Best Deals On Products</TrendingSubTitle>
      </TrendingHeader>
      {/* <Card bgimage="src/assets/trending-img.png">
        <CardText>Summer Collection</CardText>
      </Card> */}
      <FlexRow>
        {trendingList.map((trend, ind) => {
          return (
            <Card bgimage={trend.imgUrl} key={ind}>
              <CardText>{trend.title}</CardText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
