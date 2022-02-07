const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
//HELPERS
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// initialize SESSIONS
// TO DO ----- add cookies? 
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

// HELPERS 
const hbs = exphbs.create({ helpers });

//TEMPLATING ENGINE
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port 3001'));
});
