import styled from "styled-components";
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 56px;
  gap: 28px;
`;
const Rating = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #038d63;
`;
const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RatingText = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Mier B02";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 320px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  width: 100%;
`;
const PriceText = styled.h2`
  color: #333;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
//ye reuse kar lenge for title and MRP price cut text (and also for discount percentage)
const Text = styled.h2`
  color: ${(props) => {
    if (props.$discountper) return "#038D63";
    else if (props.$firstdisc) return "#666";
    else return "#999";
  }};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? 600 : 400)};
  line-height: 20px;
  letter-spacing: 0.04px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${(props) => (props.$strike ? "line-through" : "none")};
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;
const FlexRowSub = styled.div`
  display: flex;
  gap: ${(props) => (props.$lessgap ? "4px" : "8px")};
  align-items: center;
`;
const Tag = styled.p`
  padding: 4px 8px;
  text-align: center;
  border-radius: 48px;
  width: fit-content;
  background: #f9f9f9;
  color: #666;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.144px;
`;
const NumRatings = styled.p`
  color: #999;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.144px;
  margin-left: 4px;
`;
const RatingFlex = styled.div`
  display : flex;
  gap: 8px;
  align-items : center;
`
const RatingText2 = styled.p`
  color:  #999;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px;
letter-spacing: 0.144px;

`
export {NumRatings, Tag, FlexRowSub, FlexRow, Text, PriceText, CardContent, Card, RatingContainer, RatingText, Rating, FlexContainer, RatingFlex, RatingText2};