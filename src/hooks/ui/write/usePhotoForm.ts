import { postPostsProps } from "@/service/write/postWrite";
import { useState } from "react";
import { TAGS } from "@/constants/TAGS";

const usePhotoForm = (userId: string | null) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formData, setFormData] = useState<postPostsProps>({
    title: "",
    description: "",
    category: "",
    location: "",
    camera_info: "",
    user_id: userId || "",
  });

  const handleAutoCompleteChange = (value: string) => {
    setInput(value);
    setSuggestions(
      value.trim() === ""
        ? []
        : TAGS.filter((tag) => tag.includes(value))
    );
  };

  const handleFormChange = (field: keyof postPostsProps) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  return {
    input,
    suggestions,
    formData,
    selectedTags,
    handleAutoCompleteChange,
    handleFormChange,
    setSelectedTags,
  };
};

export default usePhotoForm;