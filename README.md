# NaveGuard - Back End
[![Readme in English](https://img.shields.io/badge/README-English-green)](./README_EN.md)

## ⚙ Funcionalidades
O desenvolvimento da API NaveGuard foi dividido em quatro APIs principais, cada uma responsável por uma área específica da aplicação. Todas as APIs seguem o padrão de operações CRUD (Create, Read, Update, Delete), permitindo o gerenciamento completo dos dados relacionados.

### 1. API de Usuário
Esta API será responsável pelo gerenciamento dos dados de perfil. 

- **Cadastrar Usuários**: Permite a criação de novos usuários.
- **Buscar usuário**: Permite a busca dos usuários para melhor gestão.
- **Atualizar perfil**: Edição de informações dos dados pessoais.
- **Excluir Conta**: Remoção de usuários da plataforma.

#### Rotas sobre usuário
| Método | Rota                                | Função                               |
| ------ | ----------------------------------- | ------------------------------------ |
| POST   | /api/user                           | Cadastro de usuário                  |
| GET    | /api/user/{id}                      | Busca de usuário por id              |
| GET    | /api/user/                          | Busca todos os usuários registrados  |
| PUT    | /api/user/{id}                      | Atualiza os dados por id             |
| DELETE | /api/user/{id}                      | Deleta usuário via id                |

### 2. API de Tutoriais
O site terá uma página dedicada a fornecer informações sobre Tutoriais, Guias de Segurança e Recursos Educativos. Isso ajudará a consciêntizar sobre o tema, desmistificando conceitos e incentivando a prevenção. 

- **Listar os Tutoriais** - Lista os Tutoriais cadastrado no sistema.
- **Adicionar novos tutoriais** - O usuário adm poderá adicionar novos tutoriasis.
- **Buscar por id do tutorial** - Facilita a busca do usuário ao querer um determinado tutorial.
- **Editar tudoriais** - Editar informações de tutoriais criados.
- **Excluir tutoriais** -  Excluir por meio da busca do id do tutorial.

#### Rotas sobre tutorial
| Método | Rota                                | Função                                                 |
| ------ | ----------------------------------- | ------------------------------------------------------ |
| POST   | /api/tutorial                       | Cadastro novo tutorialtutorial                         |
| GET    | /api/tutorial                       | Busca todos os tutoriais                               |
| GET    | /api/tutorial/{id}                  | Busca de tutorial por id                               |
| PUT    | /api/tutorial/{id}                  | Atualiza tutoriais por id                              |
| DELETE | /api/tutorial/{id}                  | Deleta tutoriais via id                                |

## 🚫 Deploy
No momento ainda foi realizado o deploy da aplicação nesta versão. Portanto, para rodar o projeto localmente, é necessário baixar e executar **tanto o repositório do front-end quanto o do back-end**.

### ▶ Como rodar o projeto (front-end e back-end)
Para clonar e rodar este projeto, siga os passos abaixo:

1. **Clone os repositórios (front e back-end)**:
   - Front-end:
     ```bash
     git clone https://github.com/navsegura/navegacaosegura
     ```
   - Back-end:
     ```bash
     git clone https://github.com/navsegura/navegacaosegura-backend
     ```

2. **Instale as dependências**:
   - Acesse as pastas do projeto e instale as dependências tanto no front-end quanto no back-end:
     ```bash
     cd front-end/naveguardFront/src
     npm install
     ```
     ```bash
     cd back-end/naveguard
     npm install
     ```

3. **Execute o front-end**:
   - Após instalar as dependências, execute o comando abaixo para rodar o front-end:
     ```bash
     npm run dev
     ```

4. **Execute o back-end**:
   - Em outra aba do terminal, acesse a pasta do back-end e rode o servidor:
     ```bash
     npm run dev
     ```

## 🧪 Testes
Os testes podem ser feitos de duas formas:
- Manualmente utilizando ferramentas como o [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download), para testar as funcionalidades das rotas listadas anteriormente.
- Via deploy

Segue abaixo imagem de alguns testes:
<div align = "center"> 
  <h3>Listar todos os tutoriais (get)</h3>
  <img src = ""  width = "600px">
 
  <h3>Busca de tutorial por id (get)</h3>
  <img src = "" width = "600px">

<h3>Atualizar tutoriais por id (put)</h3>
  <img src = "" width = "600px">
  
<h3>Cadastro de tutorial (post)</h3>
  <img src = "" width = "600px">
</div>

## 📅 Conclusão
O "Naveguard" combina entretenimento e educação com um forte foco em jogos interativos. Essa abordagem gamificada, aliada a recursos que envolvem tanto pais quanto crianças, cria uma experiência única que é difícil de ser replicada por concorrentes. A plataforma não apenas educa, mas também entretém, garantindo maior adesão ao conteúdo.
 
Uma melhoria significativa para o futuro desenvolvimento do projeto seria a implementação de um banco de dados real para armazenar as informações, substituindo os dados atualmente mocados. Isso permitiria maior escalabilidade, segurança e flexibilidade na gestão dos dados, além de proporcionar uma experiência mais robusta para os usuários da plataforma.

## 💻 Fundadores

| ![Heverton Vitor][img1] | ![Jamyle Elen][img2] | ![Antônio de Pádua][img3] | ![Guilherme Davino][img4] | ![Jonas Rafael][img5] | ![Rodrigo Silva][img6] | ![Theofilo Henrique][img7] | ![Leandra Mayla][img8] |
|:-----------------------:|:--------------------:|:-------------------------:|:-------------------------:|:---------------------:|:----------------------:|:--------------------------:|:----------------------:|
| **Heverton Victor**     | **Jamyle Elen**      | **Antônio de Pádua**      | **Guilherme Davino**      | **Jonas Rafael**      | **Rodrigo Silva**      | **Theofilo Henrique**      | **Leandra Mayla**      |
| **PO**                  | **Scrum Master**     | **Função**                | **Função**                | **Função**            | **Função**             | **Função**                 | **Social Media**       |

[img1]: https://github.com/user-attachments/assets/4f7785c6-6bf1-4df3-bffe-952bd125e7b0
[img2]: https://github.com/user-attachments/assets/4b3637cc-e1a0-45e4-af1b-6b37f3626ecb
[img3]: https://github.com/user-attachments/assets/2cc51c8b-fe97-4f55-ae3a-dd8e95a36ede
[img4]: https://github.com/user-attachments/assets/dc908943-6114-453d-a2dc-ea90c06c19c4
[img5]: https://github.com/user-attachments/assets/9958bd7d-a61e-4d84-81e2-049fb0620892
[img6]: https://github.com/user-attachments/assets/712e6e18-99ae-4387-94fd-32cec5564e3f
[img7]: https://github.com/user-attachments/assets/0e1acee6-6b75-43dc-b61e-21a25d03b42b
[img8]: https://github.com/user-attachments/assets/d9bfc7f5-8b31-4930-b308-b0596cb58f19
