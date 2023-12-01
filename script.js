const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const button = document.getElementById("request-button");

// form.addEventListener(())

// button.addEventListener("click",change)

// function change() {
//     emailError.textContent = "invalid"
//     emailError.style.color = "red"
// }

form.addEventListener("submit", (e) => {
  emailError.textContent = "";
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = " Oops! Please check your email";
     emailError.style.color = "#FB3E3E";
     emailError.style.fontFamily = "Chivo";
     emailError.style.fontSize = "12px";
     emailError.style.fontWeight = "400"
     
    //  font-size: 12px;
    //  font-style: normal;
    //  font-weight: 400;
    //  line-height: normal;
  }
  e.preventDefault();
});
