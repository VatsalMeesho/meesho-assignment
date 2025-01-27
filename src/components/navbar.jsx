import styled from "styled-components";
import navTitles from "../utils/navTitles";
const NavContainer = styled.div`
  display: flex;
  /* padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 56px; */
  padding: 16px 100px 14px 56px;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
`;
const PTag = styled.p`
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.1s;

  &:hover {
    border-bottom-color: rgb(159, 32, 137);
  }
`;
export default function NavBar() {
  return (
    <NavContainer>
      {navTitles.map((title, index) => (
        <PTag key={index}>{title}</PTag>
      ))}
    </NavContainer>
  );
}
