const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/', (req, res) => {
	res.render('index.pug');
});

app.use('/account', require('../../routes/account.route.js'))

app.use((req, res) => {
	res.status(404).render('../views/errors/error_page', { error_title: '404 - Not Found', error_code: '404', error_header: "Oops! You weren't suppose to see this", error_des: "The page you're looking for no longer exists." });
});

app.use((err, req, res, next) => {
	res.status(500).render('../views/errors/error_page', { error_title: '500 - Server Error', error_code: '500', error_header: "Uh oh! I think i broke it. Please report me to the system administrator!", error_des: "Internal Server Error" });
})

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`The application started on port ${process.env.PORT || 3000}`);
});

module.exports = app;
