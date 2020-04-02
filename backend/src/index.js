const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Método HTTP:

GET: Buscar uma informação no back-end
POST: Criar uma informação no back-end
PUt: ALterar uma informação no back-end
DELETE: Apagar uma informação no back-end

*/

/**
 * Tipo de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após *?* (Filtros, paginação)
 * Route Params: Parâmetros utilizado para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar requisições
 */
app.listen(3333);