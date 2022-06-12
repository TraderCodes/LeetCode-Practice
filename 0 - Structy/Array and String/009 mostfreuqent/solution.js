const mostFrequentChar = (s) => {
  // todo
  let final = {};
  let bignumber = 0;
  for (let char of s) {
    if (!(char in final)) {
      final[char] = 0;
    }
    final[char] += 1;
  }
  let best = null;
  //   to skip the first look using (best === null ||)
  //   that means when best is null we best best = first char
  for (let char of s) {
    if (best === null || final[char] > final[best]) {
      best = char;
    }
  }
  return best;
};

//   using max value logic and counter hash map
// time comp = 0(n)
// first for look = 0(n) + second for look = 0(n) = 0(2n) so is still 0(n)
// liner space

console.log(mostFrequentChar('fffbba'));

module.exports = {
  mostFrequentChar,
};
