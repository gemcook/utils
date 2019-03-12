import _ from 'lodash';
import Case from 'case';

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

export const toCamel = collection => {
  return __changeCases(collection, 'camel');
};

export const toSnake = collection => {
  return __changeCases(collection, 'snake');
};

const __changeCases = (collection, caseName) => {
  if (_.isArray(collection)) {
    return collection.map(value => __changeCases(value, caseName));
  } else if (_.isPlainObject(collection)) {
    let obj = {...collection};
    obj = _.mapKeys(obj, (v, k) => Case[caseName](k));
    obj = _.mapValues(obj, v => __changeCases(v, caseName));
    return obj;
  } else if (_.isString(collection)) {
    return Case[caseName](collection);
  }

  // ArrayまたはObject、Stringで無ければそのまま
  return collection;
};
