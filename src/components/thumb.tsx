import { ThumbProps } from '../@types/';
import InfoDisplay from './info-display';
import CancelButton from './fallback-components/cancel-button';
import classes from './thumb.module.sass';
import clsx from '../utils/clsx';

function Thumb({
  thumb,
  percentageRenderer,
  infoRender,
  handleDelete,
  thumbClassName,
  thumbImageClassName,
  thumbWrapperClassName,
}: ThumbProps) {
  const { file, url, id, status } = thumb;

  return (
    <div className={clsx(classes.thumb, thumbClassName)}>
      <div className={clsx(classes.thumbWrapper, thumbWrapperClassName)}>
        <img className={clsx(classes.thumbImg, thumbImageClassName)} alt={file?.name} src={url} />
        {infoRender ? infoRender({ thumb }) : <InfoDisplay percentageRenderer={percentageRenderer} thumb={thumb} />}
        <CancelButton deleteHandler={handleDelete} id={id} status={status} />
      </div>
    </div>
  );
}

export default Thumb;
