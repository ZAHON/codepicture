'use client';
import type { NotificationIconProps } from './notification-icon.types';
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
} from '@tabler/icons-react';

export function NotificationIcon(props: NotificationIconProps) {
  const { type, iconProps } = props;

  switch (type) {
    case 'info': {
      return (
        <IconInfoCircleFilled size="1.75rem" aria-hidden="true" focusable="false" {...iconProps} />
      );
    }
    case 'success': {
      return (
        <IconCircleCheckFilled size="1.75rem" aria-hidden="true" focusable="false" {...iconProps} />
      );
    }
    case 'error': {
      return (
        <IconAlertCircleFilled size="1.75rem" aria-hidden="true" focusable="false" {...iconProps} />
      );
    }
    case 'warning': {
      return (
        <IconAlertTriangleFilled
          size="1.75rem"
          aria-hidden="true"
          focusable="false"
          {...iconProps}
        />
      );
    }
    default: {
      return null;
    }
  }
}
