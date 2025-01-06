import React from 'react';

import { InfoIconsState, IThumb, UploadStatus } from '../@types';
import clsx from '../utils/clsx';
import classes from '../components/info-display.module.sass';

export function useInfo(thumb: IThumb) {
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
        // setShowError('disappear');
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

  return {
    successClasses,
    errorClasses,
    showSuccess,
    showError,
  };
}
