import { FeatureTag, FeatureContainer, Container } from "../styles/features.styled";
const featureList = [
  {
    title: "Lowest Prices",
    imgUrl: "/assets/lowest-prices.svg",
  },
  {
    title: "Cash on Delivery",
    imgUrl: "/assets/cod.png",
  },
  {
    title: "Free Returns",
    imgUrl: "/assets/free-returns.svg",
  },
];
export default function Features() {
  return (
    <Container>
      <FeatureContainer>
        {featureList.map((feature, ind) => {
          return (
            <FeatureTag key={ind}>
              <img src={feature.imgUrl} width="48px" height="48px" />
              <p>{feature.title}</p>
            </FeatureTag>
          );
        })}
      </FeatureContainer>
    </Container>
  );
}
