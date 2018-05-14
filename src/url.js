/* @flow */
export function getUrlParameter() {
  const url = window.location.search;
  let result = {};
  let max = 0;
  let hash = '';
  let array = '';

  hash = url.slice(1).split('&');
  max = hash.length;
  for (let i = 0; i < max; i++) {
    array = hash[i].split('='); //keyと値に分割
    result[array[0]] = array[1]; //先ほど確保したkeyに、値を代入
  }

  return result;
}

export function matchCurrentPath(path: string) {
  const target = new RegExp(path);
  const current = window.location.pathname;
  if (current.match(target)) {
    return true;
  } else {
    return false;
  }
}
