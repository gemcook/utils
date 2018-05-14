/* @flow */
export const getDetailMatchedById = (id: any, data: Array<any>) => {
  const shapeId = Number(id);
  const results = data.filter(detail => {
    return shapeId === detail.id;
  });
  return results[0];
};
