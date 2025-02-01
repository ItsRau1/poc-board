export type LabelProps = {
  value: string;
};

export const Label: React.FC<LabelProps> = ({ value }) => {
  return <label className="text-xs text-gray-400">{value}</label>;
};
