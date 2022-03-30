const socket = io();

const form = document.querySelector('#form');
const titulo = document.querySelector('#titulo');
const precio = document.querySelector('#precio');
const thumbnailInput = document.querySelector('#thumbnail');

const table = document.querySelector('#table');

form.addEventListener('submit', e => {
	e.preventDefault();

	if (titulo.value && precio.value && thumbnailInput.value) {
		const product = {
			titulo: titulo.value,
			precio: precio.value,
			thumbnail: thumbnailInput.value,
		};

		socket.emit('add-product', product);
		titulo.value = '';
		precio.value = '';
		thumbnailInput.value = '';
	}
});

socket.on('update-products', product => {
	const template = Handlebars.compile(
		"<td>{{titulo}}</td><td>{{precio}}</td><td><img src={{thumbnail}} style='width:50px;'></img></td>"
	);

	const tr = document.createElement('tr');

	tr.innerHTML = template(product);

	table.appendChild(tr);
});

const messageForm = document.querySelector('#messages');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const chat = document.querySelector('#chat');

const errors = document.querySelector('#errors');

messageForm.addEventListener('submit', e => {
	e.preventDefault();
	errors.innerHTML = '';

	if (!emailInput.value) {
		const error = document.createElement('p');

		error.innerText = 'Please enter an email';
		errors.appendChild(error);
	}

	if (!messageInput.value) {
		const error = document.createElement('p');

		error.innerText = 'Please enter a message';
		errors.appendChild(error);
	}

	if (messageInput.value && emailInput.value) {
		const message = {
			email: emailInput.value,
			message: messageInput.value,
		};
		socket.emit('message', message);
		emailInput.value = '';
		messageInput.value = '';
	}
});

socket.on('message', message => {
	const template = Handlebars.compile(
		'<span style="color: blue; font-weight: 600;">{{this.email}}: </span><span style="color: brown;">[{{this.date}}] </span><span style="color: green; font-style: italic;">{{this.message}}</span>'
	);

	const li = document.createElement('li');

	li.innerHTML = template(message);

	chat.appendChild(li);
});