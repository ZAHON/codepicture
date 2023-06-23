'use server';
import { GetProjectsArgs } from './get-projects.types';
import prisma from '@/lib-server/prisma';

export async function getProjects(args: GetProjectsArgs) {
  const { ownerId, projectName } = args;

  const ownerProjects = await prisma.project.findMany({
    where: { ownerId, name: { contains: projectName, mode: 'insensitive' } },
    select: { id: true, name: true, createdAt: true, updatedAt: true, editorLanguage: true },
    orderBy: { updatedAt: 'desc' },
  });

  return ownerProjects;
}
