"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductDetailsButton = ({ id }) => {
  const router = useRouter();

  const handleDetails = async () => {
    const { data: session } = await authClient.getSession();

    if (!session) {
      router.push("/login");
      return;
    }

    router.push(`/products/${id}`);
  };

  return (
    <Link href={`/products/${id}`}>
      <Button onClick={handleDetails} className="bg-amber-600 text-gray-50">
        View Details
      </Button>
    </Link>
  );
};

export default ProductDetailsButton;
