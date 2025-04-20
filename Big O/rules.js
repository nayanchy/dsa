/**
 * Rule 01: Big O is the worst case scenario
 * Rule 02: Remove Constants
 */
const everyOne = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel"];
const largeArray = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break; // Break improves the code but not the Big O
    }
  }
  let t1 = performance.now();
  return t1 - t0;
}

const everyOneTime = findNemo(everyOne);
console.log(`EveryOne found in ${everyOneTime} milliseconds`);

/**
 * Rule 02: Remove Constants
 * Here the Big O is O(n)
 * This comes like this: O(1+ n/2 +100) = O(n/2+101) = O(n/2 + 1) = O(n)
 */

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
/**
 * Rule 02: Different Term for Inputs
 * Big O is O(n) + O(m) = O(n+m)
 *
 */

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => console.log(box)); // O(n)
  boxes2.forEach((box) => console.log(box)); // O(m)
}

// Log all pairs of Array in this format: [a b] [b c] [c d] and so on

const boxes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const logAllPairs = (boxes) => {
  boxes.forEach((box, i) => {
    if (i + 1 >= boxes.length) return;
    console.log(`[${box} ${boxes[i + 1]}]`);
  });
};

logAllPairs(boxes);

// Log all pairs of Array
// Here the Big O is O(n^2)

const logAllPairs2 = (boxes) => {
  boxes.forEach((box, i) => {
    boxes.forEach((box2, j) => {
      console.log(box, box2);
    });
  });
};

logAllPairs2(boxes);

/**
 * Rule 04: Drop non dominant terms
 */
