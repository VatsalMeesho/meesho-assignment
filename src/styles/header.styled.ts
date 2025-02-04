import styled from "styled-components";
const HeaderContainer = styled.header`
  display: flex;
  padding-left: 56px;
  padding-right: 56px;
  justify-content: space-between;
  background-color: white;
`;

const MeeshoLogo = styled.img`
  width: 156px;
  height: 36px;
  margin-top: 14px;
  margin-bottom: 22px;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 16px;
  margin-top: 14px;
  margin-bottom: 14px;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  border: 1px solid;
`;
const SearchInput = styled.input`
  min-width: 320px;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  padding-right: 8px;
  border: none;
  position: relative;
  top: 3px;
  &:focus {
    background-size:
      100% 2px,
      100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;
const HeaderDiv = styled.div`
  display: flex;
  gap: 36px;
`;
const FlexRow = styled.div`
  display: flex;
  align-items: strech;

  gap: 50px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;
const AppDownload = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
const Supplier = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.p`
  color: #333;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.024px;
  white-space: nowrap;
`;
export {Text,Supplier,AppDownload,IconContainer,FlexRow,HeaderDiv,SearchInput,SearchBox,MeeshoLogo,HeaderContainer};