const nemo = ["nemo"];
const everyOne = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel"];
const largeArray = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      return;
    }
  }
  let t1 = performance.now();
  return t1 - t0;
}

function findNemoForEach(array) {
  let t0 = performance.now();
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found NEMO!");
    }
  });
  let t1 = performance.now();
  return t1 - t0;
}

const everyOneTime = findNemo(everyOne);
console.log(`EveryOne found in ${everyOneTime} milliseconds`);
// const nemoTime = findNemo(nemo);
// console.log(`Nemo found in ${nemoTime} milliseconds`);
// const largeArrayTime = findNemo(largeArray);
// console.log(`Large Array found in ${largeArrayTime} milliseconds`);

// const everyOneForEachTime = findNemoForEach(everyOne);
// console.log(`EveryOne found in ${everyOneForEachTime} milliseconds`);
// const nemoForEachTime = findNemoForEach(nemo);
// console.log(`Nemo found in ${nemoForEachTime} milliseconds`);
// const largeArrayForEachTime = findNemoForEach(largeArray);
// console.log(`Large Array found in ${largeArrayForEachTime} milliseconds`);

// function test() {
//   console.log(a);
//   if (true) {
//     var a = 1;
//   }
// }
// test();
