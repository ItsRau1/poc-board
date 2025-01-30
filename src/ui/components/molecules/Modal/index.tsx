export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  if (!open) return null;
  return (
    <div className="absolute right-0 top-0 h-screen bg-blue-500 flex items-center justify-center">
      <div onClick={() => setOpen(!open)}>Fechar</div>
    </div>
  );
};
