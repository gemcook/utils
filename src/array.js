import _ from 'lodash';
import Case from 'case';

export const getDetailById = (id, data, idFormat?) => {
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
  if (_.isArray(collection)) {
    const results = collection.map(value => {
      const shaped = _.mapKeys(value, (v, k) => Case.camel(k));
      return shaped;
    });
    return results;
  } else if (_.isPlainObject(collection)) {
    return _.mapKeys(collection, (v, k) => Case.camel(k));
  } else if (_.isString(collection)) {
    return Case.camel(collection);
  }

  // ArrayまたはObject、Stringで無ければそのまま
  return collection;
};

export const toSnake = collection => {
  if (_.isArray(collection)) {
    const results = collection.map(value => {
      const shaped = _.mapKeys(value, (v, k) => Case.snake(k));
      return shaped;
    });
    return results;
  } else if (_.isPlainObject(collection)) {
    return _.mapKeys(collection, (v, k) => Case.snake(k));
  } else if (_.isString(collection)) {
    return Case.snake(collection);
  }

  // ArrayまたはObject、Stringで無ければそのまま
  return collection;
};
