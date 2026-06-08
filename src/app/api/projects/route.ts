import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(projects);
  } catch (error) {
    console.error("GET Projects Error:", error);

    return Response.json(
      {
        error: "Failed to fetch projects",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const project =
      await prisma.project.create({
        data: {
          name: body.name,
          description:
            body.description,
          budget:
            Number(body.budget) || 0,
          ownerId:
            body.ownerId,
        },

        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
            },
          },
        },
      });

    return Response.json(
      project,
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "CREATE Project Error:",
      error
    );

    return Response.json(
      {
        error:
          "Failed to create project",
      },
      {
        status: 500,
      }
    );
  }
}