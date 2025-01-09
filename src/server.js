const express = require("express");
const app = express();//estrutura básica de uma aplicação utilizando express

app.get("/", (request, response) => {
    response.send("Hello, World!")
});

const PORT = 3333;
//estrutura básica de uma aplicação utilizando express
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));