import { productDB } from "../productInterface";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase {
  public static TABLE_PRODUCT = "products";
  public static TABLE_PACKS = "packs"

  public async findProduct(code: number | undefined) {
    let productDB;

    if (code) {
      const result: productDB[] = await BaseDatabase.connection(
        ProductDataBase.TABLE_PRODUCT
      ).where({ code });
      productDB = result;
    } else {
      const result: productDB[] = await BaseDatabase.connection(
        ProductDataBase.TABLE_PRODUCT
      );
      productDB = result;
    }
    return productDB;
  }

  public async findProductById(code: number) {
    const [productDBExist]: productDB[] | undefined =
      await BaseDatabase.connection(ProductDataBase.TABLE_PRODUCT).where({
        code,
      });
    return productDBExist;
  }

  public async updateProductByCode(code: number, new_price: number) {
    await BaseDatabase.connection(ProductDataBase.TABLE_PRODUCT)
      .update({
        sales_price: new_price,
      })
      .where({ code });
  }
}
