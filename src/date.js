import moment from 'moment';
import {isValid, format} from 'date-fns';
import {ja} from 'date-fns/locale';
import parse from 'date-fns/parse';
import * as R from 'ramda';

export function checkDate(dateString: string) {
  if (isValid(dateString)) {
    return dateString;
  } else {
    throw new Error(`${dateString} is "Invalid Date".`);
  }
}

export function compareTimestamp(targetDate: string) {
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

type AtTime = {
  year: string,
  month: string,
  date: string,
};

export function convertTime(
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

export function getCurrentDatetime(
  formatToken?: string = 'yyyy-MM-dd HH:mm:ss',
) {
  return format(new Date(), formatToken, {locale: ja});
}

export function getCurrentTimestamp() {
  return format(new Date(), 'x', {locale: ja});
}

export function getDatetime(
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

export default function parseDay(
  dateString: string,
  formatString: string,
  formatToken?: string = 'd',
) {
  const LocaleOption = {
    locale: ja,
  };

  const shapeDate = parse(dateString, formatString, new Date());
  const result = format(shapeDate, formatToken, LocaleOption);

  if (result === 'Invalid Date') {
    return null;
  } else {
    return result;
  }
}

export function parseYear(
  dateString: string,
  formatString: string,
  formatToken?: string = 'd',
) {
  const LocaleOption = {
    locale: ja,
  };

  const shapeDate = parse(dateString, formatString, new Date());
  const result = format(shapeDate, formatToken, LocaleOption);

  if (result === 'Invalid Date') {
    return null;
  } else {
    return result;
  }
}

export function parseMonth(
  dateString: string,
  formatString: string,
  formatToken?: string = 'M',
) {
  const LocaleOption = {
    locale: ja,
  };

  const shapeDate = parse(dateString, formatString, new Date());
  const result = format(shapeDate, formatToken, LocaleOption);

  if (result === 'Invalid Date') {
    return null;
  } else {
    return result;
  }
}
