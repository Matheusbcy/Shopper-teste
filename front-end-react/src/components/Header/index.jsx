import React from "react";
import { ContainerHeader, Img, Span, Text } from "./style";
import { AiFillHome } from "react-icons/ai";

function Header() {
  return (
    <ContainerHeader>
      <Img src="https://shopper.com.br/static/img/og-logo.png" alt="" />
      
      <Text><AiFillHome size={25}/> <Span></Span> Inicio</Text>
    </ContainerHeader>
  );
}

export default Header;
