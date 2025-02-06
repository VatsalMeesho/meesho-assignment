import styled from "styled-components";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 56px 76px;
`;

const FlexRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  overflow-x: scroll;
`;
const ItemTitle = styled.p`
  color: #999;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.018px;
`;
const ItemPrice = styled.p`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
`;
export { Card, FlexContainer, FlexRow, ItemTitle, ItemPrice };