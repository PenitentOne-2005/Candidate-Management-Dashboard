import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Candidate } from "./entities/Candidate";
import { Skill } from "./entities/Skill";
import { StatusType } from "./types";

async function seed() {
  await AppDataSource.query('TRUNCATE TABLE "candidate_skill" CASCADE;');
  await AppDataSource.query('TRUNCATE TABLE "candidate" CASCADE;');
  await AppDataSource.query('TRUNCATE TABLE "skill" CASCADE;');

  const skillRepo = AppDataSource.getRepository(Skill);
  const candidateRepo = AppDataSource.getRepository(Candidate);

  const skillNames = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "CSS",
    "Docker",
  ];
  const skillsMap = new Map<string, Skill>();
  for (const name of skillNames) {
    const skill = skillRepo.create({ name });
    await skillRepo.save(skill);
    skillsMap.set(name, skill);
  }

  const candidatesData: Array<{
    name: string;
    position: string;
    email: string;
    phone: string;
    status: StatusType;
    description: string;
    skills: string[];
  }> = [
    {
      name: "John Doe",
      position: "Frontend Developer",
      email: "john@example.com",
      phone: "+123456789",
      status: "active",
      description: "Frontend developer with strong React skills",
      skills: ["React", "TypeScript", "CSS"],
    },
    {
      name: "Anna Smith",
      position: "Fullstack Developer",
      email: "anna@example.com",
      phone: "+987654321",
      status: "interview",
      description: "Fullstack developer",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
    {
      name: "Michael Brown",
      position: "Backend Developer",
      email: "michael@example.com",
      phone: "+111222333",
      status: "rejected",
      description: "Backend developer",
      skills: ["Node.js", "PostgreSQL", "Docker"],
    },
    {
      name: "Emily Davis",
      position: "Junior Frontend Developer",
      email: "emily@example.com",
      phone: "+444555666",
      status: "active",
      description: "Junior frontend developer",
      skills: ["React", "CSS"],
    },
    {
      name: "Alex Johnson",
      position: "Fullstack Engineer",
      email: "alex@example.com",
      phone: "+777888999",
      status: "interview",
      description: "Fullstack engineer",
      skills: ["React", "Node.js", "TypeScript"],
    },
  ];

  for (const data of candidatesData) {
    const candidate = candidateRepo.create({
      ...data,
      skills: data.skills.map((s) => skillsMap.get(s)!),
    });
    await candidateRepo.save(candidate);
  }

  console.log("Seed completed successfully");
}

export default seed;