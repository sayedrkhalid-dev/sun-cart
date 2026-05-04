"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const UpdateForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleUpdate = async (formData) => {
    const { name, url } = formData;
    await authClient.updateUser({ name, image: url });
    router.push("/profile");
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6 mt-10">
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

      <div className="mt-8 flex gap-3">
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isSubmitting}
          className="group bg-amber-500"
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default UpdateForm;
