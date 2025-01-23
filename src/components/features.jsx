import styled from "styled-components";
const FeatureTag = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const FeatureContainer = styled.div`
  display: flex;
  gap: 48px;
  /* margin: 20px auto; */

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
    imgUrl: "src/assets/lowest-prices.svg",
  },
  {
    title: "Cash on Delivery",
    imgUrl: "src/assets/cod.png",
  },
  {
    title: "Free Returns",
    imgUrl: "src/assets/free-returns.svg",
  },
];
export default function Features() {
  return (
    <Container>
      <FeatureContainer>
        {/* <FeatureTag>
          <img src="src/assets/lowest-prices.svg" width="48px" height="48px" />
          <p>Lowest Prices</p>
        </FeatureTag>
        <FeatureTag>
          <img src="src/assets/lowest-prices.svg" width="48px" height="48px" />
          <p>Lowest Prices</p>
        </FeatureTag>
        <FeatureTag>
          <img src="src/assets/lowest-prices.svg" width="48px" height="48px" />
          <p>Lowest Prices</p>
        </FeatureTag> */}
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
