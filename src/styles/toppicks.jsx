import styled from "styled-components";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 56px 60px;
  gap: 40px;
`;

const Card = styled.div`
  display: flex;
  padding: 32px 35px;
  gap: 28px;
  border-radius: 12px;
  background: ${(props) => props.$bgColor || "#fde9f2"};
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const SubText = styled.h2`
  color: ${(props) => props.$textColor || "#f43397"};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const FlexRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;
export { FlexContainer, Card, SubText, FlexRow };