import {Base64} from 'js-base64';

export const decode = (str: string) => {
  return Base64.decode(str);
};
