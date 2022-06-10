const maxValue = (nums) => {
  // todo
  let maxNumber = -Infinity;
  for (let num of nums) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  return maxNumber;
};

module.exports = {
  maxValue,
};

// set outer variable maxValue to -infinite 
// compare number to maxValue
// if all value is negative it will always be bigger than -infinity
