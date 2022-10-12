const express = require('express');
const app = express();
const mysql2 = require("mysql2");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "registrationsystem",
});


app.post('/add', (req, res) => {
    console.log("Hi");
    const email = req.body.email;
    const course = req.body.course;
    const year = req.body.year;
    const message = req.body.message;

    db.query('INSERT INTO request (student_email, course_name, current_year, message, approved) VALUES (?,?,?,?,?)',
            [email, course, year, message, 0],
            (error) => { error ? console.log(error) : res.send("Request Submitted") }
    );
});


app.listen(3001, () => {
    console.log("running on http://localhost:3001");
});
