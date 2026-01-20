import { Request, Response, NextFunction } from "express";
import CandidateService from "../services/CandidateService";

const service = new CandidateService();

export const getCandidates = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const candidates = await service.getAll();
    res.json(candidates);
  } catch (err) {
    next(err);
  }
};

export const getCandidateById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const candidate = await service.getById(Number(req.params.id));
    res.json(candidate);
  } catch (err) {
    next(err);
  }
};

export const updateCandidateStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updated = await service.updateStatus(
      Number(req.params.id),
      req.body.status,
    );

    res.json(updated);
  } catch (err) {
    next(err);
  }
};
