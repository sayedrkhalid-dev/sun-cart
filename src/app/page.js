import BrandCard from "@/components/BrandCard/BrandCard";
import Banner from "@/components/layout/Banner/Banner";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  fetchBrandsData,
  fetchProductsData,
  fetchTipsData,
} from "@/lib/dataFetch";

export default async function Home() {
  const { products } = await fetchProductsData();
  const { brands } = await fetchBrandsData();
  // const tips = await fetchTipsData();

  // Popular Products, Brands, and Summer care tips
  const top_products = products.filter((p) => p.rating >= 4.7).slice(0, 4);
  const top_brands = brands.filter((brand) => brand.tag === "popular");
  // const top_tips = tips.filter((tips) => tips.tag === "popular");

  return (
    <>
      <Banner />

      <section aria-labelledby="products-heading">
        <div className="mt-8 container mx-auto">
          <h2
            id="products-heading"
            className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50"
          >
            Popular Products
          </h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {top_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
