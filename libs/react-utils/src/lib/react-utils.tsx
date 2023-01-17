import { AlonsoComponents } from '@alonso/components';
import styles from './react-utils.module.css';

/* eslint-disable-next-line */
export interface ReactUtilsProps {}

export function ReactUtils(props: ReactUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUtils!</h1>
      <AlonsoComponents />
    </div>
  );
}

export default ReactUtils;
