import { prisma } from "@/lib/prisma";

export async function GET() {
  const risks = await prisma.risk.findMany({
    include: {
      project: true,
    },
  });

  return Response.json(risks);
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  const risk =
    await prisma.risk.create({
      data: {
        title: body.title,
        severity:
          body.severity,
        mitigation:
          body.mitigation,
        projectId:
          body.projectId,
      },
    });

  return Response.json(risk);
}