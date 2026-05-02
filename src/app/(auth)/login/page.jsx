import LoginForm from "@/components/LoginForm/LoginForm";
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

            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
