export type StatusType = "active" | "interview" | "rejected";

export interface Skill {
  id: number;
  name: string;
}

export interface Candidate {
  id: number;
  name: string;
  position: string;
  status: StatusType;
  email: string;
  phone: string;
  description: string;
  skills: Skill[];
}
