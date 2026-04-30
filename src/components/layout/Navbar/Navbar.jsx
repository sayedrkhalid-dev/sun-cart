import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="w-full max-w-11/12 mx-auto min-h-15 flex justify-between items-center">
        {/* Navbar Right */}
        <div>
          <h3 className="font-black text-lg">SunCart</h3>
        </div>

        {/* Navbar Center */}
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        {/* Navbar Left */}
        <div className="flex items-center gap-4">
          <Link href={"/signup"}>SignUp</Link>
          <Link href={"/signin"}>SignIn</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
