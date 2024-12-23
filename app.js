const express = require('express');
const db = require('./dbConnect'); // ייבוא פונקציית החיבור למסד הנתונים

const app = express();
const PORT = process.env.PORT || 4000; // השרת יאזין לפורט מסוים

// מסלול בדיקה כדי לוודא שהשרת עובד
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// מסלול לדוגמה לקריאת נתונים ממסד הנתונים
app.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users'); // החלף את 'users' בשם הטבלה שלך
        res.json(result.rows); // החזרת התוצאות בפורמט JSON
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// require("./router")(app);