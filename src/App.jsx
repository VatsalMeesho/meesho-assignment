import NavBar from "./components/navbar";
import Header from "./components/header";
import styled from "styled-components";
import Features from "./components/features";
import Trending from "./components/trending";
import BestSellers from "./components/bestsellers";
import Toppicks from "./components/toppicks";
import ProductsFy from "./components/productsfy";
import PriceStore from "./components/pricestore";
import Footer from "./components/footer";
const RootDiv = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* padding-left: 56px; */
  /* border: 1px solid grey; */
`;
const Divider = styled.div`
  height: 16px;
  border-radius: 2px;
  background: #f0f0f0;
`;
const LandingImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
`;
const SmallDivider = styled.div`
  height: 1px;
  background: #dfdfdf;
  width: 100% !important;
`;
function App() {
  return (
    <RootDiv>
      <Header />
      <SmallDivider />
      <NavBar />
      <LandingImg src="src/assets/landing-img.png" />
      <Features />
      <Divider />
      <Trending />
      <Divider />
      <BestSellers />
      <Divider />
      <PriceStore />
      <Divider />
      <Toppicks />
      <Divider />
      <ProductsFy />
      <Footer />
    </RootDiv>
  );
}

export default App;
