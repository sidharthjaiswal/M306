
/*
@Author: Sidharth Jaiswal 
@version: 1.0v
@Latest Update: 24.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/


exports.allAccess = (req, res) => {
    res.status(200).send(
        "Willkommen zu unserer Schülerdatenbank. "+ 
        "Auf dieser Webseite können Sie als Lehrperson oder als Schulleiter ihre Klassen und Schüler anpassen."
     );
};

exports.userBoard = (req, res) => {
    res.status(200).send("Schüler Inhalt.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Schulleitung Inhalt.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Lehrer Inhalt.");
};