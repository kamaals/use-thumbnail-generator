import { useInfo } from '../../hook/use-info';
import { InfoDisplayProps } from '../info-display';
import { UploadStatus } from '../../@types';
import ProgressBar from './progress-bar';
import SuccessSvg from '../fallback-components/success-svg';
import ErrorSvg from '../fallback-components/error-svg';
import Animated from '../animated';
import ClockSvg from '../fallback-components/clock-svg';

function InfoDisplayTailwind({ thumb, percentageRenderer }: InfoDisplayProps) {
  const { showSuccess, showError } = useInfo(thumb);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      {thumb.status === UploadStatus.LOADING ? (
        <ProgressBar percentage={thumb.uploadProgress} status={thumb.status} />
      ) : null}
      {thumb.status === UploadStatus.LOADING ? (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center text-white  h-8  items-center bg-white/5 backdrop-blur">
          {thumb.status === UploadStatus.LOADING ? (
            percentageRenderer && 'function' === typeof percentageRenderer ? (
              percentageRenderer({
                status: thumb.status,
                percentage: thumb.uploadProgress,
              })
            ) : (
              <span>{thumb.uploadProgress}%</span>
            )
          ) : null}
        </div>
      ) : null}
      {thumb.status === UploadStatus.WAITING ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex h-full w-full justify-center items-center">
          <ClockSvg size={80} />
        </div>
      ) : null}
      <Animated status={showSuccess}>
        <SuccessSvg size={80} />
      </Animated>
      <Animated status={showError}>
        <ErrorSvg className="text-red-900" size={80} />
      </Animated>
    </div>
  );
}

export default InfoDisplayTailwind;
