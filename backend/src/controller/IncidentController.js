const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count();

    // busca apenas 5 casos no banco de dados
    // iniciando pela pagina corrente
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;

    //guarda informações do contexto da informação
    // autenticação, localização, idioma
    const ong_id = request.headers.authorization;

    // desestrutura o retorno pegando apenas o id
    // o retorno do metodo é um array de ids,
    // mas aqui ele pega apenas a posição 0
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id != ong_id) {
      // codigo 401 significa não autorizado
      // pesquise no gooogle http status code
      return response.status(401).json({ error: "Opeartion not permitted" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    // codigo 204 é sem conteudo (no content)
    return response.status(204).send();
  }
};
