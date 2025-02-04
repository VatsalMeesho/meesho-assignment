import styled from "styled-components";
const NavContainer = styled.nav`
  display: flex;
  padding: 16px 100px 14px 56px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const DropDownText = styled.p`
  color: ${(props) => (props.title ? "#982089" : "#333")};
  text-align: center;
  font-size: ${(props) => (props.title ? "18px" : "16px")};
  font-style: normal;
  font-weight: ${(props) => (props.title ? "700" : "400")};
  line-height: 20px;
  letter-spacing: 0.024px;
`;
const DropDownContainer = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 100;
  visibility: ${(props) =>
    props.show && props.index != -1 ? "visible" : "hidden"};
  display: flex;
  justify-content: center;
  align-items: stretch;
  transition: visibility 0.1s;
`;
const DropDownItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${(props) => props.bgColor};
`;

const PTag = styled.p`
  flex-grow: 1;
  padding-right: 40px;
  span {
    border-bottom: 3px solid transparent;
    transition: border-bottom-color 0.1s;
    &:hover {
      border-bottom-color: rgb(159, 32, 137);
      font-weight: 600;
    }
  }
`;
export { NavContainer, DropDownText, DropDownContainer, DropDownItemColumn, PTag };