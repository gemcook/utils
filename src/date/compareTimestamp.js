/* @flow */
import moment from 'moment';

export default function compareTimestamp(targetDate: string) {
  const now = moment()
    .locale('ja')
    .format('x');

  const target = moment(targetDate)
    .locale('ja')
    .format('x');

  if (now > target) {
    return false;
  } else {
    return true;
  }
}
