// Challenge 5 Starter
const sidebar = document.querySelector('.sidebar');

function toggleSidebarContent(identifier) {

  document.querySelectorAll()
  // Your code goes here
  if (sidebar.hasChildNodes()) {
    sidebar.removeChild(sidebar.firstChild);

    const content = document.createElement('p');
    content.textContent =  'This is the new sidebar content';
    sidebar.appendChild(content)
  }
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Sidebar Content';
toggleButton.addEventListener('click', toggleSidebarContent("[data-event]"))

// Append the button to the body
document.body.append(toggleButton)