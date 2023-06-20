'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function delateProject(projectId: string) {
  await prisma.project.delete({ where: { id: projectId } });

  revalidatePath(`/projects`);
}
