const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://arbind:1234@cluster0.mrtm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
var time = false;
var time2 = false;
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("timetable");
  dbo.collection("periods").findOne({}, function (err, result) {
    if (err) throw err;
    A1 = result.A1;
    A2 = result.A2;
    A3 = result.A3;
    A4 = result.A4;
    A5 = result.A5;
    A6 = result.A6;
    A7 = result.A7;
    A8 = result.A8;
    //
    B1 = result.B1;
    B2 = result.B2;
    B3 = result.B3;
    B4 = result.B4;
    B5 = result.B5;
    B6 = result.B6;
    B7 = result.B7;
    B8 = result.B8;
    //
    C1 = result.C1;
    C2 = result.C2;
    C3 = result.C3;
    C4 = result.C4;
    C5 = result.C5;
    C6 = result.C6;
    C7 = result.C7;
    C8 = result.C8;
    //
    D1 = result.D1;
    D2 = result.D2;
    D3 = result.D3;
    D4 = result.D4;
    D5 = result.D5;
    D6 = result.D6;
    D7 = result.D7;
    D8 = result.D8;
    //
    E1 = result.E1;
    E2 = result.E2;
    E3 = result.E3;
    E4 = result.E4;
    E5 = result.E5;
    E6 = result.E6;
    E7 = result.E7;
    E8 = result.E8;
  });
});

app.use("/login", (req, res) => {
  let body = [];
  setTimeout(() => {
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      let testa = Buffer.concat(body).toString();
      console.log(testa);

      test5 = testa.split('"')[3];
      test6 = testa.split('"')[7];
      console.log(test5);
      console.log(test6);

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").findOne({}, function (err, result) {
          if (err) throw err;
          let name = result.userName;
          let passwd = result.password;
          console.log(name);
          console.log(passwd);
          if (test5 == name && test6 == passwd) {
            time2 = true;
          } else {
            time2 = false;
          }
          db.close();
        });
      });
    });
  }, 10);
});

app.use("/slogin", (req, res) => {
  setTimeout(() => {
    if (time2 == true) {
      res.send("true");
    } else {
      res.send("false");
    }
  }, 500);
}),
  app.post("/teclogin", (req, res) => {
    let body = [];
    setTimeout(() => {
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        let testb = Buffer.concat(body).toString();
        console.log(testb);

        test3 = testb.split('"')[3];
        test4 = testb.split('"')[7];
        console.log(test3);
        console.log(test4);

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb2");
          dbo.collection("customers").findOne({}, function (err, result) {
            if (err) throw err;
            let name = result.userName;
            let passwd = result.password;
            console.log(name);
            console.log(passwd);
            if (test3 == name && test4 == passwd) {
              time = true;
            } else {
              time = false;
            }
            db.close();
          });
        });
      });
    }, 10);
  });

app.use("/techlogin", (req, res) => {
  setTimeout(() => {
    if (time == true) {
      res.send("true");
    } else {
      res.send("false");
    }
  }, 500);
}),
  app.use("/data", (req, res) => {
    res.send({
      A1: A1,
      A2: A2,
      A3: A3,
      A4: A4,
      A5: A5,
      A6: A6,
      A7: A7,
      A8: A8,
      //
      B1: B1,
      B2: B2,
      B3: B3,
      B4: B4,
      B5: B5,
      B6: B6,
      B7: B7,
      B8: B8,
      //
      C1: C1,
      C2: C2,
      C3: C3,
      C4: C4,
      C5: C5,
      C6: C6,
      C7: C7,
      C8: C8,
      //
      D1: D1,
      D2: D2,
      D3: D3,
      D4: D4,
      D5: D5,
      D6: D6,
      D7: D7,
      D8: D8,
      //
      E1: E1,
      E2: E2,
      E3: E3,
      E4: E4,
      E5: E5,
      E6: E6,
      E7: E7,
      E8: E8,
    });
  });

app.use("/tablechange", (req, res) => {
  let body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const test = Buffer.concat(body).toString();
    console.log(test);
    test1 = test.split(",")[0].split('"')[3];
    test2 = test.split(",")[1].split('"')[3];
    console.log(test1);
    console.log(test2);
  });
});

app.listen(9000, () => console.log("API is running on http://localhost:9000/"));
