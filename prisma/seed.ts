import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Aryan",
      email: "aryan@example.com",
      password: "demo123",
      role: "ADMIN",
    },
  });

  await prisma.project.create({
    data: {
      name: "SprintX Platform",
      description: "Software PM Dashboard",
      budget: 50000,
      ownerId: user.id,
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });