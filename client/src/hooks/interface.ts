import type { Candidate, StatusType } from "@/types";

export type UpdateStatusVars = {
  id: number;
  status: StatusType;
};

export type CandidatesContext = {
  previous?: Candidate[];
};
