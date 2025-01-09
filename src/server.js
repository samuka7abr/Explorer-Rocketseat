const express = require("express");
const app = express();//estrutura básica de uma aplicação utilizando express

app.get("/message/:id/:user", (request, response) => {
    const { user, id } = request.params

    response.send(`ID da mensagem: ${id}
        user: ${user}`)
    
});

app.get("/users", (request, response) => {
    const { page, limit} = request.query
    response.send(`Página: ${page} Mostrar: ${limit}`)


})
const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));