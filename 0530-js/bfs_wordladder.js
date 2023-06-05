function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const visited = new Set();
  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);
  let level = 1;

  while (beginSet.size > 0) {
      const nextSet = new Set();
      for (let word of beginSet) {
          for (let i = 0; i < word.length; i++) {
              for (let j = 0; j < 26; j++) {
                  const newWord = word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1);
                  if (endSet.has(newWord)) {
                      console.log(`Found ${newWord} at level ${level + 1}`);
                      return level + 1;
                  }
                  if (wordSet.has(newWord) && !visited.has(newWord)) {
                      console.log(`Transformed ${word} to ${newWord} at level ${level}`);
                      visited.add(newWord);
                      nextSet.add(newWord);
                  }
              }
          }
      }
      beginSet = nextSet;
      level++;
      if (beginSet.size > endSet.size) {
          [beginSet, endSet] = [endSet, beginSet];
      }
  }

  return 0;
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5
