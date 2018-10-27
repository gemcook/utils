/* @flow */
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';
import parse from 'date-fns/parse';
import * as R from 'ramda';

type AtTime = {
  year: string,
  month: string,
  date: string,
};

export default function convertTime(
  date: AtTime | string,
  formatToken: string,
  formatString?: string,
) {
  const LocaleOption = {
    locale: ja,
  };

  const shallowValidDate = R.cond([
    [
      date => R.type(date) === 'Object',
      ({year, month, date}) => {
        return new Date(
          parseInt(year, 10),
          parseInt(month, 10) - 1,
          parseInt(date, 10),
        );
      },
    ],
    [
      date => R.type(date) === 'String',
      (date, formatString) => {
        if (formatString) {
          return parse(date, formatString, new Date());
        } else {
          console.error(`date string parse need "formatString".`);
          return new Date();
        }
      },
    ],
    [
      R.T,
      date => {
        console.error(`${date} is mean Date?`);
        return new Date();
      },
    ],
  ])(date, formatString);

  return format(shallowValidDate, formatToken, LocaleOption);
}
