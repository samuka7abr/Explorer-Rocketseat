const express = require("express");
const app = express();//estrutura básica de uma aplicação utilizando express

app.get("/message/:id/:user", (request, response) => {
    const { user, id } = request.param

    response.send(`ID da mensagem: ${id}
        user: ${user}`)
    
});

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));