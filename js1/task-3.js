function findLongestWord(string = ' ') {
  const stringSplit = string.split(' ');
  //   //May=3, the=3, force=5, be=2, with=4, you=3
  let longestWord = '';
  //   //.=0

  for (const word of stringSplit) {
    // console.log(word);
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
