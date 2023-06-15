'use client';
import { Fragment } from 'react';
import { DialogBody, Kbd } from '@/components';

const shortcuts = [
  { label: 'Focus code editor', keys: ['F'] },
  { label: 'Unfocus code editor', keys: ['Esc'] },
  { label: 'Toggle theme', keys: ['D'] },
  { label: 'Export image', keys: ['Ctrl', 'S'] },
  { label: 'Open in new tab', keys: ['Ctrl', 'O'] },
  { label: 'Open shortcuts', keys: ['?'] },
];

export function KeyboardShortcutsDialogBody() {
  return (
    <DialogBody>
      <dl className="grid grid-cols-2 items-center gap-y-4">
        {shortcuts.map(({ label, keys }) => (
          <Fragment key={label}>
            <dt className="text-sm">{label}</dt>
            <dd className="flex justify-end gap-x-2">
              {keys.map((key) => (
                <Kbd key={key} fontSize="sm">
                  {key}
                </Kbd>
              ))}
            </dd>
          </Fragment>
        ))}
      </dl>
    </DialogBody>
  );
}
