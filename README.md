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
- Campos alinhados à especificação técnica de pacientes

## Aderência à especificação do professor

A tela `/pacientes` foi ajustada com base na ETF do Squad 1 para o módulo de pacientes.

A especificação define a tabela `pacientes` com os campos principais:

- `nome_completo`
- `cpf`
- `data_nascimento`
- `num_cns`
- `status_clinico`
- `nivel_suporte`
- `nome_responsavel`

Também foram consideradas as regras:

- CPF obrigatório com 11 números
- CPF sem duplicidade no mock local
- Data de nascimento obrigatória
- Data de nascimento não pode ser futura
- Status clínico limitado a `DIAGNOSTICADO` ou `SUSPEITA`
- Nível de suporte opcional, limitado a 1, 2 ou 3
- CNS opcional, mas com 15 números quando informado

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
- Status clínico
- Nível de suporte
- CNS
- Nome do responsável

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

Minha entrega foi a criação inicial do frontend em React, com rotas principais, layout base e tela de cadastro de pacientes. A tela foi ajustada para seguir a especificação técnica do módulo de pacientes, incluindo campos obrigatórios, máscara de CPF, validação de data futura, status clínico, nível de suporte, CNS e responsável. O salvamento e a listagem ainda usam mock local com `localStorage`, permitindo simular o fluxo até a integração com a API real.
