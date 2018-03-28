const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
  const userAgent = req.header('user-agent');
  const software = userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));

  res.send({
    'ipaddress': req.ip,
    'language': req.headers["accept-language"].split(',')[0],
    'software': software
  });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
