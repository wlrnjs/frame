import { cn } from "@/utils";
import React from "react";

const styles = {
  inputBaseClass:
    "w-full bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
  inputDisabledClass:
    "w-full bg-neutral-600 rounded px-3 py-2 text-gray-400 cursor-not-allowed",
  fileInputClass:
    "text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-neutral-700 file:text-white hover:file:bg-neutral-600",
  sectionLabelClass: "block text-sm mb-1",
};

type StringOrArray = string | string[];
type OnChangeHandler = ((value: string) => void) | ((value: string[]) => void);

interface EditInputProps {
  label: string;
  value: StringOrArray;
  value2?: string;
  isDisabled?: boolean;
  placeholder?: string;
  placeholder2?: string;
  isCamera?: boolean;
  onChange?: OnChangeHandler;
  onChange2?: (value: string) => void;
}

const EditInput = ({
  label,
  value,
  value2,
  isDisabled,
  placeholder,
  placeholder2,
  isCamera,
  onChange,
  onChange2,
}: EditInputProps) => {
  return (
    <div className={cn(isCamera && "space-y-2", "mb-4")}>
      <label htmlFor={label} className={styles.sectionLabelClass}>
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        disabled={isDisabled}
        placeholder={placeholder}
        className={
          isDisabled ? styles.inputDisabledClass : styles.inputBaseClass
        }
        onChange={(e) => {
          if (!onChange) return;
          // 임시 (변경 필요)
          const newValue = e.target.value;

          // Type guard to check if the handler expects a string[]
          if (Array.isArray(value)) {
            if (typeof onChange === "function") {
              // Create a new array with the updated value
              const updatedArray = [...value];
              updatedArray[0] = newValue;
              (onChange as (value: string[]) => void)(updatedArray);
            }
          } else {
            // Handle string case
            if (typeof onChange === "function") {
              (onChange as (value: string) => void)(newValue);
            }
          }
        }}
      />
      {isCamera && (
        <input
          type="text"
          value={value2}
          placeholder={placeholder2}
          className={styles.inputBaseClass}
          onChange={(e) => onChange2?.(e.target.value)}
        />
      )}
    </div>
  );
};

export default EditInput;
