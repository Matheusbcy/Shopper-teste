import { ProductBusiness } from "./../business/productBusiness";
import { Request, Response } from "express";
import { ProductDataBase } from "../database/productDataBase";

export class ProductController {
  public getAllProduct = async (req: Request, res: Response) => {
    try {
      const id = req.query.id as number | undefined;

      const productDB = new ProductDataBase();
      const products = await productDB.findProduct(id);

      res.status(200).send(products);
    } catch (error) {
      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };

  public editProduct = async (req: Request, res: Response) => {
    try {
      const code = Number(req.params.id);

      const new_price = Number(req.body.new_price);

      const productBusiness = new ProductBusiness();

      const product = await productBusiness.editProd(code, new_price);

      res.status(200).send(product);
    } catch (error) {
      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
