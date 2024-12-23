require('dotenv').config(); // טעינת משתני סביבה מקובץ .env
const { Pool, Client } = require('pg');

// הגדרות חיבור למסד הנתונים
const pool = new Pool({
    user: process.env.DB_USER,       // שם המשתמש
    host: process.env.DB_HOST,       // כתובת השרת
    database: process.env.DB_NAME,   // שם מסד הנתונים
    password: process.env.DB_PASS,   // סיסמה
    port: process.env.DB_PORT || 5432, // פורט ברירת מחדל של PostgreSQL
    ssl: {
        rejectUnauthorized: false, // מאפשר חיבור גם אם תעודת ה-SSL אינה מאומתת
    }
});

// פונקציה כללית לביצוע שאילתות
const query = async (text, params) => {
    try {
        const res = await pool.query(text, params);
        return res;
    } catch (err) {
        console.error('Database query error:', err);
        throw err;
    }
};


pool.connect()
    .then(client => {
        console.log('SUCCESS connected to db');
        client.release();
    })
    .catch(err => {
        console.log('ERROR not connection to db', err);
    });


exports.query = query;
