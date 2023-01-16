import styles from './react-utils.module.css';
import { utils } from '@alonso/utils';

/* eslint-disable-next-line */
export interface ReactUtilsProps {}

export function ReactUtils(props: ReactUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUtils! {utils()}</h1>
    </div>
  );
}

export default ReactUtils;
