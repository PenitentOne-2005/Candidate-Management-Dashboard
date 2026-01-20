import type { StatusType } from "@/types";
import type { Props } from "./interface";

const FilterBar = ({
  statusFilter,
  setStatusFilter,
  search,
  setSearch,
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4 items-center">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as StatusType | "all")}
        className="border rounded px-2 py-1 cursor-pointer"
      >
        <option value="all">All statuses</option>
        <option value="active">Active</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
      </select>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-2 py-1 flex-1"
      />
    </div>
  );
};

export default FilterBar;
