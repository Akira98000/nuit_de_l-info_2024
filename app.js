const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const swaggerRouter = require('./swagger/swagger');
app.use('/', swaggerRouter);

const leaderboardRouter = require('./routes/leaderboard');
app.use('/leaderboard', leaderboardRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});