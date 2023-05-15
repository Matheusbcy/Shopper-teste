import React from "react";
import { ContainerNav, ContainerUl, Link, List } from "./style";
import { AiFillHome } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";

function Nav() {

  return (
    <ContainerNav>
      <ContainerUl>
        <ul>
          <List>
            {" "}
            <AiFillHome /><Link href="/">Inicio</Link>{" "}
          </List>
          <List>
            {" "}
            <AiFillShop /><Link href="/price">Produtos</Link>{" "}
          </List>
        </ul>
      </ContainerUl>
    </ContainerNav>
  );
}

export default Nav;
