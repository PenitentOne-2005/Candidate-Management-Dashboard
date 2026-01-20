import type { Candidate } from "@/types";

export interface Props {
  candidate: Candidate;
  onViewDetails: (candidate: Candidate) => void;
}
