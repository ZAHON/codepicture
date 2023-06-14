'use client';
import { IconPhotoDown } from '@tabler/icons-react';
import {
  useStore,
  selectExportImageExporting,
  selectSetExportImageDialogOpen,
} from '@project/store';
import { MenuItem, Loader } from '@/components';

export function DropdownMenuExportImage() {
  const exportImageExporting = useStore(selectExportImageExporting);
  const setExportImageDialogOpen = useStore(selectSetExportImageDialogOpen);

  function getIcon() {
    if (exportImageExporting) {
      return <Loader />;
    }

    return (
      <IconPhotoDown
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    );
  }

  function handleSelect() {
    setExportImageDialogOpen(true);
  }

  return (
    <MenuItem disabled={exportImageExporting} icon={getIcon()} onSelect={handleSelect}>
      {exportImageExporting ? 'Exporting image...' : 'Export image'}
    </MenuItem>
  );
}
