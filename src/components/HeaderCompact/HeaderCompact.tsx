import React from "react";
import {
  HeaderCompactContainer,
  HeaderCompactLogo,
  HeaderCompactWrapper,
} from "./headerCompact.styled";

export const HeaderCompact = () => {
  return (
    <HeaderCompactWrapper>
      <HeaderCompactContainer>
        <HeaderCompactLogo to="/">Yauheni Damantsevich</HeaderCompactLogo>
      </HeaderCompactContainer>
    </HeaderCompactWrapper>
  );
};
