import _ from 'lodash';
import Case from 'case';
import {camelizeKeys} from 'ramda-extension';

export const toCamelKeys = collection => {
  if (_.isString(collection)) {
    return __changeCases(collection, 'camel');
  } else {
    return camelizeKeys(collection);
  }
};
export const toSnakeKeys = collection => {
  return __changeCases(collection, 'snake');
};

const __changeCases = (collection, caseName) => {
  if (_.isArray(collection)) {
    return collection.map(value => __changeCases(value, caseName));
  } else if (_.isPlainObject(collection)) {
    let obj = {...collection};
    obj = _.mapKeys(obj, (v, k) => Case[caseName](k));
    return obj;
  } else if (_.isString(collection)) {
    return Case[caseName](collection);
  }

  // ArrayまたはObject、Stringで無ければそのまま
  return collection;
};
