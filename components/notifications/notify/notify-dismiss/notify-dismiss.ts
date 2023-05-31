import { toast } from 'react-hot-toast';

/**
 * @param id
 * The id of the notification to dismiss.
 */
export function notifyDismiss(id: string) {
  if (id) {
    toast.dismiss(id);
  }
}
