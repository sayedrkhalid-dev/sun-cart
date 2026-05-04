import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import UpdateForm from "@/components/UpdateForm/UpdateForm";

const EditProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-50 p-6 border border-gray-200 shadow-sm w-full max-w-sm rounded-xl mx-auto mt-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-ful flex justify-center items-center">
        <Image
          src={user.image || "/avatar.png"}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full aspect-square object-cover border-2 border-amber-500"
        />
      </div>
      <UpdateForm />
    </div>
  );
};

export default EditProfilePage;
