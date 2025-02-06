import { TitleText } from "../styles/commons.styled";
import productsList from "../utils/productsfy-list";
import { Tag, FlexRowSub, FlexRow, Text, PriceText, CardContent, Card, RatingContainer, RatingText, Rating, FlexContainer, RatingFlex, RatingText2} from "../styles/prouductsfy.styled";
export default function ProductsFy() {
  return (
    <FlexContainer>
      <TitleText>Products For You</TitleText>
      <FlexRow>
        {productsList.map((item, ind) => {
          return (
            <Card key={ind}>
              <img src={item.imgUrl} alt={item.altText} />
              <CardContent>
                <Text>{item.title}</Text>
                <FlexRowSub>
                  <PriceText>₹{item.currentPrice}</PriceText>
                  <Text $strike>₹{item.priceBeforeDisc}</Text>
                  <Text $bold $discountper>
                    {item.discPercentage}% off
                  </Text>
                </FlexRowSub>
                {item.isFirstOrder && (
                  <FlexRowSub $lessgap>
                    <img src="/assets/productsfy/disc.svg" alt="Discount"/>
                    <Text $firstdisc>₹100 discount on 1st order</Text>
                  </FlexRowSub>
                )}
                {item.hasFreeDelivery && <Tag>Free Delivery</Tag>}
                <RatingContainer>
                  <RatingFlex>
                  <Rating>
                    <RatingText>4.4</RatingText>
                    <img src="/assets/productsfy/rating.svg" alt="Rating-Star-IMG"/>
                  </Rating>
                  <RatingText2>{item.numRating} Ratings</RatingText2>
                  </RatingFlex>
                  <img src="/assets/productsfy/mtrusted.svg" alt="Mtrusted" />
                </RatingContainer>
              </CardContent>
            </Card>
          );
        })}
      </FlexRow>
    </FlexContainer>
  );
}
