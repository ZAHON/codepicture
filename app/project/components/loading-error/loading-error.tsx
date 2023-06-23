'use client';
import { useProjectPageStore, selectHighlighterError, selectSetHighlighter } from '@project/store';
import {
  Button,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from '@/components';

export function LoadingError() {
  const highlighterError = useProjectPageStore(selectHighlighterError);
  const setHighlighterError = useProjectPageStore(selectSetHighlighter);

  function handleTryAgain() {
    setHighlighterError();
  }

  if (!highlighterError) {
    return null;
  }

  return (
    <AlertDialog open={highlighterError}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent onEscapeKeyDown={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle>Something went wrong!</AlertDialogTitle>
            <AlertDialogDescription>
              The application could not be loaded, please refresh the page or click the button
              below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction>
            <Button onClick={handleTryAgain}>Try again</Button>
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
