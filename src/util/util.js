const giveFrequency = (arr) => {
  const map = arr.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  return map;
};

const addQuntToShoppingCartData = (data, quntMap) => {
  return data?.map((el) => {
    const qunt = quntMap.get(el._id);
    return {
      ...el,
      qunt,
    };
  });
};

export { giveFrequency, addQuntToShoppingCartData };
