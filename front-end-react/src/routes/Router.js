import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProduct from "../components/ListProduct";
import EditPrice from "../components/EditPrice";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ListProduct />} />
        <Route path="/price" element={<EditPrice />} />
      </Routes>
    </BrowserRouter>
  );
}
