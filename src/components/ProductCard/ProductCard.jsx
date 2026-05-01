import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="mt-6 h-full w-full mx-auto bg-gray-50 border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
      <div className="relative w-full aspect-3/2 flex items-center justify-center">
        <Image
          src={product.image}
          fill
          alt={product.name}
          className="object-cover rounded-lg hover:scale-110 transition-all duration-500"
        />
      </div>

      <hr className="border-gray-300 my-6 dark:border-gray-700" />

      <div className="flex flex-col justify-between p-4">
        {/* Product Name and Rattings */}
        <div className="flex flex-col">
          <h3
            className="truncate text-gray-900 text-lg font-semibold dark:text-gray-50"
            aria-label={product.name}
          >
            {product.name}
          </h3>

          {/* Product Rattings */}
          <div
            className="flex items-center gap-1 mt-3"
            role="img"
            aria-label="4.5 out of 5 stars, based on 50 reviews"
          >
            <BsStarFill strokeWidth={0.5} className="text-amber-500" />
            <BsStarFill strokeWidth={0.5} className="text-amber-500" />
            <BsStarFill strokeWidth={0.5} className="text-amber-500" />
            <BsStarFill strokeWidth={0.5} className="text-amber-500" />
            <BsStar strokeWidth={0.5} className="text-amber-500" />
            <span
              aria-hidden="true"
              className="text-gray-900 ml-1.5 text-sm font-medium dark:text-gray-50"
            >
              ({product.price})
            </span>
          </div>
        </div>

        {/* Product Price and Details button */}
        <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
          {/* Product Price */}
          <span className="text-xl text-gray-900 font-bold dark:text-gray-50">
            ${product.price}
          </span>

          {/* Product Details Button */}
          <Link href={`/products/${product.id}`}>
            <Button variant="primary" className="bg-amber-500 text-gray-50">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
