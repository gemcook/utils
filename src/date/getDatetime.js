/* @flow */
import moment from 'moment';

export default function getDatetime(
  timestamp: number,
  second: boolean = true,
  format?: string = 'YYYY-MM-DD HH:mm:ss',
) {
  let datetime;

  if (second) {
    datetime = moment(timestamp * 1000)
      .locale('ja')
      .format(format);
  } else {
    datetime = moment(timestamp)
      .locale('ja')
      .format(format);
  }

  return datetime;
}
