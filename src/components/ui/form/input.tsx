/** @format */

import * as React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

import { cn } from "@/utils/cn";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";
import { Link } from "@/components/ui/link";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, showLink, type, label, error, registration, ...props },
    ref
  ) => {
    return (
      <FieldWrapper showLink={showLink} label={label} error={error}>
        <input
          type={type}
          className={cn(
            "placeholder:text-gray  placeholder:font-[400] flex mt-2 h-[50px] font-[500] bg-white w-full rounded-md  text-[14px]  border-none px-4 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50",

            className
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    );
  }
);
Input.displayName = "Input";
