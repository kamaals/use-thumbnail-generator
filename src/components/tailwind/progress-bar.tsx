import { ProgressRendererProps } from '../../@types';

function ProgressBar(props: ProgressRendererProps) {
  return (
    <div className=" h-3 bg-white absolute left-2 right-2 bottom-8 rounded-full overflow-clip">
      <div
        className="h-full w-full flex-1 bg-black transition-all duration-300"
        style={{ transform: `translateX(${-100 + props.percentage}%)` }}
      />
    </div>
  );
}

export default ProgressBar;
