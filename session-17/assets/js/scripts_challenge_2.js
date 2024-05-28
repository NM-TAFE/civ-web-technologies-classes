// Challenge - Stage 2
// The data
let data = {
	books: ['Harry Potter I', 'Harry Potter II', 'Harry Potter III']
};

// The template
let template = function (props) {
	let html =
			'<ul>' +
                // Loop through the props array wrapping each item in a <li>
				props.books.map(function (book) {
					return '<li>' + book + '</li>';
					}).join('') +
				'</ul>';
			return html;
		};

// Render the template into the UI
let app = document.querySelector('#app');
app.innerHTML = template(data);

// Update the UI
data.books.push('Harry Potter IV');
data.books.push('Harry Potter V');
app.innerHTML = template(data);

  
  