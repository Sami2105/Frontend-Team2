import Link from "next/link";
import DeleteProduct from "./DeleteProduct";
import ItemStyles from "./styles/ItemStyles";

export default function Problem({ problem }) {
  return (
    <ItemStyles>
      <img
        src={problem?.photo?.image?.publicUrlTransformed}
        alt={problem.name}
      />

      <Link href={`/RaporteazaProblema/${problem.id}`}>{problem.name}</Link>

      <p>{problem.description}</p>
      <div className="buttonList">
        
      </div>
    </ItemStyles>
  );
}
