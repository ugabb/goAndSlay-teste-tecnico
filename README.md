Descrição do Teste
Você deve criar uma API RESTful em Node.js que gerencie informações de usuários. A API deve permitir as seguintes operações:

- [x] Criar um novo usuário
- [x] Listar todos os usuários
- [x] Obter um usuário específico pelo ID
- [x] Atualizar as informações de um usuário existente
- [x] Deletar um usuário

Requisitos
Entidade Usuário:

id (string, UUID)
name (string)
email (string)
age (number)
Operações da API:

Criar Usuário: POST /users
Corpo da requisição: { "name": "John Doe", "email": "john.doe@example.com", "age": 25 }
Listar Usuários: GET /users
Obter Usuário por ID: GET /users/:id
Atualizar Usuário: PUT /users/:id
Corpo da requisição: { "name": "John Doe", "email": "john.doe@example.com", "age": 26 }
Deletar Usuário: DELETE /users/:id
Requisitos Técnicos:

Utilize Node.js com o framework Express.js.
Utilize um banco de dados em memória (como um array) para armazenar os dados dos usuários.
A API deve seguir os princípios RESTful.
Validação básica dos dados de entrada (e.g., email válido, idade positiva).
Utilize o padrão UUID para os IDs dos usuários.
Inclua mensagens de erro apropriadas para casos como usuário não encontrado.
Instruções de Entrega
Código:

O código deve estar hospedado em um repositório público no GitHub.
Inclua um README.md com instruções claras sobre como configurar e rodar o projeto.
Prazo:

O prazo para a entrega do teste é de 2 dias a partir do recebimento deste e-mail.
Critérios de Avaliação:

Organização e clareza do código.
Correção e completude das funcionalidades.
Tratamento de erros e validações.
Documentação no README.md.
Uso de boas práticas de desenvolvimento (código limpo, modularidade, etc).
Dicas
Faça commits frequentes e com mensagens claras.
Adicione comentários ao código onde achar necessário para explicar decisões ou partes complexas.
Teste sua API utilizando ferramentas como Postman ou Insomnia.
Preze pela clareza e simplicidade no código.
Exemplo de Início do Projeto
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

let users = [];

// Criar Usuário
app.post('/users', (req, res) => {
const { name, email, age } = req.body;
const user = { id: uuidv4(), name, email, age };
users.push(user);
res.status(201).json(user);
});

// Listar Usuários
app.get('/users', (req, res) => {
res.json(users);
});

// Obter Usuário por ID
app.get('/users/:id', (req, res) => {
const { id } = req.params;
const user = users.find(u => u.id === id);
if (!user) {
return res.status(404).json({ error: 'User not found' });
}
res.json(user);
});

// Atualizar Usuário
app.put('/users/:id', (req, res) => {
const { id } = req.params;
const { name, email, age } = req.body;
const userIndex = users.findIndex(u => u.id === id);
if (userIndex === -1) {
return res.status(404).json({ error: 'User not found' });
}
const updatedUser = { id, name, email, age };
users[userIndex] = updatedUser;
res.json(updatedUser);
});

// Deletar Usuário
app.delete('/users/:id', (req, res) => {
const { id } = req.params;
const userIndex = users.findIndex(u => u.id === id);
if (userIndex === -1) {
return res.status(404).json({ error: 'User not found' });
}
users.splice(userIndex, 1);
res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
Estamos ansiosos para ver o seu trabalho. Se você tiver qualquer dúvida, não hesite em entrar em contato.

Atenciosamente,

João Marcelo
CTO
GoAnd Slay
