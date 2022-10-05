const express = require('express');

const app = express();

const path = require('path');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.render('user/index');
});

app.use((req, res) => {
    res.status(404).render('errors');
});

const server = app.listen(3000, () => {
	console.log(`The application started on port ${server.address().port}`);
});
