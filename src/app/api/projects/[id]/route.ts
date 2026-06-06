import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const { id } = await params;

  const project = await prisma.project.update({
    where: {
      id,
    },
    data: {
      name: body.name,
      description: body.description,
      budget: body.budget,
    },
  });

  return Response.json(project);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.project.delete({
    where: {
      id,
    },
  });

  return Response.json({
    message: "Project deleted",
  });
}