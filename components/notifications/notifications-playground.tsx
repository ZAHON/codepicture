import type { InputHTMLAttributes } from 'react';
import type { NotifyShowArgs } from '@/lib-client/notify/notify-show/notify-show.types';
import { useState } from 'react';
import { notify } from '@/lib-client';
import { Button, Label, NativeSelect, SegmentedSwitch } from '@/components';

export function NotificationsPlayground() {
  const [id, setId] = useState(crypto.randomUUID());
  const [position, setPosition] = useState<NotifyShowArgs['position']>('bottom-right');
  const [type, setType] = useState<NotifyShowArgs['type']>('info');
  const [title, setTitle] = useState('Notification title');
  const [message, setMessage] = useState('Notification message');
  const [withCloseButton, setWithCloseButton] = useState(true);
  const [withBorder, setWithBorder] = useState(true);

  function handleShowNotification() {
    const id = crypto.randomUUID();
    setId(id);

    notify.show({
      id,
      position,
      type,
      title,
      message,
      withCloseButton,
      withBorder,
    });
  }

  function handleDismissNotification() {
    notify.dismiss(id);
  }

  function handleDismissAllNotifications() {
    notify.dismissAll();
  }

  function handleRemoveNotification() {
    notify.remove(id);
  }

  function handleRemoveAllNotifications() {
    notify.removeAll();
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-y-4 p-4">
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="type">Type</Label>
        <NativeSelect
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as typeof type)}
        >
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="loading">Loading</option>
        </NativeSelect>
      </div>
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="type">Position</Label>
        <NativeSelect
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value as typeof position)}
        >
          <option value="top-left">top-left</option>
          <option value="top-center">top-center</option>
          <option value="top-right">top-right</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-center">bottom-center</option>
          <option value="bottom-right">bottom-right</option>
        </NativeSelect>
      </div>
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="title">Title</Label>
        <TextInput id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="message">Message</Label>
        <TextInput id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="with-close-button">With close button</Label>
        <SegmentedSwitch
          id="with-close-button"
          checked={withCloseButton}
          onCheckedChange={setWithCloseButton}
        />
      </div>
      <div role="group" className="flex flex-col gap-y-1">
        <Label htmlFor="with-border">With border</Label>
        <SegmentedSwitch id="with-border" checked={withBorder} onCheckedChange={setWithBorder} />
      </div>
      <Button onClick={handleShowNotification}>Show notification</Button>
      <div className="flex gap-x-4">
        <Button onClick={handleDismissNotification} color="error" fullWidth>
          Dismiss last notification
        </Button>
        <Button onClick={handleDismissAllNotifications} color="error" fullWidth>
          Dismiss all notifications
        </Button>
      </div>
      <div className="flex gap-x-4">
        <Button onClick={handleRemoveNotification} color="error" fullWidth>
          Remove last notification
        </Button>
        <Button onClick={handleRemoveAllNotifications} color="error" fullWidth>
          Remove all notifications
        </Button>
      </div>
    </div>
  );
}

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="h-9 rounded-lg border-2 border-neutral-6 bg-neutral-6 px-3 focus:border-primary-9 focus:outline-none motion-safe:transition motion-safe:duration-150"
      {...props}
    />
  );
}
