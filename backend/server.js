const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Schülerdatenbank." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

const Role = db.rolle;

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "schüler"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'schüler' to roles collection");
            });

            new Role({
                name: "lehrer"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'lehrer' to roles collection");
            });

            new Role({
                name: "schulleitung"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'schulleitung' to roles collection");
            });
        }
    });
}