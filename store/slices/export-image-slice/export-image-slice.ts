import type { CreateExportImageSlice } from './export-image-slice.types';

export const createExportImageSlice: CreateExportImageSlice = (set) => ({
  exportImageDialogOpen: false,
  exportImageExporting: false,
  exportImageName: '',
  exportImageExtension: 'png',
  exportImageQuality: 100,
  exportImageScale: 1,

  setExportImageDialogOpen: (exportImageDialogOpen) => set(() => ({ exportImageDialogOpen })),
  setExportImageExporting: (exportImageExporting) => set(() => ({ exportImageExporting })),
  setExportImageName: (exportImageName) => set(() => ({ exportImageName })),
  setExportImageExtension: (exportImageExtension) => set(() => ({ exportImageExtension })),
  setExportImageQuality: (exportImageQuality) => set(() => ({ exportImageQuality })),
  setExportImageScale: (exportImageScale) => set(() => ({ exportImageScale })),
});
