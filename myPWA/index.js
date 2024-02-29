const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

app.use(express.static('public')); 

app.get('/extensions', (req, res) => {
  const dbPath = '/Users/rayanrashid/Documents/GitHub/2024SDD-Rayan-AeroFit/myPWA/.database/datasource.db';
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error connecting to the database');
      return;
    }
    console.log('Connected to the SQLite database.');
  });

  const sql = `SELECT * FROM extension`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error executing SQL query');
    } else {
      res.json(rows); 
    }
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:8000}/`);
});
