import type { NotifyShowArgs } from '../notify-show.types';

/**
 * @param type
 * The type of the notification.
 */
export function getNotifyDuration(type: NotifyShowArgs['type']) {
  switch (type) {
    case 'info': {
      return 4000;
    }
    case 'success': {
      return 2000;
    }
    case 'warning': {
      return 4000;
    }
    case 'error': {
      return 4000;
    }
    case 'loading': {
      return Infinity;
    }
    default: {
      throw Error(`Unknown type: ${type}`);
    }
  }
}
