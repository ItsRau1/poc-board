import { useMemo } from "react";
import { Props } from "./types";

export const Title: React.FC<Props> = ({ size, value }) => {
  const style = useMemo(() => {
    if (size === "big") return "text-2xl font-semibold";
    if (size === "medium") return "text-base font-semibold";
    if (size === "small") return "text-sm font-semibold";
    if (size === "sub-title") return "text-xsm font-semibold"; // TODO - Não vai o tamanho personalizado
  }, [size]);
  return <p className={style}>{value}</p>;
};
