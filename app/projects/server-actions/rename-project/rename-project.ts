'use server';
import type { RenameProjectArgs } from './rename-project.types';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function renameProject(args: RenameProjectArgs) {
  const { projectId, projectName } = args;

  await prisma.project.update({ where: { id: projectId }, data: { name: projectName } });

  revalidatePath(`/projects`);
}
