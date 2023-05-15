import React from "react";
import { ContainerNav, ContainerUl, Link, List } from "./style";
import { AiFillHome } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";

function Nav() {
  return (
    <ContainerNav>
      <ContainerUl>
        <ul>
          <List>
            {" "}
            <AiFillHome />
            <Link href="/">Inicio</Link>{" "}
          </List>
          <List>
            {" "}
            <ImPriceTag />
            <Link href="/price">Preço</Link>{" "}
          </List>
        </ul>
      </ContainerUl>
    </ContainerNav>
  );
}

export default Nav;
