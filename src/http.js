export function isSuccess(response: any): any {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw response;
  }
}

export function isRedirect(response: any): any {
  if (response.status >= 300 && response.status < 400) {
    return response;
  } else {
    throw response;
  }
}

export function isClientError(response: any): any {
  if (response.status >= 400 && response.status < 500) {
    return response;
  } else {
    throw response;
  }
}

export function isServerError(response: any): any {
  if (response.status >= 500 && response.status < 600) {
    return response;
  } else {
    throw response;
  }
}
