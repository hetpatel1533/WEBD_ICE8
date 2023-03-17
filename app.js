const express = require('express');
const exphbs = require('express-handlebars');
const PORT = 3000;

const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// express app.use()
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Het';
    next();
});

// make the index route
app.get('/', (req,res) => {
    res.render('home');
});

// add about route
app.get('/about', (req, res) => {
    res.render('about')
});


//run server
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})