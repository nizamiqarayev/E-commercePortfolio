export const Sorting = (data, sortType) => {
  let returnData = [];
  switch (sortType) {
    case 'A-Z':
      returnData = data.slice().sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      break;
    case 'Z-A':
      returnData = data.slice().sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      break;
    case 'price-H-L':
      returnData = data.slice().sort((a, b) => {
       return b.price - a.price
      });
      break;
    case 'price-L-H':
      returnData = data.slice().sort((a, b) => {
       return a.price-b.price
      });
      break;
    default:
  }
  return returnData;
};
