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

  const risk =
    await prisma.risk.update({
      where: { id },

      data: {
        title: body.title,
        severity:
          body.severity,
        mitigation:
          body.mitigation,
      },
    });

  return Response.json(risk);
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

  await prisma.risk.delete({
    where: { id },
  });

  return Response.json({
    success: true,
  });
}