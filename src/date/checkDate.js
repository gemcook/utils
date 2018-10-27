/* @flow */
import {isValid} from 'date-fns';

export default function checkDate(dateString: string) {
  if (isValid(dateString)) {
    return dateString;
  } else {
    throw new Error(`${dateString} is "Invalid Date".`);
  }
}