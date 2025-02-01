import { ReactNode } from "react";
import { Overlay } from "../../atoms/Overlay";
import { Button } from "../../atoms/Button";
import Image from "next/image";

export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeAction: () => void;
  title: string;
  main: ReactNode;
  footer: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  closeAction,
  title,
  main,
  footer
}) => {
  if (!open) return null;
  const handleClose = () => {
    setOpen(false);
    closeAction();
  };
  return (
    <>
      <Overlay closeAction={handleClose} />
      <div className="absolute top-6 right-6 h-[93vh] w-1/2 bg-white flex flex-col px-6 py-3 z-50 rounded-lg gap-2">
        <div className="flex items-center justify-between w-full">
          <p>{title}</p>
          <Button type="close" onClick={handleClose}>
            <div className="flex items-center justify-center rounded-full p-[2px] bg-[#F9E8CE]">
              <Image src="/icons/x.svg" alt="close" width={10} height={10} />
            </div>
          </Button>
        </div>
        {main}
        {footer}
      </div>
    </>
  );
};
