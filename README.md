<h1 align="center" style="font-weight: bold;">Users API</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
</p>

<p align="center">
    <b>API SOLID para gerenciar usuários</b><br/>
    <b>Deploy - https://goandslay-teste-t-cnico.onrender.com</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Express
- Prisma
- Zod
- Typescirpt

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

<h3>Cloning</h3>

Como clonar

```bash
git clone https://github.com/ugabb/goAndSlay-teste-tecnico.git
```

<h3>Configurando variaveis de ambiente .env </h2>

Use o `.env.example` como referência para criar o seu `.env`

```yaml
DATABASE_URL="file:./dev.db"
PORT=
```

<h3>Starting</h3>

Como rodar o projeto

```bash
cd goAndSlay-teste-tecnico
yarn install
yarn prisma db pull
yarn dev
```

<h2 id="routes">📍 API Endpoints</h2>
​

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /users</kbd>     | Lista todos os usuários
| <kbd>GET /users/:id</kbd>     | Busca por um usuário pelo ID
| <kbd>POST /users</kbd>     | Cria um usuário
| <kbd>PUT /users/:id</kbd>     | Atualiza um usuário pelo ID
| <kbd>DELETE /users/:id</kbd>     | Exclui um usuário pelo ID

<h3 id="get-auth-detail">GET /users</h3>

**RESPONSE**
```json
{
  "users": [
    {
      "id": "37399e2c-fe5f-484e-b117-94eda17c9c20",
      "name": "John",
      "email": "john.doe@example.com",
      "age": 26
    },
    {
      "id": "972cb51b-c1e1-4a61-a4d6-2d65d45d13a2",
      "name": "Naruto Uzumaki",
      "email": "naruto@example.com",
      "age": 16
    }
  ]
}
```

<h3 id="get-auth-detail">GET /users/:id</h3>

**RESPONSE**
```json
{
  "user": {
    "id": "972cb51b-c1e1-4a61-a4d6-2d65d45d13a2",
    "name": "Naruto Uzumaki",
    "email": "naruto@example.com",
    "age": 16
  }
}
```

<h3 id="post-auth-detail">POST /users</h3>

**REQUEST**
```json
{
  "name": "Naruto Uzumaki",
  "email": "naruto@example.com",
  "age": 16
}
```

**RESPONSE**
```json
{
  "message": "User created"
}
```

<h3 id="post-auth-detail">PUT /users/:id</h3>

**REQUEST**
```json
{
  "age": 17
}
```

**RESPONSE**
```json
{
  "message": "User updated"
}
```

<h3 id="get-auth-detail">DELETE /users/:id</h3>

**RESPONSE**
```json
{
  "message": "User Deleted"
}
```

