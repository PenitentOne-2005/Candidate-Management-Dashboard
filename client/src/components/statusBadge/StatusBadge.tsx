import type { StatusType } from "@/types";
import type { Props } from "./interface";

const StatusBadge = ({ status }: Props) => {
  const colors: Record<StatusType, string> = {
    active: "bg-green-200 text-green-800",
    interview: "bg-yellow-200 text-yellow-800",
    rejected: "bg-red-200 text-red-800",
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
