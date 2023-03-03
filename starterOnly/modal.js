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
  // suppr la ligne à la fin
  event.preventDefault();
  //
  var form = document.forms.reserve;
  // const formData = new FormData(event.currentTarget);
  // const entries = Object.fromEntries(formData.entries());
  // console.log(entries);
  const success = document.querySelector('.success');
  // Ajouter condition d'error
  var first = form.first;
  var last = form.last;
  var email = form.email;
  var birthdate = form.birthdate;
  var quantity = form.quantity;
  var location = form.location;

  var errorMessages = {
    first: "Veuillez saisir votre prénom",
    last: "Veuillez saisir votre nom",
    email: "Veuillez saisir une adresse email valide",
    birthdate: "Veuillez saisir votre date de naissance",
    quantity: "Veuillez saisir le nombre de tournois",
    location: "Veuillez sélectionner une ville",
  };

  var isValid = true;

  if (first.value === "") {
    isValid = false;
    first.setAttribute("data-error", errorMessages.first);
  } else {
    first.removeAttribute("data-error");
  }

  if (last.value === "") {
    isValid = false;
    last.setAttribute("data-error", errorMessages.last);
  } else {
    last.removeAttribute("data-error");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    isValid = false;
    email.setAttribute("data-error", errorMessages.email);
  } else {
    email.removeAttribute("data-error");
  }

  if (birthdate.value === "") {
    isValid = false;
    birthdate.setAttribute("data-error", errorMessages.birthdate);
  } else {
    birthdate.removeAttribute("data-error");
  }

  if (quantity.value === "") {
    isValid = false;
    quantity.setAttribute("data-error", errorMessages.quantity);
  } else {
    quantity.removeAttribute("data-error");
  }

  if (!location.value) {
    isValid = false;
    location.setAttribute("data-error", errorMessages.location);
  } else {
    location.removeAttribute("data-error");
  }

  if (isValid) {
    form.submit();
  }
}

