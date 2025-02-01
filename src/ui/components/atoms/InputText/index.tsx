export type InputTextProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  onChange
}) => {
  return (
    <input
      className="border border-gray-200 rounded-md py-2 px-4 font-light tracking-wide focus:outline-[#4E80EE]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
