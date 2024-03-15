import express from 'express';
import movieModel from './models/Movies.js';
import { createDoc } from './models/Movies.js';
import { insertManyDoc } from './models/Movies.js';
import { allDoc } from './models/Movies.js';
import { updateById } from './models/Movies.js';
import { deleteById } from './models/Movies.js';
import connectDB from './db/connectDB.js';
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

connectDB(DATABASE_URL);

// createDoc();
// insertManyDoc();
// allDoc();
// updateById('65f435edcfa4d397bb945572');
// deleteById('65f435edcfa4d397bb945572');

app.listen(port, () => console.log(`Server listening on port: ${port}`));
