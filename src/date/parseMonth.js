/* @flow */
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';
import parse from 'date-fns/parse';

export default function parseMonth(
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
