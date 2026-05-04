import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { auth } from "@/lib/auth";
import { fetchProductsData } from "@/lib/dataFetch";
import { headers } from "next/headers";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { products } = await fetchProductsData();
  const product = products.find((p) => p.id == id);

  const sesstion = await auth.api.getSession({
    headers: headers(),
  });

  if (sesstion) console.log(sesstion);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
