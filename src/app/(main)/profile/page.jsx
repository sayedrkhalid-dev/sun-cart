import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@heroui/react";
import { LuLogOut as Logout } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { logoutAction } from "@/app/actions/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session?.user;

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

        <form action={logoutAction} className="w-full">
          <Button
            type="submit"
            variant="outline"
            fullWidth
            className="group border-gray-50"
          >
            Logout
            <Logout className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </div>
  );
}
