// Challenge 5 Starter
const sidebar = document.querySelector(".sidebar");

function toggleSidebarContent() {
  // Your code goes here
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Sidebar Content";
toggleButton.addEventListener("click", toggleSidebarContent);

// Append the button to the body
document.body.appendChild(toggleButton);
