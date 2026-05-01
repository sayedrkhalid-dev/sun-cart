import UV_Protection_Sunglasses from "@/assets/UV_Protection_Sunglasses.png";
import Floral_Summer_Dress from "@/assets/Floral_Summer_Dress.png";
import Aloe_Vera_Skin_Gel from "@/assets/Aloe_Vera_Skin_Gel.avif";
import Beach_Flip_Flops from "@/assets/Beach_Flip_Flops.avif";
import Straw_Sun_Hat from "@/assets/Straw_Sun_Hat.avif";
import Insulated_Water_Bottle from "@/assets/Insulated_Water_Bottle.avif";
import Beach_Tote_Bag from "@/assets/Beach_Tote_Bag.avif";
import SPF_50_Sunscreen_Lotion from "@/assets/SPF_50_Sunscreen_Lotion.avif";

import ProductCard from "@/components/ProductCard/ProductCard";
import { fetchProductsData } from "@/lib/dataFetch";

const ProductsPage = async () => {
  const { products } = await fetchProductsData();

  return (
    <section aria-labelledby="products-heading">
      <div className="mt-8 container mx-auto">
        <h2
          id="products-heading"
          className="text-center text-2xl font-bold text-gray-900 dark:text-gray-50"
        >
          All Products
        </h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;
