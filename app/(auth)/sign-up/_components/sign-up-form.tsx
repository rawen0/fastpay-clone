"use client";
import { useSearchParams } from "next/navigation";
import { text } from "@/constants/sign-up";
import MobileForm from "./moblie-form";
import EmailForm from "./email-form";
import FormDetail from "./form-detail";
import Otp from "./otp";

type Props = {};

const SignUpForm = (props: Props) => {
  const searchParams = useSearchParams();
  // getting current step of the registry process from url for testing
  //TODO: change to context
  const cstep = !searchParams.get("step")
    ? 1
    : Number(searchParams.get("step"));

  switch (cstep) {
    case 1:
      return (
        <>
          <FormDetail text={text.mobile} />
          <MobileForm />
        </>
      );
    case 2:
      return (
        <>
          <FormDetail text={text.mobileOTP} />
          <Otp action={() => {}} />
        </>
      );
    case 3:
      return (
        <>
          <FormDetail text={text.email} />
          <EmailForm />
        </>
      );
    case 4:
      return (
        <>
          <FormDetail text={text.emailOTP} />
          <Otp action={() => {}} />
        </>
      );
  }
};

export default SignUpForm;