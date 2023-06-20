'use server';
import { prismaExclude } from 'prisma-exclude';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function cloneProject(projectId: string) {
  const exclude = prismaExclude(prisma);

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: exclude('project', ['id', 'createdAt', 'updatedAt']),
  });

  if (!project) {
    throw Error(`Project with id: ${projectId} does not exist`);
  }

  const newProjectName = `${project.name} (copy)`;

  await prisma.project.create({
    data: { ...project, name: newProjectName },
  });

  revalidatePath(`/projects`);
}
