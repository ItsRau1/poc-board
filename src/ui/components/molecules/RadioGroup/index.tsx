import { RadioItem } from "../../atoms/RadioItem";
import { Label } from "../../atoms/Label";
import { RadioGroupProps } from "./types";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  name,
  value,
  onChange,
  type,
  label
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Label value={label} />
      <div className="flex gap-2 flex-wrap">
        {items.map(({ icon, id, title }) => (
          <RadioItem
            icon={icon}
            id={id}
            name={name}
            onChange={onChange}
            type={type}
            key={id}
            title={title}
            checked={value === id}
          />
        ))}
      </div>
    </div>
  );
};
