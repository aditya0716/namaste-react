export const filterData = (searchText, allRestaurants) => {
  const filteredResult = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredResult;
};
