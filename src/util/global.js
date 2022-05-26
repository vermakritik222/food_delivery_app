const dynamicSort = (property) => {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

const groupBy = (arr, property) => {
  return arr?.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
};

exports.handelDataForMenu = (menu) => {
  menu?.sort(dynamicSort("Category"));
  let groupedData = groupBy(menu, "Category");
  const arrKey = [];
  for (var key in groupedData) {
    arrKey.push(key);
  }
  return { arrKey, groupedData };
};
