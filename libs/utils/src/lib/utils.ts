import { camelCase } from 'lodash';
import { isNil } from 'ramda';

export function utils(): string {
  if (isNil(0)) {
    return 'none';
  }
  return camelCase('utils');
}
