import { LoadingOverlay, LoadingError, Sandbox, ExportImageDialog } from './components';

export default function ProjectPage() {
  return (
    <>
      <LoadingError />
      <LoadingOverlay />
      <Sandbox />
      <ExportImageDialog />
    </>
  );
}
