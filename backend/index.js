import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/jokes', (req,res) => {
  const jokes=[{
    "id":'1',
    "title": 'laugh',
    "name":'kapil'
  },
  {
    "id":'2',
    "title": 'laugh',
    "name":'kapil'
  }];
  res.send(jokes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })