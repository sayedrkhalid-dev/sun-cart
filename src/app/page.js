import BrandCard from "@/components/BrandCard/BrandCard";
import Banner from "@/components/layout/Banner/Banner";
import Section from "@/components/layout/Section/Section";
import ProductCard from "@/components/ProductCard/ProductCard";
import TipsCard from "@/components/TipsCard/TipsCard";
import {
  fetchBrandsData,
  fetchProductsData,
  fetchTipsData,
} from "@/lib/dataFetch";
import Image from "next/image";

export default async function Home() {
  const { products } = await fetchProductsData();
  const { brands } = await fetchBrandsData();
  const { summerCareTips } = await fetchTipsData();

  // Popular Products, Brands, and Summer care tips
  const top_products = products.filter((p) => p.rating >= 4.7).slice(0, 4);
  // const top_brands = brands.filter((brand) => brand.tag === "popular");
  // const top_tips = tips.filter((tips) => tips.tag === "popular");

  return (
    <>
      <Banner />

      <Section>
        <div className="mb-10">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50">
            Popular Products
          </h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {top_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-center text-center">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-50 mt-2">
              Summer Care Tips 💡
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {summerCareTips.map((tips) => (
              <TipsCard key={tips.id} tips={tips} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-center text-center">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-50 mt-2">
              Our Trusted brands ✨
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
