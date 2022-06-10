// solution 1
const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  isPrime,
};
// solution 2 
const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};


//  2 is the smallest prime number so 1 is not prime
// if n is divisible by i then we found a factor
//  n is divisible by n so we don't include n
//  n is divisible by 1 so we don't inclue 1
