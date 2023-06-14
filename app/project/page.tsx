import {
  LoadingOverlay,
  LoadingError,
  Sandbox,
  ExportImageDialog,
  KeyboardShortcuts,
} from './components';

export default function ProjectPage() {
  return (
    <>
      <LoadingError />
      <LoadingOverlay />
      <Sandbox />
      <ExportImageDialog />
      <KeyboardShortcuts />
    </>
  );
}
