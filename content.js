function mergesort(arr1, arr2) {
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

  if (arr1.slice(i).length > 0) {
    return [sorted, ...arr1.slice(i)];
  } else if (arr2.slice(j).length > 0) {
    return [sorted, ...arr2.slice(j)];
  } else {
    return sorted;
  }
}

function merge(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  return mergesort(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

function palindrome(string) {
  console.log(string);
  if (string.length < 2) return string;
  return palindrome(string.slice(1, string.length)) + string[0];
}

function Prime(year) {
  isPrime = false;
  let age = prompt("Enter Year of Birth Here!");
  let number = 2023 - age;
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = true;
    }
  }
  return isPrime;
}

class Course {
  constructor(schedeule, instructor) {
    this.schedeule = schedeule;
    this.instructor = instructor;
  }
  checkschedeule() {
    if (this.schedeule == `mwf`) {
      return `You are expected MON WED FRI from 12pm to 5pm`;
    } else {
      return `You are expected SAT and Sun from 9am to 12pm`;
    }
  }
  checkinstructor() {
    if (this.instructor == JS) {
      return `Your instructor will be Christopher`;
    } else if ((this.instructor = HTML)) {
      return `Your instructor will be Nour`;
    } else if (this.instructor == UI / Ux) {
      return `Your instructor will be Jouline`;
    } else {
      return `Your instructor will be Charbel`;
    }
  }
}

function Reverse(string) {
  let answer = ``;
  while (string.length > 0) {
    answer += string[string.length - 1];
    string = string.slice(0, string.length - 1);
  }
}

function Consonants(string) {
  let vowels = [`a`, `o`, `i`, `e`, `u`];
  for (i = 0; i < string.length - 1; i++) {
    if (vowels.includes(string[0])) {
      break;
    } else {
      ltr = string.charAt(0);
      string = string.slice(1) + ltr;
    }
  }
  string += `ay`;
  return string;
}
