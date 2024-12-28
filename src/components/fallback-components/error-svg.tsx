import classes from './error-svg.module.sass';
import clsx from '../../utils/clsx';

function ErrorSvg({ className }: { className?: string }) {
  return (
    <svg className={clsx(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle className={classes.svgCircle} cx="25" cy="25" r="25" />
      <polyline
        className={classes.svgPolyline}
        points="16,34 25,25 34,16
	"
      />
      <polyline
        className={classes.svgPolyline}
        points="16,16 25,25 34,34
	"
      />
    </svg>
  );
}

export default ErrorSvg;
