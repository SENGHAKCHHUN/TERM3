// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  // TODO
  let subjecList = [];
  let userName = document.querySelector("#username");
  let email = document.querySelector("#email");
  let gender = document.getElementsByName("genderSelect");
  let fruits = document.querySelector("#fruit");
  let subjects = document.querySelectorAll(".subject");
  let message = document.querySelector("#sms");

  // 2- change labels on right side
  // TODO
  document.querySelector("#getUsername").textContent = userName.value;
  document.querySelector("#getEmail").textContent = email.value;
  document.querySelector("#getFruit").textContent = fruits.value;
  document.querySelector("#getMessage").textContent = message.value;

  gender.forEach(sex => {
    if (sex.checked) {
      document.querySelector("#getGender").textContent = sex.value;
    }
  });
  
  subjects.forEach(subject => {
    if (subject.checked) {
      subjecList.push(" "+subject.value);
    }
  });
  document.querySelector("#getSubject").textContent = subjecList;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
