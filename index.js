// Add your functions here
const map = (array, func) => {
  return array.map(element => func(element));
};

const reduce = (arr, func, start) => {
  if (start) {
    return arr.reduce(func, start);
  } else {
    return arr.reduce(func);
  }
};
