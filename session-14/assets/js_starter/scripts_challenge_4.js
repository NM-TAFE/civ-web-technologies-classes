// Challenge 4 Starter
// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  // save the field to a variable
  let field = event.target;

  if (!field.id) return;

  // save the field to the localstorage
  localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  // get all the fields in the form
  let fields = form.elements;

  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
  // get all the fields in the form
  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
// input - typing
form.addEventListener("input", inputHandler);

// // submitting - submitting clear
// form.addEventListener("submit", clearStorage);
