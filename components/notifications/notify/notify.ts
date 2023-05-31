import { notifyShow } from './notify-show';
import { notifyDismiss } from './notify-dismiss';
import { notifyDismissAll } from './notify-dismiss-all';
import { notifyRemove } from './notify-remove';
import { notifyRemoveAll } from './notify-remove-all';

export const notify = {
  show: notifyShow,
  dismiss: notifyDismiss,
  dismissAll: notifyDismissAll,
  remove: notifyRemove,
  removeAll: notifyRemoveAll,
};
