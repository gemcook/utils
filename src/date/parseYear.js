/* @flow */
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';
import parse from 'date-fns/parse';

export default function parseYear(
  dateString: string,
  formatString: string,
  formatToken?: string = 'yyyy',
) {
  const LocaleOption = {
    locale: ja,
  };

  const shapeDate = parse(dateString, formatString, new Date());
  return format(shapeDate, formatToken, LocaleOption);
}
