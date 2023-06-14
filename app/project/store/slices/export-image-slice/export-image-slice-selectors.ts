import type { StoreState } from '../../use-store.types';

// export image dialog open
export const selectExportImageDialogOpen = (state: StoreState) => state.exportImageDialogOpen;
export const selectSetExportImageDialogOpen = (state: StoreState) => state.setExportImageDialogOpen;

// export image exporting
export const selectExportImageExporting = (state: StoreState) => state.exportImageExporting;
export const selectSetExportImageExporting = (state: StoreState) => state.setExportImageExporting;

// export image name
export const selectExportImageName = (state: StoreState) => state.exportImageName;
export const selectSetExportImageName = (state: StoreState) => state.setExportImageName;

// export image extension
export const selectExportImageExtension = (state: StoreState) => state.exportImageExtension;
export const selectSetExportImageExtension = (state: StoreState) => state.setExportImageExtension;

// export image quality
export const selectExportImageQuality = (state: StoreState) => state.exportImageQuality;
export const selectSetExportImageQuality = (state: StoreState) => state.setExportImageQuality;

// export image scale
export const selectExportImageScale = (state: StoreState) => state.exportImageScale;
export const selectSetExportImageScale = (state: StoreState) => state.setExportImageScale;
