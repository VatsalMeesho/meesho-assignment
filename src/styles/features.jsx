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
export { FeatureTag, FeatureContainer, Container };