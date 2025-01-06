import React from 'react';

import { IThumb, ProgressRendererProps, UploadStatus } from '../@types/';
import classes from './info-display.module.sass';
import SuccessSvg from './fallback-components/success-svg';
import ProgressBarV from './fallback-components/progress-bar-v';
import ErrorSvg from './fallback-components/error-svg';
import { useInfo } from '../hook/use-info';

export type InfoDisplayProps = {
  thumb: IThumb;
  percentageRenderer?: (props: ProgressRendererProps) => React.ReactNode;
};

function InfoDisplay({ thumb, percentageRenderer }: InfoDisplayProps) {
  const { successClasses, errorClasses } = useInfo(thumb);

  return (
    <div className={classes.info}>
      {thumb.status !== UploadStatus.ERROR ? (
        <ProgressBarV percentage={thumb.uploadProgress} status={thumb.status} />
      ) : null}
      {thumb.status === UploadStatus.ERROR ? null : percentageRenderer && 'function' === typeof percentageRenderer ? (
        percentageRenderer({ status: thumb.status, percentage: thumb.uploadProgress })
      ) : (
        <span>{thumb.uploadProgress}%</span>
      )}
      <div className={successClasses}>
        <SuccessSvg />
      </div>
      <div className={errorClasses}>
        <ErrorSvg />
      </div>
    </div>
  );
}

export default InfoDisplay;
