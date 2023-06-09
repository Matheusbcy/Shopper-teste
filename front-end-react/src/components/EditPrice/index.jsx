import React, { useEffect, useState } from "react";
import {
  ContainerButton,
  ContainerEditProd,
  ContainerInfEdit,
  ContainerInput,
  FileInput,
  Flex,
  FormContainer,
  Label,
  Row,
  SubmitButton,
  Table,
  TableHeader,
  TableItem,
  Title,
} from "./style";
import Papa from "papaparse";
import axios from "axios";
import { formataValor } from "../../utils/FormatarValor";
import { TbCheck } from "react-icons/tb"
import { MdDoNotDisturbOn } from "react-icons/md"

function EditPrice() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [listProd, setListProd] = useState([]);
  const [listProdUpdate, setProdUpdate] = useState([]);

  console.log(listProdUpdate);
  const handleFile = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  function getNewPrice(code) {
    let arrNewPriceFiltered = listProd.filter((d) =>
      d.product_code.includes(code)
    );
    return arrNewPriceFiltered[0].new_price;
  }

  async function fetchParseData() {
    if (!selectedFile) {
      alert("Nenhum arquivo selecionado");
      return;
    }
    const result = await new Promise((resolve) => {
      Papa.parse(selectedFile, {
        download: true,
        delimiter: ",",
        complete: (result) => {
          resolve(result.data);
        },
      });
    });

    const headers = result.shift();
    const productCodeIndex = headers.indexOf("product_code");
    const newPriceIndex = headers.indexOf("new_price");

    if (productCodeIndex === -1 || newPriceIndex === -1) {
      alert("As colunas 'product_code' e 'new_price' não existem no arquivo.");
      return;
    }

    const arrayProd = result.map((row) => {
      const objeto = {};

      for (let i = 0; i < headers.length; i++) {
        objeto[headers[i]] = row[i];
      }
      return objeto;
    });

    setListProd(arrayProd);
  }

  useEffect(() => {
    const fetchData = async () => {
      await catProdId(listProd);
    };

    fetchData().catch(console.error);
  }, [listProd]);

  async function catProdId(array) {
    const copyArray = [...array];
    let prodUpdate = [];

    await Promise.all(
      copyArray.map(async (row) => {
        if (row.product_code !== "") {
          const result = await axios.get(
            `http://localhost:3003/products?id=${row.product_code}`
          );

          row.new_price = parseFloat(row.new_price);
          result.data[0].sales_price = parseFloat(result.data[0].sales_price);

          const salesPrice = parseFloat(
            (result.data[0].sales_price * 0.1).toFixed(2)
          );

          if (
            result.data[0].cost_price &&
            row.new_price > result.data[0].cost_price
          ) {
            if (
              row.new_price > result.data[0].sales_price - salesPrice &&
              row.new_price < result.data[0].sales_price + salesPrice
            ) {
              const newProdUpdate = result.data[0];
              newProdUpdate.error = 0;
              prodUpdate.push(newProdUpdate);
            } else {
              const newProdUpdateErro1 = result.data[0];
              newProdUpdateErro1.error = 1;
              prodUpdate.push(newProdUpdateErro1);
            }
          } else {
            const newProdUpdateErro2 = result.data[0];
            newProdUpdateErro2.error = 2;
            prodUpdate.push(newProdUpdateErro2);
          }
        }
      })
    );

    setProdUpdate(prodUpdate);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchParseData();
  };

  const prodPassValidation = listProdUpdate.filter((prod) => {
    return prod.error === 0;
  });

  async function sendDataBack() {
    try {
      prodPassValidation.map(async (prod) => {
        await axios.put(`http://localhost:3003/products/${prod.code}`, {
          new_price: getNewPrice(prod.code),
        });
      });
      alert("Preço atualizado com sucesso!");
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  let ButtonSubmit;
  if (listProdUpdate.length === 0) {
    ButtonSubmit = (
      <SubmitButton
        style={{
          backgroundColor: "#ccc",
          color: "#666",
          cursor: "not-allowed",
          opacity: 0.5,
          marginRight: "10px",
        }}
        type="submit"
        disabled
      >
        Atualizar
      </SubmitButton>
    );
  } else {
    ButtonSubmit = (
      <SubmitButton
        style={{ marginRight: "10px", backgroundColor: "blue" }}
        onClick={sendDataBack}
      >
        Atualizar
      </SubmitButton>
    );
  }

  return (
    <ContainerEditProd>
      <ContainerInfEdit>
        <Title>Editar Preço</Title>
      </ContainerInfEdit>
      <ContainerInput>
        <FormContainer onSubmit={handleSubmit}>
          <Label htmlFor="fileInput">Selecione um arquivo:</Label>
          <FileInput
            type="file"
            id="fileInput"
            name="fileInput"
            accept=".csv"
            onChange={handleFile}
          />
          {prodPassValidation.length > 0 ? (
            <p>{prodPassValidation.length} produtos passaram na validação</p>
          ) : (
            <p>Produtos ainda não validados</p>
          )}
          <br />
          <ContainerButton>
            {ButtonSubmit}
            <SubmitButton onClick={handleSubmit}>Validar</SubmitButton>
          </ContainerButton>
        </FormContainer>
      </ContainerInput>
      <Table>
        {listProdUpdate.map((prod) => {
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
                <TableHeader>Preço Atual</TableHeader>
                <TableItem>
                  {formataValor(parseFloat(prod.sales_price))}
                </TableItem>
              </div>
              <div>
                <TableHeader>Novo Preço</TableHeader>
                <TableItem>
                  {formataValor(parseFloat(getNewPrice(prod.code)))}
                </TableItem>
              </div>
              <div>
                <TableHeader>Validação</TableHeader>
                <TableItem>
                  {prod.error === 0 ? <TbCheck size={20} color="green"/> : prod.error === 1 ? <p><MdDoNotDisturbOn size={20} color="red"/> Porcentagem </p> : <p><MdDoNotDisturbOn size={20} color="red"/> Custo</p>}
                </TableItem>
              </div>
            </Flex>
          );
        })}
      </Table>
    </ContainerEditProd>
  );
}

export default EditPrice;
