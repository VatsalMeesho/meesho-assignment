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
import { useState, useEffect, useRef } from "react";
const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const TitleText = styled.h2`
  color: #fff;
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: 120px;
  letter-spacing: -4.2px;
`;
const SubText = styled.h3`
  color: #fff;
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; 
  letter-spacing: -0.64px;
`;
const Title = styled.div`
  position: absolute;
  right: 237px;
  top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShopBtn = styled.div`
  border-radius: 8px;
  background: #f9f9f9;
  width: 180px;
  height: 54px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnText = styled.h3`
  color: #333;
  text-align: center;
  font-size: 28px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;
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
const SubText2 = styled.p`
  color: var(--White, #fff);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.48px;
`;
const ImgContainer = styled.div`
  position: relative;
  max-height: 400px;
`;
const SmallDivider = styled.div`
  height: 1px;
  background: #dfdfdf;
  width: 100% !important;
`;
const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

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
        <LandingImg src="/assets/landing-img.png" />
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
