/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderNavList,
  HeaderNavListItem,
  HeaderNavListItemLink,
  HeaderNavListItemButton,
  HeaderWrapper,
  HeaderNavListItemButtonTitle,
  HeaderNavListItemButtonIcon,
} from "./header.styled";

import DownloadIcon from "../../assets/download.svg";

export const Header = () => {
  const onClickDownload = () => {
    fetch("Yauheni_Damantsevich_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv.pdf";
        alink.click();
      });
    });
  };
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : "";

  const [linkUnderlineWidth, setLinkUnderlineWidth] = useState(0);
  const [linkUnderlineLeft, setLinkUnderlineLeft] = useState(0);
  const navRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const currentLink = document.getElementsByClassName(
      "active"
    )[0] as HTMLElement;
    console.log(currentLink.clientWidth);

    setLinkUnderlineLeft(currentLink?.offsetLeft ?? 0);
    setLinkUnderlineWidth(currentLink?.clientWidth ?? 0);
  }, [activeIndex]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderNav
          ref={navRef}
          css={css`
            &::after {
              content: "";
              position: absolute;
              width: ${linkUnderlineWidth + 32}px;
              height: 2px;
              background-color: #d50000;
              top: 100%;
              left: ${linkUnderlineLeft}px;
              transition: all 0.2s ease-in;
              transform: translateX(-16px);
              filter: drop-shadow(2px 4px 4px rgba(213, 0, 0, 0.25));
            }
          `}
        >
          <HeaderLogo
            to="/"
            className={`nav ${checkActive(1, "active")}`}
            onClick={(event) => {
              handleClick(1);
            }}
          >
            Yauheni Damantsevich
          </HeaderLogo>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavListItemLink
                to="/front-end"
                className={`nav ${checkActive(2, "active")}`}
                onClick={() => {
                  handleClick(2);
                }}
              >
                Front-end
              </HeaderNavListItemLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavListItemLink
                to="/ui-ux"
                className={`nav ${checkActive(3, "active")}`}
                onClick={() => handleClick(3)}
              >
                UI/UX
              </HeaderNavListItemLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavListItemLink
                to="/art"
                className={`nav ${checkActive(4, "active")}`}
                onClick={() => handleClick(4)}
              >
                Art
              </HeaderNavListItemLink>
            </HeaderNavListItem>
          </HeaderNavList>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavListItemButton onClick={onClickDownload}>
                <HeaderNavListItemButtonTitle>CV</HeaderNavListItemButtonTitle>
                <HeaderNavListItemButtonIcon
                  src={DownloadIcon}
                  alt="Download CV"
                />
              </HeaderNavListItemButton>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavListItemLink
                to="/about"
                className={`nav ${checkActive(5, "active")}`}
                onClick={() => handleClick(5)}
              >
                About
              </HeaderNavListItemLink>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
