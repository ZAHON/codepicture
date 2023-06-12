import type { StateCreator } from 'zustand';

type ExportImageExtension = 'png' | 'jpeg';
type ExportImageScale = 1 | 2 | 4 | 8 | 16;

export type ExportImageSlice = {
  exportImageDialogOpen: boolean;
  exportImageExporting: boolean;
  exportImageName: string;
  exportImageExtension: ExportImageExtension;
  exportImageQuality: number;
  exportImageScale: ExportImageScale;

  setExportImageDialogOpen: (exportImageDialogOpen: boolean) => void;
  setExportImageExporting: (exportImageExporting: boolean) => void;
  setExportImageName: (exportImageName: string) => void;
  setExportImageExtension: (exportImageExtension: ExportImageExtension) => void;
  setExportImageQuality: (exportImageQuality: number) => void;
  setExportImageScale: (exportImageScale: ExportImageScale) => void;
};

export type CreateExportImageSlice = StateCreator<ExportImageSlice, [], [], ExportImageSlice>;
