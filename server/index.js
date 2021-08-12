
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// const fileUpload = require('express-fileupload');
const PORT = 3001;


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "qsuearal",
});

app.post("/create", (req, res) => {
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const email = req.body.email;
  const idnum = req.body.idnum;
  const institution = req.body.institution;
  const department = req.body.department;
  const mobile = req.body.mobile;
  const municipality = req.body.municipality;
  const town = req.body.town;
  const completeadd = req.body.completeadd;
  const username = req.body.username;
  const password = req.body.password;


  db.query(
    "INSERT INTO students (lastname, firstname, email, idnum, institution, department, mobile, municipality, town, completeadd, username, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [lastname, firstname, email, idnum, institution, department, mobile, municipality, town, completeadd, username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.post("/register", (req, res) =>{
//   const username = req.body.username;
//   const password = req.body.password;
//   db.query(
//     "INSERT INTO students (username, password) VALUES (?,?) ",
//     [username, password],
//     (err, result) =>{
//       console.log(err);
//     }
//   )
// })

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM students WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err){
        res.send({err: err})
      }



        if (result.length > 0) {
          res.send(result)
        }else {
          res.send({message: "wrong username/password combination"})
        }
      }
    
  )
})


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(process.env.PORT || PORT, () => {
  console.log("Yey, your server is running on port 3001");
});