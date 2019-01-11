import * as moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

/**
 *
 * @param {*} format
 */
export const getCurrentDatetime = (format = 'YYYY-MM-DD HH:mm:ss') => {
  const now = moment().format(format);
  return now;
};

/**
 *
 */
export const getCurrentTimestamp = () => {
  const now = moment().format('x');
  return now;
};

/**
 *
 * @param {*} timestamp
 * @param {*} second
 * @param {*} format
 */
export const getDatetime = (
  timestamp,
  second = true,
  format = 'YYYY-MM-DD HH:mm:ss',
) => {
  let datetime;
  if (second) {
    datetime = moment(timestamp * 1000).format(format);
  } else {
    datetime = moment(timestamp).format(format);
  }
  return datetime;
};

/**
 *
 * @param {*} targetDate
 */
export const compareTimestamp = targetDate => {
  const now = moment().format('x');
  const target = moment(targetDate).format('x');
  if (now > target) {
    return false;
  } else {
    return true;
  }
};
