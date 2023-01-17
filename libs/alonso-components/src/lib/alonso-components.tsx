import styles from './alonso-components.module.css';
import { utils } from '@alonso/utils';

/* eslint-disable-next-line */
export interface AlonsoComponentsProps {}

export function AlonsoComponents(props: AlonsoComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AlonsoComponents! {utils()}</h1>
    </div>
  );
}

export default AlonsoComponents;
