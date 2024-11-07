// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

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
  "I love typescript",
  "typescript"
);

console.log(duplicateWordCount);
