const compress = (s) => {
  // todo
  let j = 0;
  let i = 0;

  let finalAnswer = [];
  while (j <= s.length) {
    if (s[j] === s[i]) {
      j++;
    } else {
      const numberChar = j - i;
      if (numberChar === 1) {
        finalAnswer.push(s[i]);
      } else {
        finalAnswer.push(String(numberChar), s[i]);
      }
      i = j;
    }
  }
  return finalAnswer.join('');
};

module.exports = {
  compress,
};


// use two pointers j and i , j = the end of streak and i = start of streak 