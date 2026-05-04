"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const ProductDetailsButton = () => {
  const router = useRouter();

  const handleDetails = async () => {
    const { data: session } = await authClient.getSession();

    if (!session) router.push("/login");
  };

  return (
    <Button onClick={handleDetails} className="bg-amber-600 text-gray-50">
      View Details
    </Button>
  );
};

export default ProductDetailsButton;
