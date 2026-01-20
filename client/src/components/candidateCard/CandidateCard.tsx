import { memo } from "react";
import type { Props } from "./interface";
import { StatusBadge } from "@/components";

const CandidateCard = memo(({ candidate, onViewDetails }: Props) => {
  const initials = candidate.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
          {initials}
        </div>
        <div>
          <h2 className="font-semibold">{candidate.name}</h2>
          <p className="text-sm text-gray-500">{candidate.position}</p>
        </div>
      </div>
      <StatusBadge status={candidate.status} />
      <button
        className="mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
        onClick={() => onViewDetails(candidate)}
      >
        View details
      </button>
    </div>
  );
});

export default CandidateCard;
