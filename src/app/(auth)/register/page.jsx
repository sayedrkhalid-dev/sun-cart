import RegForm from "@/components/RegForm/RegForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        <div className="p-6 rounded-lg bg-gray-50 border border-gray-300 shadow-xs md:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-gray-900 text-center text-2xl font-bold dark:text-gray-50">
            Create an account
          </h1>

          <RegForm />

          <div className="mt-6 text-gray-900 text-sm text-center dark:text-gray-50">
            {"Already have an account?"}
            <Link
              href="/login"
              className="text-amber-700 hover:underline ml-1 font-medium dark:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
