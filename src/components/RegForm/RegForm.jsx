"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const RegForm = () => {
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
          Name<span className="text-sm text-red-500">*</span>
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
          Email<span className="text-sm text-red-500">*</span>
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
          Password<span className="text-sm text-red-500">*</span>
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

export default RegForm;
