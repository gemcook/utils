import * as base64 from './base64';

// -----------------------------------------------------------------------------
// toCamelKeys
// -----------------------------------------------------------------------------

// オブジェクト内のキーのスネークをキャメルに変換する
test('Base 64 Decode', () => {
  const expectedData = "abc123!?$*&()'-=@~";

  expect(expectedData).toEqual(base64.decode('YWJjMTIzIT8kKiYoKSctPUB+'));
});
