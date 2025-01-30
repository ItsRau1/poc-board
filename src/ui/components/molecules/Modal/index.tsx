import { ReactNode } from "react";
import { Overlay } from "../../atoms/Overlay";

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
      <div className="absolute top-6 right-6 h-[93vh] w-1/2 bg-white flex flex-col px-6 py-3 z-50 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <p>{title}</p>
          <div onClick={handleClose}>Fechar</div>
        </div>
        {main}
        {footer}
      </div>
    </>
  );
};
