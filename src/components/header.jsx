import styled from "styled-components";
import { useState } from "react";
const HeaderContainer = styled.div`
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
  /* padding-right: ${(props) => (props.$searchQuery.length > 0 ? "0px" : "60px")}; */
  /* padding-right: 60px; */
  align-items: center;
  border: 1px solid;
`;
const SearchInput = styled.input`
  min-width: 320px;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  /* padding-top: 11px; */
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
  /* padding-left: 56px; */
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
  line-height: 20px; /* 125% */
  letter-spacing: 0.024px;
  white-space: nowrap;
`;
export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <HeaderContainer>
      <HeaderDiv>
        <MeeshoLogo src="/assets/header/meeshoLogo.svg" />
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
          {/* {searchQuery.length > 0 && (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setSearchQuery("")}
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          )} */}
        </SearchBox>
      </HeaderDiv>
      <FlexRow>
        <AppDownload>
          <img src="/assets/header/download-app.svg" />
          <Text>Download App</Text>
        </AppDownload>
        <Supplier>
          <Text>Become a Supplier</Text>
        </Supplier>
        <IconContainer>
          <img src="/assets/header/profile.svg" width="21px" height="22px" />
          <Text>Profile</Text>
        </IconContainer>
        <IconContainer>
          <img src="/assets/header/cart.svg" width="22px" height="20px" />
          <Text>Cart</Text>
        </IconContainer>
      </FlexRow>
    </HeaderContainer>
  );
}
