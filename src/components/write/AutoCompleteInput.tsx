import React from "react";

interface AutoCompleteInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSelect: (tag: string) => void;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  label,
  value,
  onChange,
  suggestions,
  onSelect,
}) => (
  <label className="flex flex-col gap-1 relative">
    <span className="text-xs font-medium text-white">{label}</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="#태그 입력"
      className="w-full h-12 rounded-md px-4 bg-gray-920 text-sm text-white border border-gray-870 focus:border-white focus:ring-2 focus:ring-white/20 transition-colors placeholder:text-sm placeholder:text-white/50"
    />
    {suggestions.length > 0 && (
      <ul className="absolute top-[4rem] left-0 w-full bg-gray-920 rounded-md shadow-lg mt-2 z-10 border border-gray-870">
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
