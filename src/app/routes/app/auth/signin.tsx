/** @format */

import { useNavigate, useSearchParams } from "react-router";

import { AuthLayout } from "@/components/layout/auth-layout";
import { paths } from "@/config/path";
import { SignIn } from "@/pages/auth/SignIn";

const SignInRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  return (
    <AuthLayout title="Log in to your account">
      <SignIn onSuccess={() => {}} />
    </AuthLayout>
  );
};

export default SignInRoute;
