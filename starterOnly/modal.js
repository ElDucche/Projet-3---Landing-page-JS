function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal
function closeModal() {
  modalbg.style.display = "none";
}

//get form data
function validate(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const entries = Object.fromEntries(formData.entries());
  console.log(entries);
  if (!entries.location) {
    errorMessage('radio');
    return
  }
  event.currentTarget.classList.add('hidden');
  document.getElementById('success').classList.remove('hidden');
  document.getElementById('success').classList.add('block');

}

function errorMessage(id) {
  let element = document.getElementById(id);
  if (element) {
    element.classList.add('border-error');
  }
  let span = document.getElementById(id+"-span")
  span.classList.add('error');
  // remove class hidden
  span.classList.remove('hidden')
  //add class block
  span.classList.add('block')
}

function resetMessage(id) {
  //remove border style
  document.getElementById(id).classList.remove('border-error')
  //remove class block
  document.getElementById(id+"-span").classList.remove('block');
  //add class hidden
  document.getElementById(id+"-span").classList.add('hidden');
}
