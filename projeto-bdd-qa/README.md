# Projeto BDD QA - Portal da Transparência 🇧🇷

Automação de testes com **Cypress + Cucumber + Gherkin** no Portal da Transparência do Governo Federal.

---

## Estrutura do Projeto

```
projeto-bdd-qa/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── favorecidos.feature   → Cenários de busca de favorecidos
│   │   │   └── gastos.feature        → Cenários de consulta de gastos
│   │   └── steps/
│   │       ├── favorecidosSteps.js   → Implementação dos passos de favorecidos
│   │       └── gastosSteps.js        → Implementação dos passos de gastos
│   ├── fixtures/
│   │   └── dados.json                → Dados de apoio aos testes
│   ├── pages/
│   │   ├── HomePage.js               → Page Object da página inicial
│   │   ├── FavorecidosPage.js        → Page Object da página de favorecidos
│   │   └── GastosPage.js             → Page Object da página de gastos
│   └── support/
│       ├── commands.js               → Comandos customizados
│       └── e2e.js                    → Configurações globais
├── cypress.config.js
├── package.json
└── .gitignore
```

---

##  Pré-requisitos (o que instalar)

- [Node.js LTS](https://nodejs.org/) — versão 18 ou superior
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

---

##  Como rodar o projeto

### 1. Instalar as dependências
```bash
npm install
```

### 2. Abrir o Cypress (modo visual)
```bash
npm run cy:open
```

### 3. Rodar os testes pelo terminal (modo headless)
```bash
npm run cy:run
```

---

##  Cenários de Teste

### favorecidos.feature
- ✅ Verificar o título da página inicial
- ✅ Navegar para a seção de favorecidos
- ✅ Buscar um favorecido pelo nome


---

##  Git — Como cada integrante deve contribuir

```bash
# 1. Clone o repositório
git clone https://github.com/Serpacr/ProjetoAngelo

# 2. Entre na pasta
cd projeto-bdd-qa

# 3. Instale as dependências
npm install

# 4. Crie sua branch antes de trabalhar
git checkout -b feature/nome-da-sua-funcionalidade

# 5. Após editar, adicione e confirme as mudanças
git add .
git commit -m "feat: descrição do que foi feito"

# 6. Envie para o GitHub
git push origin feature/nome-da-sua-funcionalidade
```
