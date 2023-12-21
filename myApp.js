let express = require('express');
let app = express();


app.get("/bo", (req, res) => {
    // res.send("Hello Express");
    res.sendFile(__dirname + "views/index.html");
});

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// })

































 module.exports = app;
