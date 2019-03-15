import * as collection from './collection';

// -----------------------------------------------------------------------------
// toCamelKeys
// -----------------------------------------------------------------------------

// オブジェクト内のキーのスネークをキャメルに変換する
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

// オブジェクト内のオブジェクトのキーのスネークをキャメルに変換する
test('toCamelKeys (case Object in Object)', () => {
  const snakeCase = {
    gem_data: {
      gem_id: 1,
      gem_name: 'ダイヤモンド',
      gem_price: 100,
    },
  };

  const expectedData = {
    gemData: {
      gemId: 1,
      gemName: 'ダイヤモンド',
      gemPrice: 100,
    },
  };

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});

// オブジェクト内のキーのみをキャメルに変換する
test('toCamelKeys (case Object in Array)', () => {
  const snakeCase = {
    gem_data: ['gem_id', 1, 'gem_name', 'ダイヤモンド', 'gem_price', 100],
  };

  const expectedData = {
    gemData: ['gem_id', 1, 'gem_name', 'ダイヤモンド', 'gem_price', 100],
  };

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});

// オブジェクト内のキーのスネークをキャメルに変換する
test('toCamelKeys (case Object in Array in Object)', () => {
  const snakeCase = {
    gem_one: [
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
    ],
    gem_two: [
      {
        gem_id: 3,
        gem_name: 'オパール',
        gem_price: 300,
      },
      {
        gem_id: 4,
        gem_name: 'ルビー',
        gem_price: 400,
      },
    ],
  };

  const expectedData = {
    gemOne: [
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
    ],
    gemTwo: [
      {
        gemId: 3,
        gemName: 'オパール',
        gemPrice: 300,
      },
      {
        gemId: 4,
        gemName: 'ルビー',
        gemPrice: 400,
      },
    ],
  };

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});

// 配列内のオブジェクトのキーのスネークをキャメルに変換する
test('toCamelKeys (case Array in Object)', () => {
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

// 文字列のスネークをキャメルに変換する
test('toCamelKeys (case String)', () => {
  const snakeCase = 'gem_id';
  const expectedData = 'gemId';

  expect(expectedData).toEqual(collection.toCamelKeys(snakeCase));
});
