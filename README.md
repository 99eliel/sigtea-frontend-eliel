# SIGTEA Frontend - Eliel

Frontend inicial em React para o projeto SIGTEA, criado para a nova etapa do Squad 1.

## O que foi implementado

- Projeto React com Vite
- React Router configurado
- Rota `/login`
- Rota `/dashboard`
- Rota `/pacientes`
- Layout com menu lateral
- Tela de cadastro de pacientes
- Campo de CPF com máscara visual
- Validação de campos obrigatórios
- Mock de salvamento usando `localStorage`
- Lista de pacientes cadastrados

## Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/99eliel/sigtea-frontend-eliel.git
```

Entre na pasta:

```bash
cd sigtea-frontend-eliel
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm run dev
```

Abra no navegador:

```txt
http://localhost:5173
```

## Rotas disponíveis

```txt
/login
/dashboard
/pacientes
```

## Login de teste

O login está mockado. Basta preencher qualquer e-mail e senha para entrar.

## Tela de pacientes

A tela `/pacientes` permite cadastrar pacientes com:

- Nome completo
- CPF
- Data de nascimento

O CPF recebe máscara automaticamente no formato:

```txt
000.000.000-00
```

Os dados são salvos temporariamente no navegador usando `localStorage`.

## Próxima etapa

Quando o backend estiver pronto, o mock poderá ser substituído por chamadas reais para a API.

Exemplo futuro:

```txt
GET /api/patients
POST /api/patients
```

## Resumo para apresentação

Minha entrega foi a criação inicial do frontend em React, com rotas principais, layout base e tela de cadastro de pacientes. A tela já valida os campos obrigatórios, aplica máscara visual no CPF e simula o salvamento/listagem dos pacientes com mock local.
