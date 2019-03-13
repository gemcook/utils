import platform from 'platform';

export const isSp = () => {
  const os = platform.os.family;
  const result = os === 'Android' || os === 'iOS' || os === 'Windows Phone';
  return result;
};
