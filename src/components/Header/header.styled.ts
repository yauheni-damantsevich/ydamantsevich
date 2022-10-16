import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header``;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 8px auto 80px auto;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 0;
  position: relative;
`;

export const HeaderLogo = styled(Link)`
  position: relative;
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #212121;
  text-decoration: none;
  align-self: center;
  &:hover::after {
    opacity: 1;
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 2px;
    background-color: #f8bbd0;
    top: calc(100% + 21px);
    left: calc(-16px);
    transition: all 0.2s ease-in;
  }
  &.active:hover::after {
    opacity: 0;
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 2px;
    background-color: #f8bbd0;
    top: calc(100% + 21px);
    left: calc(-16px);
    transition: all 0.4s ease-in;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 34px;
  justify-content: space-between;
  list-style: none;
`;

export const HeaderNavListItem = styled.li`
  align-self: center;
`;

export const HeaderNavListItemLink = styled(Link)`
  position: relative;
  display: block;
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-decoration: none;
  color: #212121;
  &:hover::after {
    opacity: 1;
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 2px;
    background-color: #f8bbd0;
    top: calc(100% + 21px);
    left: calc(-16px);
    transition: all 0.2s ease-in;
    filter: drop-shadow(2px 4px 4px rgba(248, 187, 208, 0.25));
  }
  &.active:hover::after {
    opacity: 0;
    content: "";
    position: absolute;
    width: calc(100% + 32px);
    height: 2px;
    background-color: #f8bbd0;
    top: calc(100% + 21px);
    left: calc(-16px);
    transition: all 0.4s ease-in;
    filter: drop-shadow(2px 4px 4px rgba(248, 187, 208, 0.25));
  }
`;

export const HeaderNavListItemButton = styled.button`
  display: flex;
  background-color: #f8bbd0;
  border: none;
  box-shadow: 2px 4px 4px rgba(248, 187, 208, 0.25);
`;

export const HeaderNavListItemButtonTitle = styled.span`
  padding: 4px 24px;
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #212121;
`;

export const HeaderNavListItemButtonIcon = styled.img`
  align-self: center;
  padding: 10px;
`;
