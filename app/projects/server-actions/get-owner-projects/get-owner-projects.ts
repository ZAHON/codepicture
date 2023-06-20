'use server';
import prisma from '@/lib-server/prisma';

export async function getOwnerProjects(ownerId: string) {
  const ownerProjects = await prisma.project.findMany({
    where: { ownerId },
    select: { id: true, name: true, createdAt: true, updatedAt: true, editorLanguage: true },
    orderBy: { updatedAt: 'desc' },
  });

  return ownerProjects;
}
