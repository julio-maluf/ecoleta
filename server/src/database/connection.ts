import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

// PATH - configura os endereços de arquivos e pastas do SO utilizado, independente o SO que estiver rodando sua apicação, o PATH configura de acordo (ex: windows usa \)
// __dirname -  retorna o diretório atual do arquivo em questão

// migrations - será executado (criará as tabelas) pela ordem dos arquivos, sempre se atentar em criar primeiro as tabelas de entidade para não dar erros para criar as tabelas de relacionamento