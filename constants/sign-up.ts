import { SignUpTextProps } from "@/types";

export default {
  mobile: {
    title: "Sign-up with your mobile number",
    detail:
      "Please make sure to use your real mobile number as we will send the verification code to your number to verify your account via SMS",
  },
  mobileOTP: {
    title: "Verification code",
    detail: "we send your verification code to ",
  },
  email: {
    title: "email",
    detail: "email ",
  },
  emailOTP: {
    title: "Verification code email otp",
    detail: "we send your verification code to email otp",
  },
} as {
  mobile: SignUpTextProps;
  mobileOTP: SignUpTextProps;
  email: SignUpTextProps;
  emailOTP: SignUpTextProps;
};
