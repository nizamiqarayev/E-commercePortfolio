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
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      break;
    case 'price-L-H':
      returnData = data.slice().sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      break;
    default:
  }
  return returnData;
};
