import {Base64} from 'js-base64';

export default {
  decode(str: string) {
    return Base64.decode(str);
  },
};
