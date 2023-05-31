import { toast } from 'react-hot-toast';

/**
 * @param id
 * The id of the notification to remove.
 */
export function notifyRemove(id: string) {
  if (id) {
    toast.remove(id);
  }
}
