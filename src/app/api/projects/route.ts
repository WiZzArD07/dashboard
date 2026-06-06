import { prisma } from "@/lib/prisma";

export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      owner: true,
    },
  });

  return Response.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();

  const project = await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      budget: body.budget,
      ownerId: body.ownerId,
    },
  });

  return Response.json(project);
}