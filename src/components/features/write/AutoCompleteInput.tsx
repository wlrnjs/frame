import React from "react";

interface AutoCompleteInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSelect: (tag: string) => void;
}

const AutoCompleteInput = ({
  label,
  value,
  onChange,
  suggestions,
  onSelect,
}: AutoCompleteInputProps) => (
  <label className="flex flex-col gap-2 relative">
    <span className="text-xs font-medium text-white">{label}</span>
    <div className="flex gap-2 items-center">
      <p className="h-[22px] px-2 py-1 rounded-[5px] bg-gray-870 text-xs text-white">
        {value}
      </p>
    </div>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="#태그 입력"
      className="w-full h-12 rounded-md px-4 bg-gray-920 text-sm text-white border border-gray-870 focus:outline-none transition-colors placeholder:text-sm placeholder:text-white/50"
    />
    {suggestions.length > 0 && (
      <ul className="absolute top-[6rem] left-0 w-full bg-gray-920 rounded-md shadow-lg mt-2 z-10 border border-gray-870">
        {suggestions.map((tag) => (
          <li
            key={tag}
            className="px-4 py-2 text-sm text-white hover:bg-gray-850 pointer transition-colors"
            onClick={() => onSelect(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    )}
  </label>
);

export default AutoCompleteInput;
