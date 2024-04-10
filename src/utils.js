// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function double(arr) {
//   return arr.map((num) => num * 2);
// }

// function filterEven(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// function sum(arr) {
//   return arr.reduce((accu, curr) => accu + curr, 0);
// }

// function average(arr) {
//   const sum = arr.reduce((accu, curr) => accu + curr, 0);
//   return sum / arr.length;
// }

// export { capitalize, double, filterEven, sum, average };


// ----------assignment-7--------

export function capitalizeValues(arr) {
  return arr.map((str) => {
    const firstChar = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1).toLowerCase();
    return firstChar + restOfStr;
  });
}

export function findDuplicates(arr) {
  const uniqueNumbers = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (uniqueNumbers.has(num)) {
      duplicates.add(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  return Array.from(duplicates);
}

export function filterUniqueStrings(strings) {
  return strings.filter((str, index, arr) => arr.indexOf(str) === index);
}


export function filterByProperty(objects, property) {
  return objects.filter((obj) => obj.hasOwnProperty(property));
}

export function sumNestedArrays(arr) {
  return arr.reduce(
    (sum, curr) => sum + curr.reduce((innerSum, num) => innerSum + num, 0),
    0
  );
}

export function calculateFactorial(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce(
        (product, num) => product * num,
        1
      );
}

export const findLongestWord = (sentence) => {
  if (sentence.trim() === "") {
    return undefined;
  }

  const words = sentence.split(" ");
  return words.find(
    (word) => word.length === Math.max(...words.map((word) => word.length))
  );
};

export function findLastNegativeNumber(arr) {
  return arr.reverse().find((element) => element < 0);
}