import qs from 'qs';

export default {
  parse(str: string) {
    const qsStr = str.slice(1);
    return qs.parse(qsStr);
  },
};
