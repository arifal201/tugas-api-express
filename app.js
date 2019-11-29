const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 8000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(__dirname + '/View'));
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
