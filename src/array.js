import _ from 'lodash';

export const getDetailById = (id, data, idFormat) => {
  const key = idFormat ? idFormat : 'id';
  const targetId = Number(id);

  const result = _.find(data, d => {
    return targetId === d[key];
  });

  return result;
};

export const checkKeyInArray = (key, array) => {
  let result;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result = array[i];
      break;
    }
    result = false;
  }

  return result;
};

// OIA = Object in Array
export const checkKeyInOIA = (key, array) => {
  let result;

  for (let i = 0; i < array.length; i++) {
    if (key in array[i]) {
      result = array[i];
      break;
    }
    result = false;
  }

  return result;
};

export const checkValueInOIA = (key, value, array) => {
  let result;

  for (let i = 0; i < array.length; i++) {
    if (array[i][`${key}`] === value) {
      result = array[i];
      break;
    }
    result = false;
  }

  return result;
};
