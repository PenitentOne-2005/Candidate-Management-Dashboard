import { IsIn } from "class-validator";
import { StatusType } from "../types";

const STATUS_VALUES = ["active", "interview", "rejected"] as const;

export class UpdateCandidateStatusDto {
  @IsIn(STATUS_VALUES)
  status!: StatusType;
}
