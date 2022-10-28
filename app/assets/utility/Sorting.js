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
        console.log('a', a.price.replace(/\s/g, ''));

        console.log('b', b.price.replace(/\s/g, ''));

        return (
          parseFloat(b.isSale ? b.salePrice.replace(/\s/g, ''): b.price.replace(/\s/g, '')) - parseFloat(a.isSale ? a.salePrice.replace(/\s/g, ''): a.price.replace(/\s/g, ''))
        );
      });
      break;
    case 'price-L-H':
      
      returnData = data.slice().sort((a, b) => {

        console.log('a', a.price.replace(/\s/g, ''));

      console.log('b', b.price.replace(/\s/g, ''));
        return (
          parseFloat(a.isSale ? a.salePrice.replace(/\s/g, ''): a.price.replace(/\s/g, '')) - parseFloat(b.isSale ? b.salePrice.replace(/\s/g, ''): b.price.replace(/\s/g, ''))
        );
      });
      break;
    default:
  }
  console.log(returnData);
  return returnData;
};
