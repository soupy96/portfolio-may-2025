import styled from 'styled-components';

function Nav() {
  return (
    <NavBox>
      <Peace>✌️</Peace>
      <NavList>
        <NavItem href='#home'>Home</NavItem>
        <NavItem href='#about'>About</NavItem>
        <NavItem href='#cookin'>What's Cookin?</NavItem>
      </NavList>
    </NavBox>
  );
}

const NavBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 20px 0px;
  background-color: #020c2b;
`;

const Peace = styled.span`
  font-size: 50px;
  margin: 0px 0px 0px 0%;
`;

const NavList = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

const NavItem = styled.a`
  padding: 20px 50px;
  color: #ffffff;
`;

export default Nav;
