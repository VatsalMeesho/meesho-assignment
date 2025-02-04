import styled from "styled-components";
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
export { RootDiv, TitleText, SubText, Title, ShopBtn, BtnText, Divider, LandingImg, SubText2, ImgContainer, SmallDivider, HeadDiv };