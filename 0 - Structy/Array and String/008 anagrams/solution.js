const anagrams = (s1, s2) => {
  // todo
  const final = {};
  for (let char of s1) {
    //     check if char is in s1
    if (!(char in final)) {
      final[char] = 0;
    }
    final[char] += 1;
  }
  for (let char of s2) {
    if (final[char] === undefined) {
      return false;
    } else {
      final[char] -= 1;
    }
  }
  for (let char in final) {
    if (final[char] !== 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  anagrams,
};
