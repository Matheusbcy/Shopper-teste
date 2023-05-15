 export function getNewPrice(listProd, code) {
    let arrNewPriceFiltered = listProd.filter((d) =>
      d.product_code.includes(code)
    );
    return arrNewPriceFiltered[0].new_price;
  }