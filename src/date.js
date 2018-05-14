/* @flow */
import * as moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

export function getCurrentDatetime(format?: string = 'YYYY-MM-DD HH:mm:ss') {
  const now = moment().format(format);
  return now;
}

export function getCurrentTimestamp() {
  const now = moment().format('x');
  return now;
}

export function getDatetime(
  timestamp: number,
  format?: string = 'YYYY-MM-DD HH:mm:ss',
) {
  const datetime = moment(timestamp).format(format);
  return datetime;
}

export function compareTimestamp(targetDate: string) {
  const now = moment().format('x');
  const target = moment(targetDate).format('x');
  if (now > target) {
    return false;
  } else {
    return true;
  }
}
