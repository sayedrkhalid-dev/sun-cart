import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 px-4 md:px-8">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Footer top */}
        <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">
          <div className="min-[1200px]:max-w-md max-w-lg w-full">
            {/* Logo */}
            <Link
              href="#"
              className="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              <Logo />
            </Link>

            {/* Contact Information */}
            <div className="space-y-3 text-sm text-slate-400 mt-6">
              <p className="leading-relaxed">
                Address: 123 Market Street, Suite 45, San Francisco
              </p>
              <p>
                Phone:{" "}
                <a
                  href="#"
                  className="hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  +8801326878885
                </a>
              </p>
              <p>
                Email:{" "}
                <Link
                  href="#"
                  className="hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  sayedrkhalid.official@gmail.com
                </Link>
              </p>
            </div>

            {/* Social Media Links */}
            <ul className="flex flex-wrap gap-6 mt-6">
              {/* Facebook */}
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/SayedRKhalid"
                  className="
                    flex items-center justify-center
                    w-8 h-8 p-2 rounded-full
                    bg-gray-800

                    shadow-md
                    hover:shadow-lg hover:shadow-amber-500/30

                    ring-1 ring-white/5
                    hover:ring-2 hover:ring-amber-500/60

                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5

                    focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                "
                  aria-label="Facebook"
                >
                  <FaFacebookF className="size-full fill-gray-50" />
                </Link>
              </li>

              {/* Linkedin */}
              <li>
                <Link
                  href="https://www.linkedin.com/in/sayed-r-khalid-al-amin-9461733b6/"
                  className="
                    flex items-center justify-center
                    w-8 h-8 p-2 rounded-full
                    bg-gray-800

                    shadow-md
                    hover:shadow-lg hover:shadow-amber-500/30

                    ring-1 ring-white/5
                    hover:ring-2 hover:ring-amber-500/60

                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5

                    focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                "
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="size-full fill-gray-50" />
                </Link>
              </li>

              {/* Twitter or X */}
              <li>
                <Link
                  href="#"
                  className="
                    flex items-center justify-center
                    w-8 h-8 p-2 rounded-full
                    bg-gray-800

                    shadow-md
                    hover:shadow-lg hover:shadow-amber-500/30

                    ring-1 ring-white/5
                    hover:ring-2 hover:ring-amber-500/60

                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5

                    focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                "
                  aria-label="X"
                >
                  <FaTwitter className="size-full fill-gray-50" />
                </Link>
              </li>

              {/* Github */}
              <li>
                <Link
                  href="https://github.com/sayedrkhalid-dev"
                  className="
                    flex items-center justify-center
                    w-8 h-8 p-2 rounded-full
                    bg-gray-800

                    shadow-md
                    hover:shadow-lg hover:shadow-amber-500/30

                    ring-1 ring-white/5
                    hover:ring-2 hover:ring-amber-500/60

                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5

                    focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                "
                  aria-label="Github"
                >
                  <FaGithub className="size-full fill-gray-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="min-[1200px]:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
            <div className="space-y-6">
              <h3 className="text-slate-50 text-sm font-semibold">Services</h3>
              <ul className="space-y-4 text-sm text-slate-400 font-normal">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Client Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-slate-50 text-sm font-semibold">Platforms</h3>
              <ul className="space-y-4 text-sm text-slate-400 font-normal">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Hubspot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Integration Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Marketing Glossar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    UIPath
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
                  >
                    Marketo Integration
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6 max-lg:col-span-full max-w-md">
              <div>
                <h3 className="text-slate-50 text-sm font-semibold mb-6">
                  Join Our Newsletter
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Subscribe to our newsletter and stay up to date with the
                  latest news and updates.
                </p>
              </div>

              <div className="bg-neutral-800 flex p-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-500 rounded-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-slate-50 text-sm w-full bg-transparent pl-2 outline-none"
                />
                <button
                  type="button"
                  className="py-2 px-3.5 text-sm rounded-md font-semibold text-nowrap cursor-pointer tracking-wide text-white border border-amber-600 bg-amber-600 hover:bg-amber-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-neutral-700" />

        {/* Footer bottom */}
        <div className="flex flex-wrap gap-4 flex-col md:flex-row">
          <ul className="flex flex-wrap gap-4 text-sm text-slate-400 font-normal">
            <li>
              <a
                href="#"
                className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded transition-all"
              >
                Security
              </a>
            </li>
          </ul>

          <p className="text-slate-400 text-sm md:ml-auto">
            © SunCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
