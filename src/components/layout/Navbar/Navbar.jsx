"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Logo from "@/components/ui/Logo";
import LogoutButton from "@/components/ui/LogoutButton";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
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

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
          ) : user ? (
            <>
              <Link href="/profile">
                <Avatar className="h-10 w-10">
                  {user?.image ? (
                    <Avatar.Image
                      src={user.image}
                      alt={user.name}
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
            </>
          ) : (
            <Link href="/login">
              <Button className="bg-amber-600">Login</Button>
            </Link>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-white">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2">
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Products
          </Link>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            My Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
