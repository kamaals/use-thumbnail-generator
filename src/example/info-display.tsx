import React from 'react';

import { InfoIconsState, IThumb, UploadStatus } from '../components/types';
import classes from './info-display.module.sass';
import SuccessSvg from '../components/fallback-components/success-svg';
import clsx from '../utils/clsx';
import ProgressBarV from '../components/fallback-components/progress-bar-v';
import ErrorSvg from '../components/fallback-components/error-svg';

export type InfoDisplayProps = {
  thumb: IThumb;
};

function InfoDisplay({ thumb }: InfoDisplayProps) {
  const [showSuccess, setShowSuccess] = React.useState<InfoIconsState>('hide');
  const [showError, setShowError] = React.useState<InfoIconsState>('hide');
  let timer: null | ReturnType<typeof setTimeout> = null;
  React.useEffect(() => {
    if (thumb.status === UploadStatus.COMPLETED) {
      setShowSuccess('appear');
      timer = setTimeout(() => {
        setShowSuccess('disappear');
      }, 5000);
    }
    if (thumb.status === UploadStatus.ERROR) {
      setShowError('appear');
      timer = setTimeout(() => {
        setShowError('disappear');
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [thumb.status]);

  const successClasses = React.useMemo(() => {
    return clsx(
      classes.infoSuccessSVGWarapper,
      showSuccess === 'appear'
        ? classes.infoSuccessSVGWarapperCompleted
        : showSuccess === 'disappear'
          ? classes.infoSuccessSVGWarapperDone
          : '',
    );
  }, [showSuccess]);

  const errorClasses = React.useMemo(() => {
    return clsx(
      classes.infoSuccessSVGWarapper,
      showError === 'appear'
        ? classes.infoSuccessSVGWarapperCompleted
        : showError === 'disappear'
          ? classes.infoSuccessSVGWarapperDone
          : '',
    );
  }, [showError]);

  return (
    <div className={classes.info}>
      {thumb.status !== UploadStatus.ERROR ? (
        <ProgressBarV percentage={thumb.uploadProgress} status={thumb.status} />
      ) : null}
      {thumb.status !== UploadStatus.ERROR ? (
        <span>{thumb.uploadProgress}%</span>
      ) : null}
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
