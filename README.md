# 🔐 Text Encryptor API

Uma API simples desenvolvida com **TypeScript + Node.js + Express**, que criptografa textos substituindo caracteres por símbolos personalizados.

---

## 📌 Funcionalidades

- 🔁 Recebe um texto e retorna ele criptografado com base em um mapa de substituição.
- 🧪 Testado via Postman e também com um frontend em HTML.
- 🚀 Preparado para portfolio e deployment.

---

## 📁 Estrutura do Projeto

├── src/ │ ├── controller.ts # Função que lida com a rota POST │ 
├── encryptor.ts # Lógica de criptografia │ ├── routes.ts # Rotas da aplicação │ 
├── index.ts # Configuração do servidor Express │ └── public/ │ ├── index.html # Frontend simples │ 
└── style.css # Estilo visual (opcional) ├── dist/ # Código transpilado em JavaScript ├── .env # Variáveis de ambiente ├── tsconfig.json # Configurações do TypeScript └── package.json

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/Salgues8519/API_Criptografar-Texto
cd API_Criptografar-Texto

🧪 Testando
✅ Via Postman
Endpoint: POST http://localhost:3000/cripto
Body (JSON):
{
  "text": "Hello World"
}
Resposta:
{
  "result": "/33>δ ΣδΣ>"
}


📦 Tecnologias utilizadas
Node.js, Express, TypeScript, Postman

🧠 Autor
Feito com 💻 e ☕ por Rafael Salgues

## 💻 Preview da Aplicação

![Preview da aplicação](./public/screenshot.png)
