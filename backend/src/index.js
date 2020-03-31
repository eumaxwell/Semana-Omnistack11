const express = require("express");
const routes = require("./routes");
const cors = require("cors");

//iniciar express
const app = express();

// framework de segurança
app.use(cors(
    //em produção se utiliza a linha abaixo
    // que indica o caminho que pode acessar essa aplicação
    // { origin: 'http://meuapp.com' }
));
// indica que todo o conteudo recebido será em JSON
app.use(express.json());
app.use(routes);

// ouvir a porta
// localhost:3333
app.listen(3333);
