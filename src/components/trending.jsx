import TitleText from "./title";
import { TrendingHeader, TrendingSubTitle, FlexContainer, Card, CardText, FlexRow } from "../styles/trending";
import trendingList from "../utils/trending-list";

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
