function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

// usage example:
const uniqueArray = (a) => {
  const unique = a.filter(onlyUnique);
  return unique;
};

export default uniqueArray;
