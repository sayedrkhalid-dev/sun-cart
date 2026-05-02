import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="bg-gray-50 px-4 md:px-8 dark:bg-gray-900">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <Link href="/">
            <Image
              src="https://readymadeui.com/logo-alt.svg"
              alt="logo"
              width={500}
              height={500}
              className="w-14 min-h-14 mb-8 mx-auto block"
            />
          </Link>

          <div className="p-6 rounded-lg bg-gray-50 border border-gray-300 shadow-xs md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-gray-900 text-center text-3xl font-bold dark:text-gray-50">
              Sign in
            </h1>

            <form className="space-y-6 mt-10">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@readymadeui.com"
                  required
                  className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
                />
              </div>

              <div className="flex items-start flex-wrap gap-2">
                <label className="flex items-center group has-[input:checked]:text-gray-900">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    required
                    className="sr-only"
                  />
                  {/* Custom box */}
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-gray-300 dark:outline-gray-600
                                 bg-gray-50 dark:bg-gray-700
                                 group-has-[input:checked]:bg-amber-600
                                 group-has-[input:checked]:outline-amber-600
                                 group-focus-within:outline-2
                                 group-focus-within:outline-amber-600"
                    aria-hidden="true"
                  >
                    {/* Checkmark */}
                    <svg
                      className="size-3 text-gray-50 opacity-0 group-has-[input:checked]:opacity-100"
                      viewBox="0 0 12 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 5l3 3 7-7" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </span>
                </label>

                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-amber-700 dark:text-amber-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-gray-50 border border-amber-600 bg-amber-600 hover:bg-amber-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Sign in
              </button>

              <div className="text-gray-900 text-sm text-center dark:text-gray-50">
                {"Don't have an account?"}
                <Link
                  href="/register"
                  className="text-amber-700 hover:underline ml-1 font-medium dark:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
