# 🎥 MovieNotes API

---

## 📄 Descrição
A MovieNotes API é uma aplicação back-end desenvolvida para gerenciar notas e avaliações de filmes. Nela, os usuários podem criar, visualizar, organizar e excluir suas avaliações, associando cada nota a tags personalizadas. A aplicação foi construída com foco na organização e praticidade, permitindo filtrar filmes por título e tags, além de manter um histórico seguro com autenticação e validações.

---

## 🚀 Recursos
- **Gerenciamento de Usuários**:
  - Criar, listar, atualizar e excluir usuários.
- **Gerenciamento de Avaliações de Filme**:
  - Criar, listar, avaliar e excluir filmes .
- **Gerenciamento de Tags e Links**:
  - Associar tags e links aos filmes, com consultas personalizadas.
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
git clone (https://github.com/samuka7abr/NotesManager-API.git)
```
### 2. Executar as Migrations
```bash
npm run migrations
```
### 3. Executar o servidor
```bash
npm run dev
```
