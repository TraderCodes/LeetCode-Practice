const uncompress = (s) => {
  // todo
  let final = [];
  let number = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (!isNaN(s[j])) {
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        final.push(s[j]);
      }
      j++;
      i = j;
    }
  }
  return final.join('');
};

console.log(uncompress('10d10j'));

module.exports = {
  uncompress,
};

// solution 2 const uncompress = (s) => {
  let result = [];
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
};



