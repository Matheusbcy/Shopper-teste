import React from "react";
import { ContainerFooter, ContainerText, P } from "./style";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <ContainerFooter>
      <ContainerText>
        <P>
          Desenvolvido com <AiFillHeart color="red"/> por Matheus Freitas
        </P>
      </ContainerText>
    </ContainerFooter>
  );
}

export default Footer;
