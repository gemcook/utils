/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';
import parse from 'date-fns/parse';

export default function parseYear(
  token?: string,
  formatToken?: string = 'YYYY',
) {
  if (token) {
    return format(new Date(parse(token)), formatToken, {locale: ja});
  } else {
    return format(new Date(), formatToken, {locale: ja});
  }
}
