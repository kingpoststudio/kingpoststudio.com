import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  max-width: 100%;
  z-index: 99;
`;

const HeaderNav = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 150px;
  width: 100%;
`;

const HeaderNavItem = styled.a`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  color: #333;
`;

function Header() {
  return (
    <HeaderWrapper id="header">
      <HeaderNav>
        <HeaderNavItem>
          <HeaderTitle>King Post Studio</HeaderTitle>
        </HeaderNavItem>
        <HeaderNavItem>Work</HeaderNavItem>
        <HeaderNavItem>Contact</HeaderNavItem>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
