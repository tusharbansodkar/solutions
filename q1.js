// Qustion => return true if array contains duplicate items, else false.

let arr = [1, 2, 3, 1];

function isTwice(arr) {
  let frequeny = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequeny[arr[i]]) {
      frequeny[arr[i]]++;
      if (frequeny[arr[i]] > 1) return "true";
    } else {
      frequeny[arr[i]] = 1;
    }
  }

  return "false";
}

if (arr.length <= 1) {
  console.log("false");
} else {
  console.log(isTwice(arr));
}


// this solution has O(n) time complexity;