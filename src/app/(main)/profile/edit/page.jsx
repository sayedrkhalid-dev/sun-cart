"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import UpdateForm from "@/components/UpdateForm/UpdateForm";

const EditProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-16">
        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="bg-gray-50 p-6 border border-gray-200 shadow-sm w-full max-w-sm rounded-xl mx-auto mt-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-ful flex justify-center items-center">
        <Image
          src={user.image || "/avatar.png"}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full aspect-square object-cover border-2 border-amber-500"
        />
      </div>
      <UpdateForm />
    </div>
  );
};

export default EditProfilePage;
