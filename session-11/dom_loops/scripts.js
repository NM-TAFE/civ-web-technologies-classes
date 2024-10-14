let items = document.querySelectorAll('.item');
// let i = 0;

// while (i < items.length) {
//     console.log(items[i].textContent);  // Logs "Item 1", "Item 2", etc.
//     i++;
// }

// let i = 0;
// do {
//     console.log(items[i].textContent);  // Logs "Item 1", "Item 2", etc.
//     i++;
// } while (i < items.length);


// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].textContent);  // Logs "Item 1", "Item 2", etc.
// }

// for (let index in items) {
//     if (items.hasOwnProperty(index)) {  // To prevent iteration over inherited properties
//         console.log(items[index].getAttribute('data-value'));  // Logs "1", "2", "3", etc.
//     }
// }

for (const item of items) {
    console.log(item.textContent);  // Logs "Item 1", "Item 2", etc.
}

