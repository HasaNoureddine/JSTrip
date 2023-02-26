function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function ValidatePass(pass) {
  var passw = /^[A-Za-z]\w{7,14}$/;
  if (pass.value.match(passw)) {
    return true;
  } else {
    alert(`Try Another Password!`);
    return false;
  }
}
document.getElementById("submit").onclick = function (e) {
  e.preventDefault();
  if (document.getElementById("email") && document.getElementById("password")) {
    if (
      ValidateEmail(document.getElementById("email")) &&
      ValidatePass(document.getElementById("password"))
    ) {
      document.getElementById("anchor").click();
    }
  }
};
