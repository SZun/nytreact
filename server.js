import express from 'express';
import mongoose from 'mongoose';

import Connection from './startup/connection';
import BodyParser from './startup/bodyParser';
import ArticleRoutes from './startup/routes';

const app = express();
const PORT = process.env.PORT || 3000;

Connection(mongoose);
BodyParser(app);
ArticleRoutes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
