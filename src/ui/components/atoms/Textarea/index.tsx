import { TextareaProps } from "./types";

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange
}) => {
  return (
    <textarea
      className="border border-gray-200 rounded-md p-2 resize-none py-2 px-4 font-light tracking-wide focus:outline-[#4E80EE]"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
