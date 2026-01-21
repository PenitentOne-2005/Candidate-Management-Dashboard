import { AppDataSource } from "./data-source";
import { Candidate } from "./entities";
import seed from "./seed";

export const seedIfNeeded = async () => {
  const repo = AppDataSource.getRepository(Candidate);
  const count = await repo.count();

  if (count > 0) {
    console.log("Seed skipped (data already exists)");
    return;
  }

  console.log("Running seed...");
  await seed();
};
