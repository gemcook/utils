import jwtDecode from 'jwt-decode';

const parse = jwt => {
  if (jwt) {
    const parseToken = jwtDecode(jwt);
    return parseToken;
  }

  return null;
};

export const jwt = {parse};
