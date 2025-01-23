import styled from "styled-components";
import navTitles from "../utils/navTitles";
const NavContainer = styled.div`
  display: flex;
  /* padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 56px; */
  padding: 16px 56px 14px 56px;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
`;
export default function NavBar() {
  return (
    <NavContainer>
      {navTitles.map((title, index) => (
        <p key={index}>{title}</p>
      ))}
    </NavContainer>
  );
}
