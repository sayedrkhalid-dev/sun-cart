import Link from "next/link";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { logoutAction } from "@/app/actions/auth";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);

  return (
    <nav className="bg-gray-900 border-b shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h3 className="text-xl font-bold tracking-wide text-amber-600">
            Sun<span className="text-gray-900">Cart</span>
          </h3>
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
        {user ? (
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

            <form action={logoutAction}>
              <Button
                type="submit"
                variant="outline"
                className="text-amber-600 border-amber-600"
              >
                Log out
                <LuLogOut />
              </Button>
            </form>
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
