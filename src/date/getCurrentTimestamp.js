/* @flow */
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';

export default function getCurrentTimestamp() {
  return format(new Date(), 'x', {locale: ja});
}
