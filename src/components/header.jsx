
import { useState } from "react";
import {Text,Supplier,AppDownload,IconContainer,FlexRow,HeaderDiv,SearchInput,SearchBox,MeeshoLogo,HeaderContainer} from "../styles/header";
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
