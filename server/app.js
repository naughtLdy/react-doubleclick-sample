let webpack = require('webpack');
let express = require('express');
let path = require('path');

let app = express();
let env = app.get('env');
let port = 7000;
app.set('port', port);

app.use(express.static('dist'));

app.listen(port, () => {
  console.log("app listening at http://localhost:%d mode:%s", port, env)
});
