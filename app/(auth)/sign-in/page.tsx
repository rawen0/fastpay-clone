import AppLanguages from "@/components/app-languages";
import Logo from "@/components/logo";
import SignInForm from "./_components/sign-in-form";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <section className="h-screen flex justify-evenly items-center flex-col">
      <div className="self-end mr-4">
        <AppLanguages isDropDown />
      </div>

      <div className="max-w-sm flex flex-col justify-center items-center  space-y-8">
        <Logo className="w-36 mx-auto" />
        <div className="text-center">
          <h3 className="text-3xl capitalize font-semibold text-[var(--dark-primary-text)]">
            welcome back!
          </h3>
          <h5 className="text-[var(--dark-primary-text)] font-light opacity-90">
            sign-in to continue
          </h5>
        </div>
        <SignInForm />
      </div>
      <div>Don't have account?Register now</div>
    </section>
  );
};

export default SignIn;
