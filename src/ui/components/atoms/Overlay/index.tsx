import { OverlayProps } from "./types";

export const Overlay: React.FC<OverlayProps> = ({ closeAction }) => {
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 z-0"
      onClick={closeAction}
    ></div>
  );
};
