/*
 * @description shadcn ui style component, using tailwindcss.
 * ThumbMin
 */
import { ThumbProps } from '../../@types';
import InfoDisplayTailwind from './info-display-tailwind';
import CancelButton from '../fallback-components/cancel-button';

function ThumbMin(props: ThumbProps) {
  return (
    <div className="w-40 h-40 overflow-clip bg-amber-500 rounded-3xl drop-shadow-md relative">
      <img src={props.thumb.url} alt={props.thumb.id} className="w-full h-full object-cover" />
      <InfoDisplayTailwind percentageRenderer={props.percentageRenderer} thumb={props.thumb} />
      <CancelButton deleteHandler={props.handleDelete} id={props.thumb.id} status={props.thumb.status} />
    </div>
  );
}

export default ThumbMin;
