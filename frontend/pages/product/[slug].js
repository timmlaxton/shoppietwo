import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { DetailsStyle, ProductInfo } from "../../styles/ProductDetails";

export default function ProductDetails() {
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <span>Quantity</span>
          <button>Plus</button>
          <p>0</p>
          <button>Minus</button>
        </div>
      </ProductInfo>
      <button>Add to Cart</button>
    </DetailsStyle>
  );
}
