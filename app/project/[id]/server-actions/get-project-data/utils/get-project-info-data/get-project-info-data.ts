import type { GetProjectInfoDataArgs } from './get-project-info-data.types';

export function getProjectInfoData(args: GetProjectInfoDataArgs) {
  const { id, name } = args;

  const projectId = id;
  const projectName = name;

  if (typeof projectId !== 'string' || typeof projectName !== 'string') {
    throw Error('Invalid project info data');
  }

  return {
    projectId,
    projectName,
  };
}
