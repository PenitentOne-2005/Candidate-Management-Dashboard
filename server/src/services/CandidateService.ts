import { AppDataSource } from "../data-source";
import { StatusType } from "../types";
import HttpError from "../errors/HttpError";
import { Candidate } from "../entities";

class CandidateService {
  private repo = AppDataSource.getRepository(Candidate);

  async getAll() {
    return this.repo.find({ relations: ["skills"] });
  }

  async getById(id: number) {
    const candidate = await this.repo.findOne({
      where: { id },
      relations: ["skills"],
    });

    if (!candidate) {
      throw new HttpError(404, "Candidate not found");
    }

    return candidate;
  }

  async updateStatus(id: number, status: StatusType) {
    const candidate = await this.repo.findOne({ where: { id } });

    if (!candidate) throw new HttpError(404, "Candidate not found");

    candidate.status = status;
    return this.repo.save(candidate);
  }
}

export default CandidateService;
