import type { Candidate, StatusType } from "@/types";

export interface Props {
  candidate: Candidate;
  isOpen: boolean;
  onClose: () => void;
  onChangeStatus: (id: number, status: StatusType) => void;
}
