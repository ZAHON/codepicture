import type { NotifyShowArgs } from './notify-show.types';
import { toast } from 'react-hot-toast';
import { applayComponentDefaultProps as applayDefaultArgs } from '@/utils';
import { getNotifyDuration } from './utils';
import { Notification } from '@/components/notifications/notification';

const defaultArgs: Partial<NotifyShowArgs> = {
  position: 'bottom-right',
};

export function notifyShow(args: NotifyShowArgs) {
  const { id, position, duration, type, onClose, ...others } = applayDefaultArgs(defaultArgs, args);

  const notifyDuration = duration ?? getNotifyDuration(type);

  toast.custom(
    (t) => {
      function handleClose() {
        if (onClose) onClose();
        toast.dismiss(t.id);
      }

      return <Notification visible={t.visible} type={type} onClose={handleClose} {...others} />;
    },
    { id, position, duration: notifyDuration }
  );
}
