import type { StatusType } from "@/types";

export interface Props {
  statusFilter: StatusType | "all";
  setStatusFilter: (s: StatusType | "all") => void;
  search: string;
  setSearch: (s: string) => void;
}
