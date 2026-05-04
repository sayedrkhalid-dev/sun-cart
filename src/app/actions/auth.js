"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Login
export async function loginAction(email, password) {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
    headers: await headers(),
  });

  if (!result) {
    throw new Error("Login failed");
  }

  redirect("/");
}

// logout
export async function logoutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/login");
}

// Register
export async function registerAction(name, email, password, image) {
  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      image,
      callbackURL,
    },
    headers: await headers(),
  });

  if (!result) {
    throw new Error("Registration failed");
  }

  redirect("/");
}
