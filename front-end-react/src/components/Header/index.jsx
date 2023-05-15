import React from "react";
import { ContainerHeader, Img, Span, Text } from "./style";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Header() {


  return (
    <ContainerHeader>
      <Img src="https://shopper.com.br/static/img/og-logo.png" alt="" />
    </ContainerHeader>
  );
}


export default Header;
