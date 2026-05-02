"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const ResForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (formData) => {
    const { name, email, password, url } = formData;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: url,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6 mt-10">
      {/* Input: Name */}
      <div>
        <label className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50">
          Name
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Enter your name"
          className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
        />
        {errors.name && (
          <p className="text-sm text-red-500 font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>

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

      {/* Input: Image URL */}
      <div>
        <label className="mb-2 text-gray-900 font-medium text-sm inline-block dark:text-gray-50">
          Image URL
        </label>
        <input
          type="text"
          {...register("url")}
          placeholder="Enter or paste your image url"
          className="px-3 py-2.5 text-sm text-gray-900 rounded-md bg-gray-50 w-full outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 dark:text-gray-50 dark:bg-gray-700 dark:outline-gray-600"
        />
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

      {/* Input: Check box for terms and conditions */}
      {/* <div className="flex items-start flex-wrap gap-2">
        <label className="flex items-center group has-[input:checked]:text-gray-900">
          <input
                       {...register("tmc", {
              required: "You must accept terms and conditions",
            })}
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
            aria-he"
          >

            <svg
              className="size-3 text-gray-50 opacity-0 peer-[input:checked]:opacity-100"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeW           >
              <path d="M1 5l3 3 7-7" />
            </svg>
          </span>
          <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
            I accept the
          </span>
        </label>

        <Link
          href="#"
          className="ml-1 text-sm font-medium text-amber-700 dark:text-amber-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          Terms and Conditions
        </Link>
      </div> */}

      {/* Button: Submit */}
      <button
        type="submit"
        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wray-50 border border-amber-600 bg-amber-600 hover:bg-amber-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        Create an account
      </button>
    </form>
  );
};

export default ResForm;
