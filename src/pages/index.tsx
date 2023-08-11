import { LoginForm } from "~/components/Authentication/LoginForm";
import { AppLayout } from "~/components/layouts";

export default function Home() {
  return (
    <>
      <LoginForm />
    </>
  );
}

Home.Layout = AppLayout;
Home.pageTitle = "Home Page";
