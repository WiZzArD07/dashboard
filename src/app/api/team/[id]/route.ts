import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const body =
    await request.json();

  const { id } =
    await params;

  const member =
    await prisma.teamMember.update({
      where: { id },

      data: {
        name: body.name,
        email: body.email,
        role: body.role,
        utilization:
          body.utilization,
      },
    });

  return Response.json(member);
}

export async function DELETE(
  request: Request,
  { params }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } =
    await params;

  await prisma.teamMember.delete({
    where: { id },
  });

  return Response.json({
    success: true,
  });
}