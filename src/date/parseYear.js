/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

export default function parseYear(
  token?: string,
  formatToken?: string = 'YYYY',
) {
  if (token) {
    return format(new Date(token), formatToken, {locale: ja});
  } else {
    return format(new Date(), formatToken, {locale: ja});
  }
}
