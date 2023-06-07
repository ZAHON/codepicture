import { Button } from '@/components';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogBody,
  DialogFooter,
} from '.';

const meta = {
  title: 'UI/Dialog',
};

export default meta;

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <DialogBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nihil, deserunt dolorum
              dicta quidem amet deleniti dolore sapiente itaque quod corrupti doloribus aliquid
              impedit iste in blanditiis at modi? Commodi.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ),
};

export const WithBlurOverlay = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay blur />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <DialogBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nihil, deserunt dolorum
              dicta quidem amet deleniti dolore sapiente itaque quod corrupti doloribus aliquid
              impedit iste in blanditiis at modi? Commodi.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ),
};
