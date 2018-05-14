const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.static(`${__dirname}/../public`));

app.listen(port, () => {
  console.log(`Dr. Crane is listening on ${port}`);
});
