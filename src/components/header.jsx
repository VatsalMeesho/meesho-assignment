import styled from "styled-components";
import { useState } from "react";
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
export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <HeaderContainer>
      <HeaderDiv>
        <MeeshoLogo src="/assets/header/meeshoLogo.svg" alt="Meesho-Logo" />
        <SearchBox $searchQuery={searchQuery}>
          <img
            src="/assets/header/search-icon.svg"
            width="20px"
            height="20px"
          />

          <SearchInput
            placeholder="Try Saree,Kurti or Search by Product Code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name="searchquery"
            type="search"
          />
        </SearchBox>
      </HeaderDiv>
      <FlexRow>
        <AppDownload>
          <img src="/assets/header/download-app.svg" alt="Meesho-App" />
          <Text>Download App</Text>
        </AppDownload>
        <Supplier>
          <Text>Become a Supplier</Text>
        </Supplier>
        <IconContainer>
          <img src="/assets/header/profile.svg" width="21px" height="22px" alt="Profile-Icon" />
          <Text>Profile</Text>
        </IconContainer>
        <IconContainer>
          <img src="/assets/header/cart.svg" width="22px" height="20px" alt="Cart-Icon"/>
          <Text>Cart</Text>
        </IconContainer>
      </FlexRow>
    </HeaderContainer>
  );
}
