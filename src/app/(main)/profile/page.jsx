"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiEdit } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import LogoutButton from "@/components/ui/LogoutButton";

export default function ProfilePage() {
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

  const socialClass = `
    flex items-center justify-center
    w-9 h-9 p-2 rounded-full
    bg-gray-800
    shadow-md
    hover:shadow-lg hover:shadow-amber-600/30
    ring-1 ring-white/5
    hover:ring-2 hover:ring-amber-600/60
    transition-all duration-300
    hover:-translate-y-1
  `;

  return (
    <div className="bg-gray-50 p-6 border border-gray-200 shadow-sm w-full max-w-sm rounded-xl mx-auto mt-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-ful flex justify-center items-center">
          <Image
            src={user.image || "/avatar.png"}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full aspect-square object-cover border-2 border-amber-500"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold capitalize">{user.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{user.email}</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <Link href="#" className={socialClass}>
            <FaFacebookF className="text-white" />
          </Link>
          <Link href="#" className={socialClass}>
            <FaLinkedinIn className="text-white" />
          </Link>
          <Link href="#" className={socialClass}>
            <FaTwitter className="text-white" />
          </Link>
          <Link href="#" className={socialClass}>
            <FaGithub className="text-white" />
          </Link>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/profile/edit" className="w-full">
          <Button fullWidth>
            <FiEdit />
            Edit Profile
          </Button>
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
}
