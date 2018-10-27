/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

export default function parseDay(token?: string, formatToken?: string = 'D') {
  if (token) {
    return format(new Date(token), formatToken, {locale: ja});
  } else {
    return format(new Date(), formatToken, {locale: ja});
  }
}
