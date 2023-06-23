'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function createProject(ownerId: string) {
  await prisma.$transaction(async () => {
    const currentProjectsCount = await prisma.project.count({
      where: { ownerId },
    });

    if (currentProjectsCount >= 50) {
      throw new Error(`User ${ownerId} has reached projects limit`);
    }

    await prisma.project.create({ data: { ownerId } });
  });

  revalidatePath('/projects');
}
