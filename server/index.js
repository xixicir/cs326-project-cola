import 'dotenv/config';
import express from 'express';
import expressSession from 'express-session';
import users from './users.js';
import auth from './auth.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Database } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));
const app = express();
const port = process.env.PORT || 3000;
const sessionConfig = {
  secret: process.env.SECRET || 'SECRET',
  resave: false,
  saveUninitialized: false,
};

app.use(expressSession(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client'));
auth.configure(app);

function checkLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

app.get('/', checkLoggedIn, (req, res) => {
  res.send('Welcome Back');
});

app.get('/login', (req, res) =>
  res.sendFile('client/index.html', { root: __dirname })
);

app.post(
  '/login',
  auth.authenticate('local', {
    successRedirect: '/private',
    failureRedirect: '/login',
  })
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.addUser(username, password)) {
    res.redirect('/login');
  } else {
    res.redirect('/register');
  }
});

app.get('/register', (req, res) =>
  res.sendFile('client/index.html', { root: __dirname })
);

app.get(
  '/private',
  checkLoggedIn,
  (req, res) => {
    res.redirect('/private/' + req.user);
  }
);

app.get(
  '/private/:userID/',
  checkLoggedIn,
  (req, res) => {
    if (req.params.userID === req.user) {
      res.sendFile('client/subpages/home.html', { root: __dirname });
    } else {
      res.redirect('/private/');
    }
  }
);

app.get('*', (req, res) => {
  res.send('Error');
});

app.listen(port, () => {
  console.log(`App now listening at http://localhost:${port}`);
});


class Server {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use('/', express.static('client'));
  }

  async initRoutes() {
    const self = this;

    this.app.get('/price/read', async (req, res) => {
      try {
        const { id } = req.query;
        const price = await self.db.readPrice(id);
        res.send(JSON.stringify(price));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  }

  async initDb() {
    this.db = new Database(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}!`);
    });
  }
}

const server = new Server(process.env.DATABASE_URL);
server.start();
