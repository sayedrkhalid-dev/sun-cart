"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    const { email, password } = formData;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      console.log(error.message);
      return;
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 mt-10">
      {/* Input: Email */}
      <div>
        <label className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Enter your email"
          className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
        />
        {errors.email && (
          <p className="text-sm text-red-500 font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Input: Password */}
      <div>
        <label className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Enter your password"
          className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
        />
        {errors.password && (
          <p className="text-sm text-red-500 font-semibold">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Input: Check box for Remember me */}
      {/* <div className="flex items-start flex-wrap gap-2">
        <label className="flex items-center group has-[input:checked]:text-gray-900">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            required
            className="sr-only"
          />
          <span
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-gray-300 dark:outline-gray-600
                                 bg-gray-50 dark:bg-gray-700
                                 peer-[input:checked]:bg-amber-600
                                 peer-[input:checked]:outline-amber-600
                                 group-focus-within:outline-2
                                 group-focus-within:outline-amber-600"
            aria-hidden="true"
          >
            <svg
              className="size-3 text-gray-50 opacity-0 peer-[input:checked]:opacity-100"
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
      </div> */}

      {/* Button: Submit */}
      <button
        type="submit"
        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-gray-50 border border-amber-600 bg-amber-600 hover:bg-amber-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        Sign in
      </button>

      {/* Sing up page link: If does not have an account */}
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
  );
}
