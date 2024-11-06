// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (numbers: number[]): number[] => {
  const uniqueArray: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueArray.includes(numbers[i])) {
      uniqueArray.push(numbers[i]);
    }
  }
  return uniqueArray;
};

const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 55, 5]);
console.log(uniqueArray);
