import jwtDecode from 'jwt-decode';

export const parse = jwt => {
  if (jwt) {
    const parseToken = jwtDecode(jwt);
    return parseToken;
  }

  return null;
};
