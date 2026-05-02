"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useState } from "react";

const ProductDetails = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT: Image Section */}
        <div>
          <div className="relative w-full aspect-square border rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 border rounded-md overflow-hidden cursor-pointer hover:border-amber-600"
              >
                <Image
                  src={product.image}
                  alt="thumb"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Info Section */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-50">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">{product.rating}</span>
            <div className="flex">
              <BsStarFill className="text-amber-600" />
              <BsStarFill className="text-amber-600" />
              <BsStarFill className="text-amber-600" />
              <BsStarFill className="text-amber-600" />
              <BsStar className="text-amber-600" />
            </div>
            <span className="text-gray-500">
              | {product.rating} Ratings | 50 Reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Price Section */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-gray-400 line-through text-sm">
              ${product.price + 4}
            </span>

            <span className="text-2xl font-bold text-amber-600">
              ${product.price}
            </span>

            <span className="bg-amber-100 text-amber-600 text-xs px-2 py-1 rounded">
              SAVE 10%
            </span>
          </div>

          <hr className="my-4" />

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 text-lg"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Button fullWidth variant="outline">
              Add to cart
            </Button>

            <Button
              fullWidth
              variant="primary"
              className="bg-amber-600 text-gray-50 hover:bg-amber-700"
            >
              Buy it now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
