'use server';
import { prismaExclude } from 'prisma-exclude';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function cloneProject(projectId: string) {
  await prisma.$transaction(async () => {
    const exclude = prismaExclude(prisma);

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: exclude('project', ['id', 'createdAt', 'updatedAt']),
    });

    if (!project) {
      throw Error(`Project with id: ${projectId} does not exist`);
    }

    const currentProjectsCount = await prisma.project.count({
      where: { ownerId: project.ownerId },
    });

    if (currentProjectsCount >= 50) {
      throw new Error(`User ${project.ownerId} has reached projects limit`);
    }

    const newProjectName = `${project.name} (copy)`;

    await prisma.project.create({
      data: { ...project, name: newProjectName },
    });
  });

  revalidatePath(`/projects`);
}
