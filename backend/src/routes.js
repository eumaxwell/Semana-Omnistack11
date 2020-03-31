const express = require("express");
const OngController = require("./controller/OngController");
const IncidentController = require("./controller/IncidentController");
const ProfileController = require("./controller/ProfileController");
const SessionController = require("./controller/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

/**
 * o parametro page é iniciado com 0
 */
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;














//cria uma rota / recurso
//
// GET: bucar infromação
// POST: Criar uma informação no backend
// PUT: alterar infromação
// DELETE: deletar infromação
/**
 * tipos de parametros
 *
 * Query: parametros nomeados na rota apos o simblo ?
 *        usados para filtros, paginas
 *       "localhost:3333/users?id=1"
 * Route Params: parametros utiizados prara identificar recurso
 *          "localhost:3333/users/1"
 * Request body: Corpo da requisição,
 *          utilizado parar criar ou alterar reecurso
 *          (utiliza metodo POST)
 */
//routes.get("/ongs", OngController.index)

//localhost:3333/users?id=1
//const query = request.query;
//console.log(query);

//app.get('/users/:id', (request, response) => {
//localhost:3333/users/1
//const params = request.params;
//console.log(params);

//response.send('Hello World')
//response.json({
//  evento: "Hello World",
//   aluno: "Max"
//});
//);

/**
 * utilizando o metodo POST no insomnia
 * {
 *  "nome": "Max",
 *  "idade": 32
 * }
 */
//routes.post("/ongs", OngController.create);

//module.exports = routes;
