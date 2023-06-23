'use client';
import type { InitStoreProps } from './init-store.types';
import { useProjectsPageStore } from '@projects/store';

export function InitStore(props: InitStoreProps) {
  const { projectsCount } = props;

  useProjectsPageStore.setState({ projectsCount });

  return null;
}
