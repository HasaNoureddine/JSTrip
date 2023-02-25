function mergesort(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  let i = 0;
  let j = 0;
  let sorted = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }
  console.log(sorted);
  return [...sorted, ...arr1, ...arr2];
}

function merge(arr) {
  console.log(arr);
  if (arr.length < 2) {
    return arr;
  } else {
    mid = Math.floor(arr.length / 2);
    return mergesort(
      merge(arr.slice(0, mid), merge(arr.slice(mid, arr.length - 1)))
    );
  }
}

console.log([3, 2, 1, 4].slice(2, 4) - 1);
console.log("the answer is " + merge([3, 2, 1, 4]));
