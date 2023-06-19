'use server';
import { redirect } from 'next/navigation';
import prisma from '@/lib-server/prisma';

export async function createProject(ownerId: string) {
  const project = await prisma.project.create({ data: { ownerId } });

  redirect(`/project/${project.id}`);
}
