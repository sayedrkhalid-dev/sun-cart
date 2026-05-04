import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { fetchProductsData } from "@/lib/dataFetch";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { products } = await fetchProductsData();
  const product = products.find((p) => p.id == id);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
