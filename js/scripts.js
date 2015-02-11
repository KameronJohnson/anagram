var anagram = function(word1, word2) {
  var userWord = word1.toLowerCase().split("").sort().join("");
  var matchingArray = [];

  word2.forEach(function(word) {
    if (word.toLowerCase().split("").sort().join("") === userWord) {
      matchingArray.push(word);
    }
  });
  return(matchingArray);
};
