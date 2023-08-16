import { LoginForm } from "~/components/Authentication/LoginForm";
import SelectForm from "~/components/SelectForm/SelectForm";
import Stepper from "~/components/Stepper/components/Stepper";
import { AppLayout } from "~/components/layouts";

const steps = [
  {
    label: "Step 1",
    description: "Create an account",
    content: "Step 1 content: Create an account",
  },
  {
    label: "Step 2",
    description: "Verify email",
    content: "Step 2 content: Verify email",
  },
  {
    label: "Step 3",
    description: "Get full access",
    content: "Step 3 content: Get full access",
  },
];

export default function Home() {
  return (
    <>
      <SelectForm defaultSize="2" defaultUnit="TB" />
      {/* <LoginForm /> */}
      {/* <Stepper steps={steps} /> */}
    </>
  );
}

Home.Layout = AppLayout;
Home.pageTitle = "Home Page";
