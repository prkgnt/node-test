const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

//모든 요청에도 다 응답하게 가능
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.send({ sound: "멍멍" });
});

app.get("/user/:id", (req, res) => {
  // const p = req.params;
  // console.log(p);
  // /user/pgt
  const q = req.query;
  console.log(q);
  res.send(q);
  // user/pgt?q=sdsds&name=pgt&age=20
});

app.get("/sound/:name", (req, res) => {
  // : 뒤에는 params, ?뒤에는 query
  const { name } = req.params;
  if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "냐옹" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
