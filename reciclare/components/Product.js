import Link from "next/link";
import DeleteProduct from "./DeleteProduct";
import ItemStyles from "./styles/ItemStyles";

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />

      <Link href={`/product/${product.id}`}>{product.name}</Link>

      <p>{product.description}</p>
      <div className="buttonList">
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
