const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; // השרת יאזין לפורט מסוים
const cors = require('cors');



app.use(express.json());

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Authorization,content-type,accept',
}));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

require("./router")(app);