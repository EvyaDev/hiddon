const { query } = require('express');
const db = require('./dbConnect'); // ייבוא פונקציית החיבור למסד הנתונים


module.exports = (app) => {

    //GET Methods
    app.get('/', (req, res) => { res.send("Welcome to API hiddon server") });

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

    const addUser = async (username, email) => {
        try {
            const result = await db.query( // השתמש ב-db.query
                'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
                [username, email]
            );
            return result.rows[0]; // החזרת המשתמש שנוסף
        } catch (err) {
            console.error('Error adding user:', err);
            throw err; // זרוק את השגיאה כדי שתוכל לטפל בה במקום אחר
        }
    };

    app.post('/users', async (req, res) => {
        const { username, email } = req.body;
        const newUser = await addUser(username, email);
        res.json(newUser);
    });
}