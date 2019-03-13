import {Base64} from 'js-base64';

export const base64 = {
  decode(str: string) {
    return Base64.decode(str);
  },
};
