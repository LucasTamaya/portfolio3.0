const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const message = document.getElementById("message");
const btn = document.getElementById("btn");

let emailState = false;
let usernameState = false;
let messageState = false;

// Detect email input
email.addEventListener("input", () => {
  if (!isValidEmail(email.value)) {
    emailState = false;
    console.log("email = " + emailState);
  }

  if (isValidEmail(email.value)) {
    emailState = true;
    console.log("email = " + emailState);
  }

  // Si un des inputs n'est pas valide, on masque le bouton submit
  if (!emailState || !usernameState || !messageState) {
    btn.classList.remove("enable");
    btn.classList.add("disable");
  }

  // Si tous les inputs sont valides, on dévoile bouton
  if (emailState && usernameState && messageState) {
    btn.classList.remove("disable");
    btn.classList.add("enable");
  }
});

// Detect username input
username.addEventListener("input", () => {
  if (username.value === "") {
    usernameState = false;
    console.log("username = " + usernameState);
  }

  if (username.value != "") {
    usernameState = true;
    console.log("username = " + usernameState);
  }

  // Si un des inputs n'est pas valide, on masque le bouton submit
  if (!emailState || !usernameState || !messageState) {
    btn.classList.remove("enable");
    btn.classList.add("disable");
  }

  // Si tous les inputs sont valides, on dévoile bouton
  if (emailState && usernameState && messageState) {
    btn.classList.remove("disable");
    btn.classList.add("enable");
  }
});

// Detect message input
message.addEventListener("input", () => {
  if (message.value === "") {
    messageState = false;
    console.log("message = " + messageState);
  }

  if (message.value != "") {
    messageState = true;
    console.log("message = " + messageState);
  }

  // Si un des inputs n'est pas valide, on masque le bouton submit
  if (!emailState || !usernameState || !messageState) {
    btn.classList.remove("enable");
    btn.classList.add("disable");
  }

  // Si tous les inputs sont valides, on dévoile bouton
  if (emailState && usernameState && messageState) {
    btn.classList.remove("disable");
    btn.classList.add("enable");
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// const isValidInput = (input, inputState) => {
//   if (input.value === "") {
//     inputState = false;
//     console.log(inputState);
//   }

//   if (input.value != "") {
//     inputState = true;
//   }

// };

// const isValidInputState = () => {
//   // Si un des inputs n'est pas valide, on masque le bouton submit
//   if (!emailState || !usernameState || !messageState) {
//     console.log("un des inputs n'est pas valide");
//     btn.classList.remove("enable");
//     btn.classList.add("disable");
//   }

//   if (emailState && usernameState && messageState) {
//     console.log("tous les inputs sont valides");
//     btn.classList.remove("disable");
//     btn.classList.add("enable");
//   }
// };
