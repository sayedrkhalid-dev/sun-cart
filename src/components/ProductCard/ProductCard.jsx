"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsStar, BsStarFill } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleDetails = async () => {
    const { data: session } = await authClient.getSession();

    if (!session) {
      router.push("/login");
      return;
    }

    router.push(`/products/${product.id}`);
  };

  const rating = product.rating || 4; // fallback rating

  return (
    <div className="mt-6 w-full mx-auto bg-gray-50 border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-3/2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      <hr className="border-gray-300 my-6 dark:border-gray-700" />

      <div className="flex flex-col justify-between p-4">
        {/* Name + Rating */}
        <div className="flex flex-col">
          <h3
            className="truncate text-gray-900 text-lg font-semibold dark:text-gray-50"
            aria-label={product.name}
          >
            {product.name}
          </h3>
          {/* Product Rattings */}{" "}
          <div
            className="flex items-center gap-1 mt-3"
            role="img"
            aria-label="4.5 out of 5 stars, based on 50 reviews"
          >
            {" "}
            <BsStarFill strokeWidth={0.5} className="text-amber-600" />{" "}
            <BsStarFill strokeWidth={0.5} className="text-amber-600" />{" "}
            <BsStarFill strokeWidth={0.5} className="text-amber-600" />{" "}
            <BsStarFill strokeWidth={0.5} className="text-amber-600" />{" "}
            <BsStar strokeWidth={0.5} className="text-amber-600" />{" "}
            <span
              aria-hidden="true"
              className="text-gray-900 ml-1.5 text-sm font-medium dark:text-gray-50"
            >
              {" "}
              ({product.price}){" "}
            </span>{" "}
          </div>
        </div>

        {/* Price + Button */}
        <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
          <span className="text-xl text-gray-900 font-bold dark:text-gray-50">
            ${product.price}
          </span>

          <Button
            type="button"
            onClick={handleDetails}
            className="bg-amber-600 text-gray-50"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
