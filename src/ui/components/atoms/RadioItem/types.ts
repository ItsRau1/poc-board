import { ReactNode } from "react";

export type RadioItemProps = {
  name: string;
  id: string;
  icon: ReactNode;
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: RadioItemType;
  checked: boolean;
};

export enum RadioItemType {
  "icon" = "icon",
  "detail" = "detail"
}

export type RadioItemStyleType = {
  label: string;
  afterIcon: string;
};