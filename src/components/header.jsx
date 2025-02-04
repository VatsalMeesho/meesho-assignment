
import { useState } from "react";
import { SubText } from "../styles/commons.styled";
import {Supplier,AppDownload,IconContainer,FlexRow,HeaderDiv,SearchInput,SearchBox,MeeshoLogo,HeaderContainer} from "../styles/header.styled";
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
          <SubText>Download App</SubText>
        </AppDownload>
        <Supplier>
          <SubText>Become a Supplier</SubText>
        </Supplier>
        <IconContainer>
          <img src="/assets/header/profile.svg" width="21px" height="22px" alt="Profile-Icon" />
          <SubText>Profile</SubText>
        </IconContainer>
        <IconContainer>
          <img src="/assets/header/cart.svg" width="22px" height="20px" alt="Cart-Icon"/>
          <SubText>Cart</SubText>
        </IconContainer>
      </FlexRow>
    </HeaderContainer>
  );
}
