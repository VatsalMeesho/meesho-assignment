import styled from "styled-components";
import TitleText from "./title";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 28px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const CardContext = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
`;

const CardTitle = styled.h2`
  color: #999;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: 0.04px;
`;
export default function ProductsFy() {
  return (
    <FlexContainer>
      <TitleText>Products For You</TitleText>
    </FlexContainer>
  );
}
