import { cn } from "@/utils";
import React from "react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}

const FormSection = ({
  title,
  children,
  showDivider = false,
}: FormSectionProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      showDivider && "border-t border-gray-870 pt-6"
    )}
  >
    <h2 className="text-base font-semibold text-white">{title}</h2>
    {children}
  </div>
);

export default FormSection;
