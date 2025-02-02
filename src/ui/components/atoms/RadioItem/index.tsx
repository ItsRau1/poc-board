import Image from "next/image";
import { useMemo } from "react";
import { RadioItemProps, RadioItemStyleType, RadioItemType } from "./types";

const radioItemStyle: { [key: string]: RadioItemStyleType } = {
  icon: {
    label:
      "cursor-pointer rounded-lg group p-3 bg-[#E3E8EF] w-fit has-[:checked]:bg-[#F5D565]",
    afterIcon: "hidden"
  },
  detail: {
    label:
      "cursor-pointer rounded-lg group p-[2px] pr-2 w-[49%] flex items-center justify-between outline outline-2 outline-[#E3E8EF] has-[:checked]:outline-[#4E80EE]",
    afterIcon:
      "flex justify-center items-center p-1 rounded-full bg-transparent group-has-[:checked]:bg-[#4E80EE]"
  }
};

export const RadioItem: React.FC<RadioItemProps> = ({
  icon,
  id,
  name,
  onChange,
  type,
  title,
  checked
}) => {
  const content = useMemo(() => {
    if (type == RadioItemType.detail) {
      return (
        <div className="flex items-center gap-4">
          {icon}
          <p>{title}</p>
        </div>
      );
    }
    return icon;
  }, [type, icon, title]);
  const style = useMemo(() => radioItemStyle[type], [type]);
  return (
    <label htmlFor={id} className={style.label}>
      <input
        type="radio"
        name={name}
        id={id}
        className="hidden"
        onChange={onChange}
        checked={checked}
      />
      {content}
      <div className={style.afterIcon}>
        <Image src="./icons/check.svg" alt="" width={12} height={12} />
      </div>
    </label>
  );
};
