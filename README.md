# Notes Manager API

---

## 📄 Descrição
A **Notes Manager API** é uma aplicação back-end desenvolvida para gerenciar usuários, notas, links relacionados e tags. Ela fornece endpoints para criação, leitura, atualização e exclusão de dados de forma eficiente e segura.

---

## 🚀 Recursos
- **Gerenciamento de Usuários**:
  - Criar, listar, atualizar e excluir usuários.
- **Gerenciamento de Notas**:
  - Criar, listar, visualizar e excluir notas.
- **Gerenciamento de Tags e Links**:
  - Associar tags e links às notas, com consultas personalizadas.
- **Validações**:
  - Validações robustas para evitar dados inconsistentes.
- **Banco de Dados Relacional**:
  - Utiliza SQLite para armazenamento de dados.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **SQLite**
- **bcrypt.js** (hash de senhas)
- **Knex.js** (queryBuilder)
- **JWT** (autenticação com tokens, se aplicável)
- **Insomnia** (testes de requisições)

---

## 📦 Como Usar

### 1. Clonar o Repositório
```bash
[git clone https://github.com/seu-usuario/rocketnotes-api.git](https://github.com/samuka7abr/NotesManager-API.git)
```
### 2. Executar as Migrations
```bash
npm run migrations
```
### 3. Executar o servidor
```bash
npm run dev
```
