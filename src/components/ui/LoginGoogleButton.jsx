"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginGoogleButton = () => {
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Button
      type="button"
      onClick={handleGoogleSignin}
      className="w-full border-gray-300"
      variant="outline"
    >
      <FcGoogle />
      Sign in with Google
    </Button>
  );
};

export default LoginGoogleButton;
