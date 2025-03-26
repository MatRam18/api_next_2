// export default function handler(req, res) {
//     res.status(200).json({mensage: 'Hello Word'});
// }
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testes',
});

export default function handler(req, res) {
    connection.query('SELECT * FROM tabela_1', (error, results) => {
        if (error) {
            console.error('Erro ao buscar dados. ');
            return res.status(500).json({ error: 'Erro ao buscar dados. '});
        }

        res.status(200).json(results);
    });
}