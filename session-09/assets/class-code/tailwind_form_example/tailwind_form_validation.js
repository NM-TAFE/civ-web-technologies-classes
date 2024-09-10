// JavaScript to handle form submission and validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission (for demonstration purposes)

    // Perform form validation
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subscribeCheckbox = document.getElementById("subscribe");
    const subjectInput = document.getElementById("subject");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subscribeError = document.getElementById("subscribeError");
    const subjectError = document.getElementById("subjectError");

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.classList.remove("hidden");
      isValid = false;
    } else {
      nameError.classList.add("hidden");
    }

    if (
      emailInput.value.trim() === "" ||
      !validateEmail(emailInput.value.trim())
    ) {
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }

    if (!subscribeCheckbox.checked) {
      subscribeError.classList.remove("hidden");
      isValid = false;
    } else {
      subscribeError.classList.add("hidden");
    }

    if (subjectInput.value === "") {
      subjectError.classList.remove("hidden");
      isValid = false;
    } else {
      subjectError.classList.add("hidden");
    }

    // If form is valid, display confirmation message
    if (isValid) {
      document.getElementById("confirmationMessage").classList.remove("hidden");
      // If form is valid, submit the form
      const postUrl = this.dataset.postUrl;
      this.action = postUrl;
      this.submit();
      console.log(`Action: ${this.submit()}`);
      debugger;
    }
  });

// Function to validate email address format
function validateEmail(email) {
  debugger;
  const reg_ex = /\S+@\S+\.\S+/;
  return reg_ex.test(email);
}
