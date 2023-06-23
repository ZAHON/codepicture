'use server';
import { GetOwnerProjectsArgs } from './get-owner-projects.types';
import prisma from '@/lib-server/prisma';

export async function getOwnerProjects(args: GetOwnerProjectsArgs) {
  const { ownerId, projectName } = args;

  const ownerProjects = await prisma.project.findMany({
    where: { ownerId, name: { contains: projectName, mode: 'insensitive' } },
    select: { id: true, name: true, createdAt: true, updatedAt: true, editorLanguage: true },
    orderBy: { updatedAt: 'desc' },
  });

  return ownerProjects;
}
