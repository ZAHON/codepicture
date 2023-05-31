import { Button } from '@/components';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '.';

const meta = {
  title: 'UI/AlertDialog',
};

export default meta;

export const Default = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <Button color="error" variant="light">
          Delete account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Button color="neutral" variant="light">
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button color="error" variant="light">
                Yes, delete account
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  ),
};

export const OverlayWithBlur = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger>
        <Button color="error" variant="light">
          Delete account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay blur />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Button color="neutral" variant="light">
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button color="error" variant="light">
                Yes, delete account
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  ),
};
