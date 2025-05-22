// localStorage API
// Store data
let localData = "The data that I want to store for later.";
localStorage.setItem("myDataKey", localData);

// Get data
let savedData = localStorage.getItem("myDataKey");

// Remove data
localStorage.removeItem("myDataKey");

// sessionStorage API
// Store data
let sessionData = "The data that I want to store temporarily.";
sessionStorage.setItem("myTempDataKey", sessionData);

// Get data
let tempData = sessionStorage.getItem("myTempDataKey");

// Remove data
sessionStorage.removeItem("myTempDataKey");
