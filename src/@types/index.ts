import React from 'react';
/*
 * @description Enum representing different statuses of an upload process.
 */
export enum UploadStatus {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  WAITING = 'WAITING',
  COMPLETED = 'COMPLETED',
  DONE = 'DONE',
}

/*
 * @description Interface representing a thumbnail object.
 */
export interface IThumb {
  url: string;
  id: string;
  status: UploadStatus;
  file: File | null;
  uploadProgress: number;
  responseUrl?: string;
  signal?: AbortController;
}

/*
 * @description Interface representing the return type of the useUpload hook.
 **/
export type UseUploadReturnType = {
  thumbs: Array<IThumb>;
  handleFiles: HandleFilesFunc;
  updateThumb: UpdateThumbFunc;
  handleDelete: HandleDeleteFunc;
};
/*
 * @description Type for a function that reads a file and returns a
 *  promise of IThumb.
 */
export type FileReaderFunc = (file: IThumb) => Promise<IThumb>;
/*
 * @description Type for a function that uploads a file and returns a promise of a response.
 */
export type UploadServiceFunc<Response> = (thumb: IThumb, updateThumb: UpdateThumbFunc) => Promise<Response>;
/*
 * @description Type for a function that is called when the upload process
 * is completed.
 */
export type UpdateThumbFunc = (data: IThumb) => void;
/*
 * @description Type for a function that handles the deletion of a thumbnail.
 */
export type HandleDeleteFunc = (id: string) => void;
/*
 * @description Type for a function that handles the upload of files.
 */
export type HandleFilesFunc = (acceptedFiles: Array<File>) => Promise<void>;
/*
 * @description Type for a function that renders an info component.
 * If provided, otherwise the default info component will be rendered.
 */
export type InfoComponentRenderFunc = (props: { thumb: IThumb }) => React.ReactNode;
/*
 * @description Type for a function that is called when the upload is completed. Can be useful for to binding as a form
 * input onchange
 */
export type UploadCompletedFunction = (thumbs: Array<IThumb>) => void;

/*
 * @description Type for properties passed to a progress bar and progress percentage component.
 */
export type ProgressRendererProps = {
  percentage: number;
  status: UploadStatus;
};

/*
 * @description Type for properties passed to a cancel button component.
 */
export type CancelButtonProps = {
  deleteHandler: HandleDeleteFunc;
  status: UploadStatus;
  id: string;
};

/*
 * @description Type representing the state of info icons.
 */
export type InfoIconsState = 'appear' | 'disappear' | 'hide';
/*
 * @description Type for properties passed to a thumb component.
 */
export type ThumbProps = { thumb: IThumb } & {
  infoRender?: InfoComponentRenderFunc;
  handleDelete: (id: string) => void;
  updateThumb: UpdateThumbFunc;
  thumbClassName?: string;
  thumbWrapperClassName?: string;
  thumbImageClassName?: string;
  percentageRenderer?: (props: ProgressRendererProps) => React.ReactNode;
};
