import Link from "next/link";
import NavLink from "./NavLink";
import { Button, Avatar } from "@heroui/react";
import { ArrowRightFromSquare as LogoutIcon } from "@gravity-ui/icons";

const isLoggedIn = false;

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 min-h-16 flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-xl font-bold">
          <span className="text-blue-500">Sun</span>Cart
        </h3>

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
              <Avatar>
                <Avatar.Image
                  alt="User"
                  src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                />
                <Avatar.Fallback>U</Avatar.Fallback>
              </Avatar>
            </Link>

            <Button variant="outline">
              Log out <LogoutIcon />
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
