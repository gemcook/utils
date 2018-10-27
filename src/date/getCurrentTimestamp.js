/* @flow */
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

export default function getCurrentTimestamp() {
  return format(new Date(), 'x', {locale: ja});
}
