const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastname");
const userEmail = document.getElementById("userEmail");
const userpassword = document.getElementById("userpassword");
function isValidfirstName(username) {
  return /^[a-z]+$/.test(username);
}
function isValidlastName(lastName) {
  return /^[a-z]+$/.test(lastName);
}
function isValiduserEmail(userEmail) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail);
}
function isValidPassword(userpassword) {
  // return /[a-z]/.test(password) &&
  //  /[A-Z]/.test(password) &&
  //  /[0-9]/.test(password);
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
  return (
    /[0-9]/.test(userpassword) &&
    /[a-z]/.test(userpassword) &&
    /[A-Z]/.test(userpassword)
  );
}
function showOrHideTip(show, element1, element2, element3) {
  // show element when show is true, hide when false

  if (show) {
    element1.style.borderColor = "hsl(0, 100%, 74%)";
    element2.style.opacity = "1";
    element3.style.opacity = "1";
  } else {
    element1.style.borderColor = "hsl(248, 32%, 49%) ";
    element2.style.opacity = "0";
    element3.style.opacity = "0";
  }
}
function createListener(validator) {
  return (e) => {
    const text = e.target.value;
    //   console.log(text);
    const valid = validator(text);
    console.log(valid);
    const showTip = text !== "" && !valid;
    console.log(showTip);
    const errorMsg1 = e.target;
    const errorMsg2 = e.target.nextElementSibling;
    const errorMsg3 = e.target.nextElementSibling.nextElementSibling;
    console.log(errorMsg1, errorMsg2, errorMsg3);
    showOrHideTip(showTip, errorMsg1, errorMsg2, errorMsg3);
  };
}
firstName.addEventListener("input", createListener(isValidfirstName));
lastName.addEventListener("input", createListener(isValidlastName));
userEmail.addEventListener("input", createListener(isValiduserEmail));
userpassword.addEventListener("input", createListener(isValidPassword));
