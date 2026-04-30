"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${pathName === href && "text-amber-500"}`}>
      {label}
    </Link>
  );
};

export default NavLink;
