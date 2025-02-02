import { ReactNode } from "react";
import { RadioItemType } from "../../atoms/RadioItem";

export type RadioGroupProps = {
  type: RadioItemType;
  items: RadioItemProps[];
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RadioItemProps = {
  id: string;
  icon: ReactNode;
  title?: string;
};
