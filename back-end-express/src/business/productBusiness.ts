import { Product } from "./../models/product";
import { ProductDataBase } from "../database/productDataBase";
import { BadRequestError } from "../errors/BadRequestError";

export class ProductBusiness {
  public async getAllProduct(q: number | undefined) {
    const productDataBase = new ProductDataBase();
    const productDB = productDataBase.findProduct(q);

    const product: Product[] = (await productDB).map(
      (product) =>
        new Product(
          product.code,
          product.name,
          product.cost_price,
          product.sales_price
        )
    );
    return product;
  }

  public async editProd(code: number, new_price: number) {
    if (typeof code !== "number") {
      throw new BadRequestError("code tem que ser um número");
    }
    if (typeof new_price !== "number") {
      throw new BadRequestError("new_price tem que ser um número");
    }

    const productDBExists = await new ProductDataBase().findProductById(code);

    if (!productDBExists) {
      throw new BadRequestError("product not found");
    }

    const product = new Product(
      productDBExists.code,
      productDBExists.name,
      productDBExists.cost_price,
      productDBExists.sales_price
    );

    const newPrice = new_price || productDBExists.sales_price;

    product.setSalesPrice(newPrice);

    await new ProductDataBase().updateProductByCode(code, new_price);

    return product;
  }
}
