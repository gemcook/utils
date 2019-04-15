import platform from 'platform';

export const isSp = () => {
  const os = platform.os.family;
  const result = os === 'Android' || os === 'iOS' || os === 'Windows Phone';
  return result;
};

export const isAndroid = () => {
  const os = platform.os.family;
  return os === 'Android';
};

export const isIOS = () => {
  const os = platform.os.family;
  return os === 'iOS';
};

export const get = () => {
  return platform;
};
