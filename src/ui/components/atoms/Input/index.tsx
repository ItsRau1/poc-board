import { InputText } from "../InputText";
import { Label } from "../Label";
import { Textarea } from "../Textarea";
import { InputProps } from "./types";

const Inputs: { [key: string]: any } = {
  text: InputText,
  textarea: Textarea
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type
}) => {
  const InputComponent = Inputs[type || "text"];

  return (
    <div className="flex flex-col gap-1">
      <Label value={label} />
      <InputComponent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
