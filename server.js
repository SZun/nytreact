import express from 'express';
import mongoose from 'mongoose';

import Connection from './startup/connection';
import BodyParser from './startup/bodyParser';
import ArticleRoutes from './startup/routes';
import Cors from './startup/middleware';
import react from './startup/react';

const app = express();
const PORT = process.env.PORT || 5050;

Connection(mongoose);
BodyParser(app);
// Cors(app);
ArticleRoutes(app);
react(app, express);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
