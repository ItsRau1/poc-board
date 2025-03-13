import { Button } from "@/ui/components/atoms/Button";
import Image from "next/image";

export const ModalFooter: React.FC = () => {
  return (
    <footer className="flex items-center justify-end gap-4">
      <Button onClick={() => {}} type="default">
        <div className="flex items-center gap-2 text-sm">
          Delete
          <Image src="./icons/trash.svg" alt="" width={18} height={24} />
        </div>
      </Button>
      <Button onClick={() => {}} type="default">
        <div className="flex items-center gap-2 text-sm">
          Save
          <Image src="./icons/check.svg" alt="" width={18} height={24} />
        </div>
      </Button>
    </footer>
  );
};
