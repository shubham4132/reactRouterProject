import phonesDB from "./phonesDB";
import { NavLink, useParams } from "react-router-dom";
import ProductCart from "../Components/ProductCart";
export default function ProductDetails() {
  const { productId } = useParams();
  function getProductDetils(products, productId) {
    return products.find((product) => product.id === productId);
  }
  const product = getProductDetils(phonesDB.data, productId);

  return (
    <>
      <ProductCart {...product} />
      <NavLink to="/category">See All</NavLink>
    </>
  );
}
