const express = require('express');
const app = express();
const path = require('path');
const { v4 } = require('uuid');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
	res.render('user/index');
});

app.get('/signin', require('../routes/api.route'))

app.use((req, res) => {
	res.status(404).render('../views/errors/error_page', { error_title: '404 - Not Found', error_code: '404', error_header: "Oops! You weren't suppose to see this", error_des: "The page you're looking for no longer exists." });
});

app.use((err, req, res, next) => {
	res.status(500).render('../views/errors/error_page', { error_title: '500 - Server Error', error_code: '500', error_header: "Uh oh! I think i broke it. Please report me to the system administrator!", error_des: "Internal Server Error" });
})

// const server = app.listen(3000, () => {
// 	console.log(`The application started on port ${server.address().port}`);
// });

app.get('/js', (req, res) => {
	const path = `/js/item/${v4()}`;
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
	res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/js/item/:slug', (req, res) => {
	const { slug } = req.params;
	res.end(`Item: ${slug}`);
});

const server = app.listen(3000, () => {
	console.log(`The application started on port ${server.address().port}`);
});

module.exports = app;
