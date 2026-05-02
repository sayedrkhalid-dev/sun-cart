"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { LuLogOut as Logout } from "react-icons/lu";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const logout = async () => await authClient.signOut();

  return (
    <nav className="bg-amber-50 border-b shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Navbar content */}
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h3 className="text-xl font-bold tracking-wide text-amber-600 cursor-pointer">
            Sun<span className="text-gray-900">Cart</span>
          </h3>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-sm font-semibold">
          <li>
            <NavLink href="/" label={"Home"} />
          </li>
          <li>
            <NavLink href="/products" label={"Products"} />
          </li>
          <li>
            <NavLink href="/profile" label={"My Profile"} />
          </li>
        </ul>

        {/* Auth Section */}
        {session ? (
          <div className="flex items-center gap-3">
            <Link href="/profile" className="group inline-flex">
              <Avatar
                className="h-10 w-10 transition-all duration-300 ease-out 
                         ring-2 ring-transparent group-hover:ring-amber-600 
                         group-hover:scale-105 
                         shadow-md group-hover:shadow-xl 
                         backdrop-blur-xl"
              >
                {session.user.image ? (
                  <Avatar.Image
                    alt={session.user.name}
                    src={session.user.image}
                    className="object-cover"
                  />
                ) : (
                  <Avatar.Fallback className="bg-amber-600 text-white font-semibold">
                    {session.user.name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                )}

                {isPending && (
                  <Avatar.Fallback className="bg-amber-600 text-white font-semibold">
                    {session.user.name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                )}
              </Avatar>
            </Link>

            <Button
              onClick={() => logout()}
              variant="outline"
              className="group text-amber-600 border-amber-600"
            >
              Log out
              <Logout className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button className="bg-amber-600">Login</Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="text-amber-600 border-amber-600"
              >
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
