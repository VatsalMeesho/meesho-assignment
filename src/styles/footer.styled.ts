import styled from "styled-components";
const FlexContainer = styled.footer`
  display: flex;
  padding: 60px 56px 60px;
  background: #f9f9f9;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-between;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MainText = styled.h3`
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
const Text = styled.p`
  color: ${(props) => (props.$bold ? "#333" : "#666")};
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => (props.$normal ? 400 : props.$bold ? 700 : 600)};
  line-height: 24px;
  letter-spacing: ${(props) => (props.$normal ? "normal" : "0.018px")};
`;
const FlexCTA = styled.div`
  display: flex;
  gap: 16px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export { FlexContainer, FlexColumn, MainText, Text, FlexCTA, IconContainer };