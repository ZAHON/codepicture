import type { State } from '../../store.types';

// export image dialog open
export const selectExportImageDialogOpen = (state: State) => state.exportImageDialogOpen;
export const selectSetExportImageDialogOpen = (state: State) => state.setExportImageDialogOpen;

// export image exporting
export const selectExportImageExporting = (state: State) => state.exportImageExporting;
export const selectSetExportImageExporting = (state: State) => state.setExportImageExporting;

// export image name
export const selectExportImageName = (state: State) => state.exportImageName;
export const selectSetExportImageName = (state: State) => state.setExportImageName;

// export image extension
export const selectExportImageExtension = (state: State) => state.exportImageExtension;
export const selectSetExportImageExtension = (state: State) => state.setExportImageExtension;

// export image quality
export const selectExportImageQuality = (state: State) => state.exportImageQuality;
export const selectSetExportImageQuality = (state: State) => state.setExportImageQuality;

// export image scale
export const selectExportImageScale = (state: State) => state.exportImageScale;
export const selectSetExportImageScale = (state: State) => state.setExportImageScale;
