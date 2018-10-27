/* @flow */
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';

export default function getCurrentDatetime(
  formatToken?: string = 'yyyy-MM-dd HH:mm:ss',
) {
  return format(new Date(), formatToken, {locale: ja});
}
