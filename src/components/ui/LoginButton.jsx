import { Button } from "@heroui/react";

const LoginButton = () => {
  return (
    <Button
      variant="primary"
      fullWidth
      type="submit"
      className=" bg-amber-600 hover:bg-amber-700 transition-all"
    >
      Sign in
    </Button>
  );
};

export default LoginButton;
