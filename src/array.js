/* @flow */
export const getDetailById = (id: any, data: Array<*>) => {
  const shapeId = Number(id);
  const results = data.filter(detail => {
    return shapeId === detail.id;
  });
  return results[0];
};

export const checkKeyInArray = (key: any, array: Array<*>) => {
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
export const checkKeyInOIA = (key: string, array: Array<*>) => {
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

export const checkValueInOIA = (key: string, value: any, array: Array<*>) => {
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
