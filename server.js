import express from 'express';
import mongoose from 'mongoose';

import connection from './startup/connection';
import bodyParser from './startup/bodyParser';
import articleRoutes from './startup/routes';

const app = express();
const PORT = process.env.PORT || 5050;

connection(mongoose);
bodyParser(app);
articleRoutes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
