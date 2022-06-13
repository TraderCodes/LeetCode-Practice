const pairProduct = (numbers, targetProduct) => {
  // todo
  const previousNumber = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const Numberneeded = targetProduct / num;

    //     look up the key in the object
    if (Numberneeded in previousNumber) {
      return [i, previousNumber[Numberneeded]];
    }
    previousNumber[num] = i;
  }
};

module.exports = {
  pairProduct,
};

// 1) store prvious seen numbers in an object so we can check later for match
// n = array length
// time = 0(n)
// iterating through hash map is constent time + look up is constent
// storing hash map would be liner
