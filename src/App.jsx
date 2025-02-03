import NavBar from "./components/navbar";
import Header from "./components/header";
import Features from "./components/features";
import Trending from "./components/trending";
import BestSellers from "./components/bestsellers";
import Toppicks from "./components/toppicks";
import ProductsFy from "./components/productsfy";
import PriceStore from "./components/pricestore";
import Footer from "./components/footer";
import { useState, useEffect, useRef } from "react";
import { RootDiv, HeadDiv, ImgContainer, LandingImg, Title, TitleText, SubText, SubText2, ShopBtn, BtnText, Divider, SmallDivider } from "./styles/app";

function App() {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight);
  }, []);
  
  return (
    <RootDiv>
      <HeadDiv ref={elementRef}>
        <Header />
        <SmallDivider />
        <NavBar height={height} />
        <SmallDivider />
      </HeadDiv>
      <ImgContainer>
        <LandingImg src="/assets/landing-img.png" alt="Landing-Cover-Image" />
        <Title>
          <TitleText>30% off</TitleText>
          <SubText>on your first order</SubText>
          <SubText2>Upto ₹100</SubText2>
          <ShopBtn>
            <BtnText>Shop Now</BtnText>
          </ShopBtn>
        </Title>
      </ImgContainer>
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
