import Base64 from 'base-64';

export const decode = str => {
  return Base64.decode(str);
};
