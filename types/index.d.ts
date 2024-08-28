import { IconType } from "lucide-react";
export interface LinkProps {
  href: string;
  label: string;
  Icon: IconType;
}

interface SignUpTextProps {
  title: string;
  detail: string;
}

interface InputProps {
  name:
    | "firstName"
    | "lastName"
    | "email"
    | "password"
    | "passwordConfirmation";
  label: string;
  type: string;
  Icon: IconType;
}
