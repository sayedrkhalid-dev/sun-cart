"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function updateProfileAction(formData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const name = formData.get("name");
  const image = formData.get("image");

  await auth.api.updateUser({
    headers: await headers(),
    body: {
      name,
      image,
    },
  });

  redirect("/profile");
}
