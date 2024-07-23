import { Link } from "react-router-dom";

export default function ProductCart({
  id,
  name,
  price,
  memory,
  currency,
  details,
  noDetails,
}) {
  return (
    <div>
      <li>
        <div style={{ fontSize: "large" }}>
          {name} {memory} GB
        </div>
        <div>
          Price: {price}
          {currency}
        </div>
        {noDetails && <Link to={`/product/${id}`}>ViewDetails</Link>}
        {!noDetails && <p>{details}</p>}
      </li>
    </div>
  );
}
