// Question => given two strings s and t, return true if t is angram of s, else false

let s = "anagram";
let t = "nagaram";

function isAnagram(s, t) {
  if (s.length != t.length) {
    return "false";
  }

  // creating a map, containing character of string as key and count of character as value
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  // looping over string t
  for (let i = 0; i < t.length; i++) {

    // checking if current character already exists
    if (map.has(t[i])) {
    // reducing count by 1
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      return "false";
    }
  }

  let keys = map.keys();

  //checking all keys has value as 0
  for (let key of keys) {
    if (map.get(key) != 0) {
      return "false";
    }
  }

  console.log(map);
  return "true";
}

console.log(isAnagram(s, t));

// time complexity of this solution in O(n);
