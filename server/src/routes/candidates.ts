import { Router } from "express";
import {
  getCandidates,
  getCandidateById,
  updateCandidateStatus,
} from "../controllers/candidateController";
import { validateDto } from "../middleware/validateDto";
import { UpdateCandidateStatusDto } from "../dto/update-candidate-status.dto";

const router = Router();

router.get("/", getCandidates);
router.get("/:id", getCandidateById);
router.patch(
  "/:id/status",
  validateDto(UpdateCandidateStatusDto),
  updateCandidateStatus,
);

export default router;
