/* @flow */
export {getUrlParameter, matchCurrentPath} from './url';

export {
  getDetailById,
  checkKeyInArray,
  checkKeyInOIA,
  checkValueInOIA,
} from './array';

export {
  getCurrentDatetime,
  getCurrentTimestamp,
  getDatetime,
  compareTimestamp,
} from './date';

export {getBrand} from './image';

export function happy() {
  console.log('HAPPY!!');
}
