const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pet_app'
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});


const app = express();
app.use(cors());
app.use(express.json());


app.get('/events', (req, res) => {
  db.query('select * from events', (err,results) =>{
    if(err) return res.status(500).send(err);
    res.json(results);
  })
});

app.get('/subscription-status', (req, res) => {
  db.query('SELECT subscribed FROM subscription WHERE id=1', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ subscribed: result[0].subscribed === 1});
  });
});

app.post('/book', (req, res) => {
  const { eventId } = req.body;

  db.query(
    'SELECT price, discount FROM events WHERE id=?',
    [eventId],
    (err, result) => {
      if (err) return res.status(500).send(err);

      const event = result[0];
      const finalPrice = event.price - event.price * event.discount;

      res.json({
        message: "Booking initiated",
        redirectUrl: "https://provider-payment-page.com",
        finalPrice
      });
    }
  );
});


app.post('/subscribe', (req, res) => {
  db.query('UPDATE subscription SET subscribed=true WHERE id=1');
  res.json({ subscribed: true });
});


app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
