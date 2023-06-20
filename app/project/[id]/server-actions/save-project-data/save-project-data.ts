'use server';
import type { SaveProjectDataArgs } from './save-project-data.types';
import prisma from '@/lib-server/prisma';

export async function saveProjectData(args: SaveProjectDataArgs) {
  const { projectId, projectName, ...others } = args;

  await prisma.project.update({ where: { id: projectId }, data: { name: projectName, ...others } });
}
