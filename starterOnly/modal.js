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
  console.log('je suis appelé')
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const entries = Object.fromEntries(formData.entries());
  console.log(entries);
  if (!entries.location) {
    errorMessage('radio');
    return
  }
  const success = document.querySelector('.success');
  success.style.display = 'block';

  closeModal();

}

function errorMessage(id) {
  let element = document.getElementById(id);
  element.classList.add('error');
  element.style.display = 'block';
}

function resetMessage(id) {
  document.getElementById(id).style.display='none'
}
