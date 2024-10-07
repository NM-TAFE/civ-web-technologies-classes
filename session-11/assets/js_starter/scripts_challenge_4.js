// Challenge 4 Starter
const eventLinks = document.querySelectorAll("[data-event]");

// function logEvent(eventDetails) {
//     // Your code goes here
//     console.log(`${eventLinks[eventDetails].innerHTML.toUpperCase()}`)
// }

const logEvent = (eventDetails) => {
    console.log(`${eventLinks[eventDetails].innerHTML.toUpperCase()}`)
}

// Your code goes here
for(const[eventDetails] of eventLinks.entries()) {
    console.log(eventDetails);
    logEvent(eventDetails);
}