iterative
const longestStreak = (head) => {
  //    first set a max streak to return
  let maxStreak = 0;
  let currentStreak = 0;
  let currentHead = head;
  let prvNum = null;

  while (currentHead !== null) {
    if (currentHead.val === prvNum) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    prvNum = currentHead.val;
    currentHead = currentHead.next;
  }

  return maxStreak;
};



// n = number of nodes
// Time: O(n)
// Space: O(1)
