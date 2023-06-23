'use client';
import { IconPhotoDown } from '@tabler/icons-react';
import {
  useProjectPageStore,
  selectExportImageExporting,
  selectSetExportImageDialogOpen,
} from '@project/store';
import { MenuItem, Loader } from '@/components';

export function DropdownMenuExportImage() {
  const exportImageExporting = useProjectPageStore(selectExportImageExporting);
  const setExportImageDialogOpen = useProjectPageStore(selectSetExportImageDialogOpen);

  function getIcon() {
    if (exportImageExporting) {
      return <Loader />;
    }

    return <IconPhotoDown size="1rem" aria-hidden="true" focusable="false" />;
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
