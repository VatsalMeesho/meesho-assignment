import styled from "styled-components";
import { useState } from "react";
const HeaderContainer = styled.div`
  display: flex;
  /* padding-left: 56px; */
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
  padding-right: 60px;
  align-items: center;
  border: 1px solid grey;
  /* border: 1px solid; */
`;
const SearchInput = styled.input`
  min-width: 296px;
  line-height: 20px;
  font-weight: 500;
  margin-right: 60px;
  border: none;
`;
const HeaderDiv = styled.div`
  display: flex;
  gap: 36px;
`;
export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <HeaderContainer>
      <HeaderDiv>
        <MeeshoLogo src="src/assets/header/meeshoLogo.svg" />
        <SearchBox>
          <img
            src="src/assets/header/search-icon.svg"
            width="20px"
            height="20px"
          />
          <SearchInput
            placeholder="Try Saree,Kurti or Search by Product Code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBox>
      </HeaderDiv>
    </HeaderContainer>
  );
}
