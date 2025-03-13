import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  const buttonType: Record<ButtonProps["type"], string> = {
    default: "rounded-full py-1.5 px-6 bg-[#4E80EE] text-white",
    close: "rounded-md p-2 border border-gray-200"
  };

  return (
    <button onClick={onClick} className={buttonType[type]}>
      {children}
    </button>
  );
};
