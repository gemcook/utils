import lQs from 'qs';

export const qs = {
  parse(str: string) {
    const qsStr = str.slice(1);
    return lQs.parse(qsStr);
  },
};
