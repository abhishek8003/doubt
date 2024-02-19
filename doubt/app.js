const express = require("express");
const mysql2 = require("mysql2");
const app = express();

const conn = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: 'root',
    database: "rest_api"
});
app.get("/", (req, res) => {
    console.log("get");
    let q1 = "select * from usr";//purposly given wrong table name
    try {
        conn.query(q1, (error, result) => {
            if (error) {
                res.send("error")
                throw error;
            } else {
                res.send("ok");// will also be executed for for reason
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000,()=>{
    console.log("Server listneing to 5000....");
})