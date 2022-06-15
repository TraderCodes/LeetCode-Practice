const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    //     don't touch the 5 and look for i with 5 to swap to j
    if (nums[j] === 5) {
      j -= 1;
      //       when 5 is found swap it to j and i ++ to search will j is bigger than i
      //       j -- and i ++
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums;
};

module.exports = {
  fiveSort,
};
