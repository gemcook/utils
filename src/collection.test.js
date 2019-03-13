import * as collection from './collection';

test('toCamelKeys (case Array)', () => {
  const snakeCase = [
    {
      gem_id: 1,
      gem_name: 'ダイヤモンド',
      gem_price: 100,
    },
    {
      gem_id: 2,
      gem_name: 'ターコイズ',
      gem_price: 200,
    },
  ];

  const expectedData = [
    {
      gemId: 1,
      gemName: 'ダイヤモンド',
      gemPrice: 100,
    },
    {
      gemId: 2,
      gemName: 'ターコイズ',
      gemPrice: 200,
    },
  ];

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});

test('toCamelKeys (case Object)', () => {
  const snakeCase = {
    gem_id: 1,
    gem_name: 'ダイヤモンド',
    gem_price: 100,
  };

  const expectedData = {
    gemId: 1,
    gemName: 'ダイヤモンド',
    gemPrice: 100,
  };

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});

test('toCamelKeys (case String)', () => {
  const snakeCase = 'gem_id';
  const expectedData = 'gemId';

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});
