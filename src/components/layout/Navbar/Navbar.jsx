"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import LogoutButton from "@/components/ui/LogoutButton";
import Logo from "@/components/ui/Logo";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="bg-gray-900 border-b shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-sm font-semibold">
          <li>
            <NavLink href="/" label="Home" />
          </li>
          <li>
            <NavLink href="/products" label="Products" />
          </li>
          <li>
            <NavLink href="/profile" label="My Profile" />
          </li>
        </ul>

        {/* Auth */}
        {isPending ? (
          <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
        ) : user ? (
          <div className="flex items-center gap-3">
            <Link href="/profile" className="group inline-flex">
              <Avatar className="h-10 w-10">
                {user?.image ? (
                  <Avatar.Image
                    src={user?.image}
                    alt={user?.name}
                    className="object-cover"
                  />
                ) : (
                  <Avatar.Fallback className="bg-amber-600 text-white font-semibold">
                    {user?.name?.slice(0, 2).toUpperCase() || "U"}
                  </Avatar.Fallback>
                )}
              </Avatar>
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button className="bg-amber-600">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
