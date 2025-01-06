import classes from './progress-bar.module.sass';
import { ProgressRendererProps, UploadStatus } from '../../@types/';
import clsx from '../../utils/clsx';

function ProgressBarV({ percentage, status }: ProgressRendererProps) {
  return (
    <div
      className={clsx(
        classes.progress,
        classes.vWrapper,
        status === UploadStatus.COMPLETED
          ? classes.vWrapperCompleted
          : status === UploadStatus.DONE
            ? classes.vWrapperDone
            : '',
      )}
    >
      <div
        className={clsx(
          classes.vBar,
          status === UploadStatus.COMPLETED
            ? classes.vBarCompleted
            : status === UploadStatus.DONE
              ? classes.vBarDone
              : '',
        )}
        style={{
          transform: `translate(-50%, ${100 - percentage}%)`,
        }}
      />
    </div>
  );
}

export default ProgressBarV;
