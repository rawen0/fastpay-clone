import Logo from "@/components/logo";
import SignUpForm from "./_components/sign-up-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <section className="w-full max-sm:px-4 h-full flex justify-center items-center flex-col">
      <div className="max-w-sm mt-4 lg:mt-16 space-y-4">
        <Button
          variant="ghost"
          className="self-start -ml-2 px-0 hover:bg-transparent"
        >
          <ChevronLeft />
          Go back
        </Button>
        <Logo className="w-28 mr-auto ml-0" />
        <SignUpForm />
        
      </div>
    </section>
  );
};

export default SignUp;
