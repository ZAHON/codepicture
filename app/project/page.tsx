import { LoadingOverlay, LoadingError, Sandbox } from './components';

export default function ProjectPage() {
  return (
    <>
      <LoadingError />
      <LoadingOverlay />
      <Sandbox />
    </>
  );
}
