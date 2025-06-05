const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Login Service!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Login service running on port ${port}`);
});
