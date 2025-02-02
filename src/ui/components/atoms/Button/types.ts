export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  type: "close" | "default";
};
