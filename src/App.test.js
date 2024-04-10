/* eslint-disable no-restricted-globals */
// import { capitalize, double, filterEven, sum, average } from "./utils";

// describe("capitalize", () => {
//   test("should capitalize first letter of word", () => {
//     expect(capitalize("kishan")).toMatch("Kishan");
//   });
//   test("return an empty string is input is empty", () => {
//     expect(capitalize("")).toMatch("");
//   });
// });

// describe("double", () => {
//   test("should double each number in array", () => {
//     expect(double([1, 2, 3])).toEqual([2, 4, 6]);
//   });
//   test("return an empty array if input is empty", () => {
//     expect(double([])).toEqual([]);
//   });
// });

// describe("filterEven", () => {
//   test("should filter even numbers", () => {
//     expect(filterEven([1, 2, 3, 4, 5])).toEqual([2, 4]);
//   });
//   test("should return empty array if no even numbers are there", () => {
//     expect(filterEven([1, 3, 5])).toEqual([]);
//   });
// });

// describe("sum", () => {
//   test("should add all numbers", () => {
//     expect(sum([1, 2, 3])).toBe(6);
//   });
//   test("return 0 for an empty array", () => {
//     expect(sum([])).toBe(0);
//   });
// });
// describe("average", () => {
//   test("should calculate average of all numbers", () => {
//     expect(average([1, 2, 3, 4, 5])).toBe(3);
//   });
//   test("returns NaN for an empty array", () => {
//     expect(average([])).toBeNaN();
//   });
// });

import {
  //  capitalizeValues,
  //  findDuplicates,
  // filterUniqueStrings,
  // filterByProperty,
  // sumNestedArrays ,
  // calculateFactorial,
  // findLongestWord,
  // findLastNegativeNumber,
} from "./utils";

// describe("capitalizeValues", () => {
//   it("Capitalize all strings in the array", () => {
//     expect(capitalizeValues(["apple", "banana", "cherry"])).toEqual([
//       "Apple",
//       "Banana",
//       "Cherry",
//     ]);
//   });

//   it("Handle empty input array", () => {
//     expect(capitalizeValues([])).toEqual([]);
//   });

//   it("Capitalize strings with spaces", () => {
//     expect(capitalizeValues(["hello world", "goodbye space"])).toEqual([
//       "Hello world",
//       "Goodbye space",
//     ]);
//   });

//   it("Original array remains unchanged", () => {
//     expect(capitalizeValues(["abc", "def"])).not.toBe(["abc", "def"]);
//   });

//   it("Capitalize strings with special characters", () => {
//     expect(capitalizeValues(["!@#", "$%^"])).toEqual(["!@#", "$%^"]);
//   });

//   it("Capitalize and check mixed case strings", () => {
//     expect(capitalizeValues(["loRem", "IpSum", "DoLor"])).toEqual([
//       "Lorem",
//       "Ipsum",
//       "Dolor",
//     ]);
//   });
// });

// describe("findDuplicates", () => {
//   it("Find duplicates in an array", () => {
//     expect(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 7])).toEqual([2, 3]);
//   });
//   it("Handle array with no duplicates", () => {
//     expect(findDuplicates([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]);
//   });
//   it("Find duplicates with negative numbers", () => {
//     expect(findDuplicates([1, -2, 3, -2, 4, 5, 3, -6, 7])).toEqual([-2, 3]);
//   });
//   it("Find duplicates with floating-point numbers", () => {
//     expect(findDuplicates([1.5, 2.3, 1.5, 4.8, 2.3])).toEqual([1.5, 2.3]);
//   });
//   it("Handle empty input array", () => {
//     expect(findDuplicates([])).toEqual([]);
//   });
// });

// describe("filterUniqueStrings", () => {
//   it("Filters out duplicate strings", () => {
//     expect(
//       filterUniqueStrings([
//         "apple",
//         "banana",
//         "cherry",
//         "apple",
//         "date",
//         "banana",
//       ])
//     ).toEqual(["apple", "banana", "cherry", "date"]);
//   });

//   it("Handles empty input array", () => {
//     expect(filterUniqueStrings([])).toEqual([]);
//   });

//   it("Handles input with all unique strings", () => {
//     expect(filterUniqueStrings(["one", "two", "three"])).toEqual([
//       "one",
//       "two",
//       "three",
//     ]);
//   });

//   it("Handles input with one repeated string", () => {
//     expect(filterUniqueStrings(["apple", "apple", "apple"])).toEqual(["apple"]);
//   });

//   it("Checks if the output array contains only unique strings", () => {
//     expect(
//       filterUniqueStrings([
//         "apple",
//         "banana",
//         "cherry",
//         "apple",
//         "date",
//         "banana",
//       ])
//     ).toEqual(["apple", "banana", "cherry", "date"]);
//   });

