// "use client";

// import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const UserAvartar = () => {
  // const { data: session, isPending, error } = authClient.useSession();

  return (
    <Avatar
      className="h-10 w-10 transition-all duration-300 ease-out 
                         ring-2 ring-transparent group-hover:ring-amber-600 
                         group-hover:scale-105 
                         shadow-md group-hover:shadow-xl 
                         backdrop-blur-xl"
    >
      <Avatar.Image
        alt="User"
        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
        className="object-cover"
      />

      <Avatar.Fallback className="bg-amber-600 text-white font-semibold">
        U
      </Avatar.Fallback>
    </Avatar>
  );
};

export default UserAvartar;
