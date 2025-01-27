import styled from "styled-components";
import navTitles from "../utils/navTitles";
import { useState } from "react";
const NavContainer = styled.div`
  display: flex;
  padding: 16px 100px 14px 56px;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
`;

const DropDownText = styled.p`
  color: #333;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.024px;
`;
const DropDownContainer = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: 0;
  width: 100vw;
  /* height: 200px; */
  background-color: #fff;
  z-index: 100;
  visibility: ${(props) =>
    props.show && props.index != -1 ? "visible" : "hidden"};
  display: flex;
  justify-content: center;
  align-items: stretch;
  transition: visibility 0.1s;
  /* border: 1px solid #f0f0f0; */
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
  /* &:first-child {
    font-weight: 600;
    color: rgb(159, 32, 137);
  } */
`;
const PTag = styled.p`
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.1s;

  &:hover {
    border-bottom-color: rgb(159, 32, 137);
    font-weight: 600;
  }
`;
export default function NavBar({ height }) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(-1);
  return (
    <NavContainer>
      {navTitles.map((item, index) => (
        <PTag
          key={index}
          onMouseEnter={() => {
            setIndex(index);
            setShow(true);
          }}
          onMouseLeave={() => {
            setIndex(-1);
            setShow(false);
          }}
        >
          {item.title}
        </PTag>
      ))}
      <DropDownContainer show={show} index={index} top={height}>
        {index != -1 &&
          navTitles[index].data.map((item, index) => {
            // console.log(item);
            return (
              <DropDownItemColumn
                key={index}
                bgColor={index % 2 ? "#F8F8FF" : "#fff"}
              >
                {item.map((i, k) => {
                  return <DropDownText key={k}>{i}</DropDownText>;
                })}
              </DropDownItemColumn>
            );
          })}
      </DropDownContainer>
      {/* <button onClick={() => setShow(!show)}>Click me</button> */}
    </NavContainer>
  );
}