//   it("Checks if the output array length is correct", () => {
//     expect(
//       filterUniqueStrings([
//         "apple",
//         "banana",
//         "cherry",
//         "apple",
//         "date",
//         "banana",
//       ])
//     ).toHaveLength(4);
//   });

//   it("Checks if the function throws an error with invalid input", () => {
//     expect(() => filterUniqueStrings("invalid")).toThrow();
//   });
// });


// describe("filterByProperty",() => {


//     it("Filters objects with specified property",() => {
//         expect(filterByProperty([{ name: 'apple', color: 'red' }, { color: 'yellow' }, { name: 'cherry', color: 'red' }],'name')).toEqual([{ name: 'apple', color: 'red' }, { name: 'cherry', color: 'red' }])
//     })


//     it("Handles empty input array",() => {
//         expect(filterByProperty([],name)).toEqual([]);
//     })

//     it("Handles objects with property having falsy values",() => {
//         expect(filterByProperty([{ name: 'apple', color: 'red' }, { size: 0 }, { name: 'cherry', color: 'red' }], 'size')).toEqual([{ size: 0 }]);

//     })

//     it("Checks if the output array contains only objects with the specified property",() => {
//         expect(filterByProperty([{ name: 'apple', color: 'red' }, { color: 'yellow' }, { name: 'cherry', color: 'red' }], 'name')).toEqual([{ name: 'apple', color: 'red' },{ name: 'cherry', color: 'red' }])
//     })

//     it("Checks if the function throws an error with invalid input",() => {
//         expect(() => filterByProperty('invalid', 'name')).toThrow()
//     })


//  }) 

// describe("sumNestedArrays",() => {
//     it("Sum numbers in a nested array",() => {
//         expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual(21);
//     })
//     it("Sum numbers in an empty nested array",() => {
//         expect(sumNestedArrays([])).toEqual(0);
//     })
//     it("Ensure original array remains unchanged",() => {
//        const arr = [[1, 2], [3, 4, 5], [6]];
//        sumNestedArrays(arr)
//        expect(arr).toEqual([[1, 2], [3, 4, 5], [6]]);
//     })
//     it("Check if the output is a number", () => {
//       expect(typeof sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual(
//         "number"
//       );
//     });
// })


// describe("calculateFactorial",() => {
    
//     it("Calculate factorial of 0",() => {
//         expect(calculateFactorial(0)).toEqual(1)
//     })

//     it("Calculate factorial of 1",() => {
//         expect(calculateFactorial(1)).toEqual(1)
//     })
    
//     it("Calculate factorial of 5",() => {
//         expect(calculateFactorial(5)).toEqual(120)
//     })
    
//     it("Calculate factorial of 10",() => {
//         expect(calculateFactorial(10)).toEqual(3628800)
//     })
    
//     it("Check if the output is a number",() => {
//        expect(typeof calculateFactorial(5)).toEqual('number')
//     })

//     it("Handle negative input",() => {
//         expect(() => calculateFactorial(-5)).toThrow("Input must be a non-negative integer")
//     })
//  })


//  describe("findLongestWord",() => {

//     it("Find longest word in a sentence",() => {
//             expect(findLongestWord("The quick brown fox jumps over the lazy dog.")).toEqual('quick')

//     })


    
//     it("Find longest word in a sentence with a single word",() => {
//         expect(findLongestWord('Hello')).toEqual('Hello');
//     })
    
    
//     it("Find longest word in an empty string",() => {
//         expect(findLongestWord("")).toEqual(undefined);
//     })
    
    
//     it("Check if the output is a string",() => {
//         expect(typeof findLongestWord("The quick brown fox jumps over the lazy dog.")).toEqual('string')
//     })
//  })



//  describe("findLastNegativeNumber",() => {
//     it("Find last negative number",() => {
//         expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toBe(-5)
//     })
//     it("Find last negative number in an array with no negative numbers",() => {
//         expect(findLastNegativeNumber([3, 7, 2, 9, 5])).toBe(undefined)
//     })
//     it("Find last negative number in an array with decimal numbers",() => {
//         expect(findLastNegativeNumber([3.5, -7.2, -2.1, 9.7, 5.3])).toBe(-2.1)
//     })
//     it("Check if the output is a number",() => {
//         expect(typeof findLastNegativeNumber([3, -7, -2, 9, -5])).toBe('number')
//     })
//     it("Check if the function throws an error with invalid input",() => {
//         expect(() => findLastNegativeNumber('invalid')).toThrow()
//     })
//  })