exports.setRestaurant = (state, action) => {
  const restaurant = action.payload;
  state.restaurant = restaurant;
};

exports.setMenuItems = (state, action) => {
  const menuItems = action.payload;
  state.menuItems = menuItems;
};

exports.setCurrentItem = (state, action) => {
  const currentItem = action.payload;
  state.currentItem = currentItem;
};

exports.setToggleBox = (state, action) => {
  state.toggleBox = !state.toggleBox;
};
