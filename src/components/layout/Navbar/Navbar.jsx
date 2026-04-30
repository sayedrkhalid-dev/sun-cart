import Link from "next/link";
import NavLink from "./NavLink";
import { Button, Avatar } from "@heroui/react";
import { LuLogOut as Logout } from "react-icons/lu";

const isLoggedIn = true;

const Navbar = () => {
  return (
    <nav className="bg-amber-50 border-b shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Navbar content */}
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-xl font-bold tracking-wide text-amber-500">
          Sun<span className="text-gray-900">Cart</span>
        </h2>

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
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Avatar
                className="group
                  ring-2 ring-transparent
                  transition-all duration-300 ease-out
                  hover:ring-amber-500
                  group-hover:ring-amber-500
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  group-hover:shadow-lg group-hover:shadow-amber-500/30
                "
              >
                <Avatar.Image
                  alt="User"
                  src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <Avatar.Fallback>U</Avatar.Fallback>
              </Avatar>
            </Link>

            <Button
              variant="outline"
              className="text-amber-500 border-amber-500 group"
            >
              Log out
              <Logout className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;