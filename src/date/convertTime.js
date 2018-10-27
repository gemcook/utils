/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';
import * as R from 'ramda';

type AtTime = {
  year: string,
  month: string,
  date: string,
};

export default function convertTime(
  date: AtTime | string,
  formatToken: string,
) {
  const shallowValidDate = R.cond([
    [
      date => R.type(date) === 'Object',
      ({year, month, date}) => new Date(year, month, date),
    ],
    [date => R.type(date) === 'String', date => new Date(date)],
    [
      R.T,
      date => {
        console.error(`${date} is mean Date?`);
        return new Date();
      },
    ],
  ])(date);

  return format(shallowValidDate, formatToken, {locale: ja});
}
