const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/domains', (req, res) => {
  const domainList = ["https://profile.mts.ru"];
  res.json(domainList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
