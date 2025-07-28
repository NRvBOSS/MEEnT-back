const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI;

