import _ from 'lodash';
import Case from 'case';

export const toCamelKeys = collection => {
  if (_.isString(collection)) {
    return _.camelCase(collection);
  }
  return __changeCases(collection, 'camel');
};

export const toSnakeKeys = collection => {
  if (_.isString(collection)) {
    return _.snakeCase(collection);
  }
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
  }

  // ArrayまたはObject、Stringで無ければそのまま
  return collection;
};
