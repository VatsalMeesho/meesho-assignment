import styled from "styled-components";
const FeatureTag = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const FeatureContainer = styled.div`
  display: flex;
  gap: 48px;
  width: fit-content;
`;
const Container = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  background: var(--Blue-T2, #e7eeff);
`;
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
