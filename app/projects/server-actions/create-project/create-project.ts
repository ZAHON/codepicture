'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function createProject(ownerId: string) {
  await prisma.project.create({ data: { ownerId } });

  revalidatePath('/projects');
}
