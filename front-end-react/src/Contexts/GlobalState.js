import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContexts } from "./GlobalContext";

export default function GlobalState(props) {
  const [allProduct, setAllProducts] = useState([]);

  async function getProduct() {
    try {
      const result = await axios.get("http://localhost:3003/products");
      setAllProducts(result.data);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const context = {
    allProduct,
  };
  return (
    <GlobalContexts.Provider value={context}>
      {props.children}
    </GlobalContexts.Provider>
  );
}
