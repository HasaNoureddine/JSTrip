function mergesort(arr1, arr2) {
  console.log(`this is arr1 ` + arr1);
  console.log(`this is arr2 ` + arr2);
  let i = 0;
  let j = 0;
  let sorted = [];
  while (i < arr1.length && j < arr2.length) {
    if (+arr1[i] < +arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }
  if (arr1.slice(i).length > 0) {
    sorted = [...sorted, ...arr1.slice(i)];
    console.log(sorted);
    return sorted;
  } else if (arr2.slice(j).length > 0) {
    sorted = [...sorted, ...arr2.slice(j)];
    console.log(sorted);
    return sorted;
  } else {
    console.log(sorted);
    return sorted;
  }
}

function merge(arr) {
  console.log(`this is arr` + arr);
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  return mergesort(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

//-----------------------------------------------------------//

function palindrome(string) {
  console.log(string);
  if (string.length < 2) return string;
  return palindrome(string.slice(1, string.length)) + string[0];
}
//-----------------------------------------------------------//

function Prime(year) {
  isPrime = true;
  let number = 2023 - year;
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
//-----------------------------------------------------------//

class Course {
  constructor(schedeule, instructor) {
    this.schedeule = schedeule;
    this.instructor = instructor;
  }
  checkschedeule() {
    if (this.schedeule == `MWF`) {
      return `You are expected MON WED FRI from 12pm to 5pm`;
    } else {
      return `You are expected SAT and Sun from 9am to 12pm`;
    }
  }
  checkinstructor() {
    if (this.instructor == `JS`) {
      return `Your instructor will be Christopher`;
    } else if (this.instructor == `HTML`) {
      return `Your instructor will be Nour`;
    } else if (this.instructor == `UIUX`) {
      return `Your instructor will be Jouline`;
    } else {
      return `Your instructor will be Charbel`;
    }
  }
}
//-----------------------------------------------------------//

function Reverse(string) {
  let arrReverse = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] >= "0" && string[i] <= "9") {
      arrReverse.push(string[i]);
    }
  }

  let j = arrReverse.length - 1;
  let ans = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] >= "0" && string[i] <= "9") {
      ans += arrReverse[j];
      j--;
    } else ans += string[i];
  }
  console.log(arrReverse);
  return ans;
}

//-----------------------------------------------------------//

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
//-----------------------------------------------------------//

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`show`);
    } else {
      entry.target.classList.remove(`show`);
    }
  });
});
const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el) => obs.observe(el));

//--------------------------------------------------------//
let merge_sort = document.getElementsByClassName("merge")[0];
merge_sort.onclick = function () {
  let x = prompt(`Enter 10 CommaSeperated Values! `);
  x = x.split(",");
  document.getElementsByClassName(
    "answer1"
  )[0].innerHTML = `The Sorted Array is ${merge(x)}!`;
};
//-----------------------------------------------------------//

let palin_drome = document.getElementsByClassName("palbtn")[0];
palin_drome.onclick = function () {
  input = prompt("Enter Word here");
  if (input == palindrome(input)) {
    document.getElementsByClassName("yn")[0].src = "assets/YES.jpg";
  } else {
    document.getElementsByClassName("yn")[0].src = "assets/NO.jpg";
  }
};
//-----------------------------------------------------------//

let rvrs_string = document.getElementsByClassName("rvrsbtn")[0];
rvrs_string.onclick = function () {
  document.getElementsByClassName("textbox3")[0].innerHTML = Reverse(
    prompt(`Enter Text Here!`)
  );
};
//-----------------------------------------------------------//

document.getElementsByClassName("primebtn")[0].onclick = function () {
  if (Prime(prompt(`Enter Birth Year Here!`))) {
    document.getElementsByClassName("textbox4")[0].innerHTML = `YES!`;
  } else {
    document.getElementsByClassName("textbox4")[0].innerHTML = `NO`;
  }
};
//-----------------------------------------------------------//

document.getElementsByClassName("bananabtn")[0].onclick = function () {
  document.getElementsByClassName("textbox5")[0].innerHTML = Consonants(
    prompt(`Enter String Here`)
  );
};

//-----------------------------------------------------------//

document.getElementById("create").onclick = function () {
  if (
    document.getElementById("input1").value &&
    document.getElementById("input2").value
  ) {
    let obj = new Course(
      document.getElementById("input1").value,
      document.getElementById("input2").value
    );

    document.getElementById("output1").onclick = function () {
      if (obj) {
        document.getElementById("CourseDescription").innerHTML =
          obj.checkschedeule();
      }
    };
    document.getElementById("output2").onclick = function () {
      if (obj) {
        document.getElementById("CourseDescription").innerHTML =
          obj.checkinstructor();
      }
    };
  }
};
