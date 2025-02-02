import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeAction: () => void;
  title: string;
  main: ReactNode;
  footer: ReactNode;
};