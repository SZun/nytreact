import express from 'express';
import mongoose from 'mongoose';

import Connection from './startup/connection';
import BodyParser from './startup/bodyParser';
import ArticleRoutes from './startup/routes';

const app = express();
const PORT = process.env.PORT || 5050;

Connection(mongoose);
BodyParser(app);
ArticleRoutes(app);

try {
  app.use(express.static('client/build'));
  app.get('*', function(req, res) {
    if (process.env.NODE_ENV === 'production') {
      res.sendFile(__dirname + 'build/static/index.html');
    } else {
      res.sendFile(__dirname + '/../client/public/index.html');
    }
  });
} catch (err) {
  console.log(`Error: ${err.message}`);
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
