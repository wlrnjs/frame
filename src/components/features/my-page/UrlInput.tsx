interface UrlInputProps {
  value: {
    name: string;
    url: string;
  };
  index: number;
  onChange: (index: number, field: "name" | "url", value: string) => void;
}

const UrlInput = ({ value, index, onChange }: UrlInputProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={value.name}
        placeholder="이름 (예: Instagram)"
        className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(index, "name", e.target.value)}
      />
      <input
        type="url"
        value={value.url}
        placeholder="URL"
        className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange(index, "url", e.target.value)}
      />
    </div>
  );
};

export default UrlInput;
