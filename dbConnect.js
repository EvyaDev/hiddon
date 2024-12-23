require('dotenv').config(); // טעינת משתני סביבה מקובץ .env
const { Pool } = require('pg');

// הגדרות חיבור למסד הנתונים
const pool = new Pool({
    user: process.env.DB_USER,       // שם המשתמש
    host: process.env.DB_HOST,       // כתובת השרת
    database: process.env.DB_NAME,   // שם מסד הנתונים
    password: process.env.DB_PASS,   // סיסמה
    port: process.env.DB_PORT || 5432, // פורט ברירת מחדל של PostgreSQL
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

// ייצוא פונקציות
module.exports = {
    query,
};