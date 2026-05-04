"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="text-amber-600 border-amber-600"
      onClick={handleLogout}
    >
      Log out
      <LuLogOut />
    </Button>
  );
};

export default LogoutButton;
