import React from 'react';

import { HandleFilesFunc, IThumb, UploadCompletedFunction, UploadServiceFunc, UploadStatus, UseUploadReturnType } from '../@types/';
import { v4 } from '../utils/uuid';
import { readFileAsync, uploadFileAsync } from '../utils/helper';

/*
 * @description Custom hook that manages the state and logic for
 * generating and uploading thumbnails.
 */
export function useThumbnailsGenerator<M>(
  uploadService: UploadServiceFunc<M>,
  images: Array<string> = [],
  uploadCompletedFunction?: UploadCompletedFunction,
): UseUploadReturnType {
  const [thumbs, setThumbs] = React.useState<Array<IThumb>>([]);
  const [status, setStatus] = React.useState<UploadStatus>(UploadStatus.WAITING);

  const updateThumb = React.useCallback((data: IThumb) => {
    setThumbs((th) => {
      return th.map((t) => {
        if (t.id === data.id) {
          return data;
        }

        return t;
      });
    });
  }, []);

  React.useEffect(() => {
    if (uploadCompletedFunction && typeof uploadCompletedFunction === 'function' && status === UploadStatus.COMPLETED) {
      console.log('responseList', thumbs);
      uploadCompletedFunction(thumbs);
    }
  }, [thumbs, status]);

  const handleFiles: HandleFilesFunc = React.useCallback(
    async (acceptedFiles: Array<File>) => {
      setStatus(UploadStatus.LOADING);
      const _thumbs = acceptedFiles.map((file) => ({
        uploadProgress: 0,
        id: v4(),
        file,
        url: '',
        status: UploadStatus.WAITING,
        signal: new AbortController(),
      }));
      const newThumbs: Array<IThumb> = [];

      for await (const data of readFileAsync(_thumbs)) {
        if (data) {
          newThumbs.push(data);
        }
      }

      if (newThumbs.length === _thumbs.length) {
        setThumbs((t) => [...t, ...newThumbs]);
        for await (const data of uploadFileAsync(newThumbs, uploadService, updateThumb)) {
          if (data) {
            updateThumb(data as IThumb);
          }
        }
        setStatus(UploadStatus.COMPLETED);
      }
    },
    [updateThumb, uploadService],
  );

  const handleDelete = React.useCallback((id: string) => {
    setThumbs((th) => {
      return th.filter((t) => {
        if (t.id === id && t.signal) {
          t.signal.abort();
        }

        return t.id !== id;
      });
    });
  }, []);

  React.useEffect(() => {
    if (images && images.length > 0) {
      setThumbs((_thumbs) => {
        const newUrls = images.filter((t) => {
          return !_thumbs.find((thumb) => thumb.url === t);
        });

        return [
          ..._thumbs,
          ...newUrls.map((url) => ({
            uploadProgress: 100,
            id: v4(),
            file: null,
            url,
            status: UploadStatus.DONE,
            signal: undefined,
          })),
        ];
      });
    }
  }, []);

  return {
    thumbs,
    handleFiles,
    updateThumb,
    handleDelete,
  };
}
