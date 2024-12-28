import { CancelButtonProps } from '../types';
import CancelSvg from './cancel-svg';
import classes from './cancel-button.module.sass';

function CancelButton({ deleteHandler, id }: CancelButtonProps) {
  return (
    <div
      onClick={() => {
        deleteHandler(id);
      }}
      className={classes.cancel}
    >
      <CancelSvg />
    </div>
  );
}

export default CancelButton;
