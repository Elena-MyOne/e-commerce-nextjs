"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn btn-primary rounded-full hover:btn-secondary ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner loading-sm"></span>}
      {children}
    </button>
  );
};

export default FormSubmitButton;
