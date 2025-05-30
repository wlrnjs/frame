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
  <>
    <h2 className="text-base font-semibold text-white">{title}</h2>
    <div className={cn("flex flex-col gap-4", showDivider && "flex-row")}>
      {children}
    </div>
  </>
);

export default FormSection;
