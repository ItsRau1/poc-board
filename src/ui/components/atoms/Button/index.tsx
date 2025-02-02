import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  const buttonType: Record<ButtonProps["type"], string> = {
    default: "",
    close: "rounded-md p-2 border border-gray-200"
  };

  return (
    <button onClick={onClick} className={buttonType[type]}>
      {children}
    </button>
  );
};
