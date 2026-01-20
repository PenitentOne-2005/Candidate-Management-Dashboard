import axios from "axios";
import type { Candidate, StatusType } from "@/types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCandidates = async (): Promise<Candidate[]> => {
  const res = await api.get("/candidates");
  return res.data;
};

export const updateCandidateStatus = async (
  id: number,
  status: StatusType,
): Promise<Candidate> => {
  const res = await api.patch(`/candidates/${id}/status`, { status });
  return res.data;
};
