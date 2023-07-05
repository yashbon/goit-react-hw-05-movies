import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    width: 100%;
    /* margin: 10px; */
    padding: 10px;
    position: fixed;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -15px;
    /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px; */
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
  `;

export const MainContent = styled.main`
  padding-top: 50px;
  padding-left: 20px;
  `;

export const MenuNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
