const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api', authRouter);

server.get('/', (req, res) => {
    res.send('<h2>Node Auth2 Project</h2>');
});

module.exports = server;