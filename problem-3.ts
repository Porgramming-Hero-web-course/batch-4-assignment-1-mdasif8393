// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

const countWordOccurrences = (sentence: string, word: string): number => {
  const totalWords = sentence.toLowerCase().split(" ");

  let count = 0;

  for (let i = 0; i < totalWords.length; i++) {
    if (totalWords[i] === word.toLocaleLowerCase()) {
      count++;
    }
  }

  return count;
};

const duplicateWordCount = countWordOccurrences(
  "I love typeScript",
  "typeScript"
);

console.log(duplicateWordCount);
