import styled from "styled-components";
import TitleText from "./title";
import trendingList from "../utils/trending-list";
const TrendingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
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
  padding: 40px 56px 60px 56px;
`;

const Card = styled.div`
  background-image: ${({ $bgimage }) => `url(${$bgimage})`};
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
`;

export default function Trending() {
  return (
    <FlexContainer>
      <TrendingHeader>
        <TitleText>Trending Now</TitleText>
        <TrendingSubTitle>Best Deals On Products</TrendingSubTitle>
      </TrendingHeader>
      <FlexRow>
        {trendingList.map((trend, ind) => {
          return (
            <Card $bgimage={trend.imgUrl} key={ind} alt={trend.altText}>
              <CardText>{trend.title}</CardText>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
