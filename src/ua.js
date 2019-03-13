import platform from 'platform';

export const ua = {
  isSp() {
    const os = platform.os.family;
    const result = os === 'Android' || os === 'iOS' || os === 'Windows Phone';
    return result;
  },
};
