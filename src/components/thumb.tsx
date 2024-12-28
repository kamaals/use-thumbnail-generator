import { InfoComponentRenderFunc, IThumb, UpdateThumbFunc } from './types';
import clsx from '../utils/clsx';
import InfoDisplay from '../example/info-display';
import CancelButton from './fallback-components/cancel-button';

type Props = { thumb: IThumb } & {
  infoRender?: InfoComponentRenderFunc;
  handleDelete: (id: string) => void;
  updateThumb: UpdateThumbFunc;
};

const classes = {
  thumb: 'thumb',
  thumbWrapper: 'thumb-wrapper',
  thumbImage: 'thumb-image',
};

function Thumb({ thumb, infoRender, handleDelete }: Props) {
  const { file, url, id, status } = thumb;

  return (
    <div className={clsx(classes.thumb)}>
      <div className={classes.thumbWrapper}>
        <img className={classes.thumbImage} alt={file?.name} src={url} />
        {infoRender ? infoRender({ thumb }) : <InfoDisplay thumb={thumb} />}
        <CancelButton deleteHandler={handleDelete} id={id} status={status} />
      </div>
    </div>
  );
}

export default Thumb;
