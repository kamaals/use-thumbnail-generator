import React from 'react';

export enum UploadStatus {
  ERROR = 'ERROR',
  WAITING = 'WAITING',
  COMPLETED = 'COMPLETED',
  DONE = 'DONE',
}

export interface IThumb {
  url: string;
  id: string;
  status: UploadStatus;
  file: File | null;
  uploadProgress: number;
  responseUrl?: string;
  signal?: AbortController;
}

export type UseUploadReturnType = {
  thumbs: Array<IThumb>;
  handleFiles: HandleFilesFunc;
  updateThumb: UpdateThumbFunc;
  handleDelete: HandleDeleteFunc;
};

export type FileReaderFunc = (file: IThumb) => Promise<IThumb>;
export type UploadServiceFunc<Response> = (thumb: IThumb, updateThumb: UpdateThumbFunc) => Promise<Response>;
export type UpdateThumbFunc = (data: IThumb) => void;
export type HandleDeleteFunc = (id: string) => void;
export type HandleFilesFunc = (acceptedFiles: Array<File>) => Promise<void>;
export type InfoComponentRenderFunc = (props: { thumb: IThumb }) => React.ReactNode;

export type ProgressRendererProps = {
  percentage: number;
  status: UploadStatus;
};

export type CancelButtonProps = {
  deleteHandler: HandleDeleteFunc;
  status: UploadStatus;
  id: string;
};

export type InfoIconsState = 'appear' | 'disappear' | 'hide';
