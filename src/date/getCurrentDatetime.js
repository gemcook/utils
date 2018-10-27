/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

export default function getCurrentDatetime(
  formatToken?: string = 'YYYY-MM-DD HH:mm:ss',
) {
  return format(new Date(), formatToken, {locale: ja});
}
