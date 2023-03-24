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
const inputs = document.querySelectorAll("input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  // reset all inputs
  for (let i=0; i<inputs.length; i++) {
    if (inputs[i].value) {
      if (inputs[i].type !== "radio"){
        inputs[i].value = ""
      }
    }
    if (inputs[i].type === "radio") {
      inputs[i].removeAttribute("checked")
    }

  }
  modalbg.style.display = "block";
  addForm();
  hideSuccess();
}

//close modal
function closeModal() {
  modalbg.style.display = "none";
  hideSuccess();
  addForm();
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
  hideForm();
  addSuccess();

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

// Repeated Function
// Hiding formular
function hideForm() {
  document.getElementById('formulaire').classList.remove('block');
  document.getElementById('formulaire').classList.add('hidden');
}
// Apply display:block to the formular
function addForm() {
  document.getElementById('formulaire').classList.remove('hidden');
  document.getElementById('formulaire').classList.add('block');
}

// Hiding Success screen
function hideSuccess() {
  document.getElementById('success').classList.remove('block');
  document.getElementById('success').classList.add('hidden');
}

// Apply display:block to the success screen
function addSuccess() {
  document.getElementById('success').classList.add('block');
  document.getElementById('success').classList.remove('hidden');
}