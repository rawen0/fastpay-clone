"use client";
import { text } from "@/constants/sign-up";
import MobileForm from "./moblie-form";
import Otp from "./otp";
import FormDetail from "./form-detail";
import EmailForm from "./email-form";

const SignUpForm = () => {
  let step = 1;

  switch (step) {
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
