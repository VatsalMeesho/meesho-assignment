
import navTitles from "../utils/navTitles";
import { useState } from "react";
import { NavContainer,DropDownText, DropDownContainer, DropDownItemColumn, PTag  } from "../styles/navbar";

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
          <span>{item.title}</span>
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
                  return (
                    <DropDownText key={k} title={k === 0}>
                      {i}
                    </DropDownText>
                  );
                })}
              </DropDownItemColumn>
            );
          })}
      </DropDownContainer>
    </NavContainer>
  );
}
