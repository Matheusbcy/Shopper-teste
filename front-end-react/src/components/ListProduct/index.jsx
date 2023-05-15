import React, { useContext } from "react";
import {
  ContainerInfProd,
  ContainerListProd,
  Flex,
  Row,
  Table,
  TableHeader,
  TableItem,
} from "./style";
import { GlobalContexts } from "../../Contexts/GlobalContext";
import { formataValor } from "../../utils/FormatarValor";

function ListProduct() {
  const context = useContext(GlobalContexts);

  const { allProduct } = context;

  return (
    <ContainerListProd>
      <ContainerInfProd>
        <h1>Lista de Produtos</h1>
      </ContainerInfProd>
      <Table>
        {allProduct.map((prod) => {
          return (
            <Flex key={prod.code}>
              <div>
                <TableHeader>Codigo</TableHeader>
                <TableItem>{prod.code}</TableItem>
              </div>
              <Row>
                <TableHeader>Nome do Produto</TableHeader>
                <TableItem>{prod.name}</TableItem>
              </Row>
              <div>
                <TableHeader>Preço de Custo</TableHeader>
                <TableItem>
                  {formataValor(parseFloat(prod.cost_price))}
                </TableItem>
              </div>
              <div>
                <TableHeader>Preço de Venda</TableHeader>
                <TableItem>
                  {formataValor(parseFloat(prod.sales_price))}
                </TableItem>
              </div>
            </Flex>
          );
        })}
      </Table>
    </ContainerListProd>
  );
}

export default ListProduct;
