import express, { Request, Response } from "express";
import cors from "cors";
import { ProductController } from "./controller/productController";


const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

const productController = new ProductController()

app.get("/products", productController.getAllProduct);
app.put("/products/:id", productController.editProduct)

