import { prisma } from "@/lib/prisma";

export async function GET() {
  const members =
    await prisma.teamMember.findMany();

  return Response.json(members);
}

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  const member =
    await prisma.teamMember.create({
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