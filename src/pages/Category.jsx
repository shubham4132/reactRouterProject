import phonesDB from "./phonesDB";
import ProductCart from "../Components/ProductCart";

export default function Category() {
  return (
    <>
      <h1>Iphones</h1>
      <ul>
        {phonesDB.data.map((product) => (
          <ProductCart {...product} noDetails key={product.id} />
        ))}
      </ul>
    </>
  );
}
