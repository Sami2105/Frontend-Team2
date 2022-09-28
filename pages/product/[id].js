import SingleProduct from "../../components/SingleProduct.js";
import Link from "components/Link.js";
export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
