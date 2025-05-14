import Image from "next/image";

const fileInputClass =
  "text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-neutral-700 file:text-white hover:file:bg-neutral-600";

interface ProfileImageInputProps {
  label: string;
  imageUrl: string;
  onChange: (file: File) => void;
}

const ProfileImageInput = ({
  label,
  imageUrl,
  onChange,
}: ProfileImageInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <div className="flex items-center gap-3">
        <Image
          src={imageUrl}
          alt="Profile"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onChange(file);
          }}
          className={fileInputClass}
        />
      </div>
    </div>
  );
};

export default ProfileImageInput;
