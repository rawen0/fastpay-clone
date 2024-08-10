import { SignUpTextProps } from "@/types";

type Props = {
  text: SignUpTextProps;
};

const FormDetail = ({ text }: Props) => {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-semibold text-[var(--dark-primary-text)] opacity-90">
        {text.title}
      </h3>
      <h5 className="text-[var(--dark-primary-text)] text-sm leading-3 opacity-50">
        {text.detail}
      </h5>
    </div>
  );
};

export default FormDetail;
