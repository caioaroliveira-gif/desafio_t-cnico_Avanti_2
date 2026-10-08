# Perfil GitHub

Aplicação web desenvolvida em React para realizar a busca de perfis públicos do GitHub. O usuário informa um nome de usuário, a aplicação consulta a API pública do GitHub e apresenta as principais informações encontradas no perfil.

Este projeto foi desenvolvido como parte do **Desafio Técnico 02 – Busca de Perfil no GitHub**.

---

## Sobre o projeto

O objetivo da aplicação é permitir que qualquer pessoa pesquise um perfil existente no GitHub de forma simples e visual.

Após digitar um nome de usuário no campo de busca e clicar no botão, a aplicação realiza uma requisição para a API do GitHub. Se o perfil for encontrado, são exibidos:

- Foto de perfil;
- Nome do usuário;
- Biografia;
- Mensagem alternativa quando a biografia não estiver disponível.

Caso o usuário informado não exista, a aplicação apresenta uma mensagem de erro clara na tela.

O layout foi desenvolvido buscando fidelidade à referência disponibilizada no desafio, com fundo escuro, detalhes em azul, área central de busca, card de perfil e estado visual para mensagens de erro.

---

## Funcionalidades

- Busca de usuários públicos do GitHub;
- Consumo da API pública do GitHub;
- Exibição de foto de perfil;
- Exibição do nome do usuário;
- Exibição da biografia do perfil;
- Mensagem de erro quando o usuário não for encontrado;
- Validação para impedir buscas vazias;
- Estado de carregamento durante a requisição;
- Layout responsivo para diferentes tamanhos de tela;
- Estilização realizada com CSS puro.

---

## Demonstração de uso

1. Digite o nome de um usuário do GitHub no campo de busca.
2. Clique no botão de busca ou pressione a tecla `Enter`.
3. Aguarde o carregamento da requisição.
4. Caso o perfil exista, serão exibidos a foto, o nome e a biografia.
5. Caso não exista, será apresentada uma mensagem informando que nenhum perfil foi encontrado.

Exemplos de usuários que podem ser pesquisados:

```text
torvalds
gaearon
github
```

---

## Tecnologias utilizadas

| Tecnologia       | Utilização no projeto                                           |
| ---------------- | --------------------------------------------------------------- |
| React            | Criação da interface e organização dos componentes              |
| JavaScript       | Lógica da aplicação, estados, requisições e tratamento de erros |
| CSS3             | Estilização, responsividade, cores, espaçamentos e layout       |
| HTML5            | Estrutura base da aplicação                                     |
| GitHub REST API  | Consulta dos dados públicos dos usuários                        |
| Create React App | Estrutura inicial e scripts de desenvolvimento do projeto       |

O projeto utiliza React com JavaScript, sem TypeScript, Bootstrap, Tailwind ou bibliotecas de componentes visuais. A proposta foi manter uma implementação objetiva, organizada e compatível com os requisitos do desafio.

A estrutura atual possui arquivos padrão do Create React App, incluindo `src/index.js`, `src/App.js`, `src/App.css` e `src/index.css`. O `index.js` renderiza o componente principal `App` dentro do elemento `root` da página. [11][8][10]

---

## API utilizada

A aplicação consome a API pública do GitHub para buscar os dados de um perfil.

Endpoint utilizado:

```text
GET [https://api.github.com/users/{username}](https://api.github.com/users/{username})
```

Exemplo de requisição:

```text
GET [https://api.github.com/users/torvalds](https://api.github.com/users/torvalds)
```

Na resposta da API, a aplicação utiliza principalmente as seguintes informações:

```js
{
  name: "Nome do usuário",
  login: "nome-de-usuario",
  avatar_url: "url-da-foto",
  bio: "Biografia do perfil"
}
```

O endpoint retorna dados públicos do perfil. Quando o usuário informado não existe, a API retorna uma resposta com status `404`, e a aplicação trata esse cenário para exibir a mensagem de erro apropriada. A documentação oficial do GitHub descreve os endpoints REST voltados a usuários e o acesso às informações de perfis públicos. [GitHub Docs](https://docs.github.com/en/rest/users)

---

### Principais arquivos

| Arquivo             | Responsabilidade                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `src/App.js`        | Contém a estrutura principal da aplicação, estados, busca e tratamento das respostas da API |
| `src/App.css`       | Contém a estilização específica da tela de busca e do card de perfil                        |
| `src/index.js`      | Renderiza o componente principal React na página                                            |
| `src/index.css`     | Define estilos globais, reset básico e configurações gerais da página                       |
| `public/index.html` | Arquivo HTML base que contém o elemento onde o React é renderizado                          |

---

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm, que normalmente já é instalado junto com o Node.js
- Git, caso queira clonar o repositório

Para confirmar que o Node.js e o npm estão instalados, execute:

```bash
node --version
npm --version
```

### Clonando o repositório

```bash
git clone https://github.com/caioaroliveira-gif/desafio_t-cnico_Avanti_2.git
```

Acesse a pasta do projeto:

```bash
cd nome-do-repositorio
```

### Instalando as dependências

```bash
npm install
```

### Executando em ambiente de desenvolvimento

```bash
npm start
```

Após iniciar o projeto, a aplicação ficará disponível normalmente em:

```text
http://localhost:3000
```

O navegador poderá abrir automaticamente. Caso isso não aconteça, basta acessar o endereço manualmente.

---

## Scripts disponíveis

### `npm start`

Executa a aplicação em modo de desenvolvimento.

```bash
npm start
```

### `npm test`

Executa os testes configurados no projeto.

```bash
npm test
```

### `npm run build`

Gera a versão otimizada da aplicação para produção.

```bash
npm run build
```

Após esse comando, os arquivos de produção serão gerados na pasta `build`.

---

## Lógica da aplicação

A lógica principal utiliza os hooks `useState` do React para controlar os dados da interface.

Os principais estados utilizados são:

```js
const [username, setUsername] = useState("");
const [user, setUser] = useState(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
```

| Estado     | Finalidade                                               |
| ---------- | -------------------------------------------------------- |
| `username` | Armazena o nome digitado no campo de busca               |
| `user`     | Armazena os dados retornados pela API do GitHub          |
| `error`    | Armazena mensagens de erro para exibição na tela         |
| `loading`  | Controla a mensagem de carregamento durante a requisição |

A busca é feita com `fetch` e `async/await`:

```js
const response = await fetch(`https://api.github.com/users/${username}`);
```

Caso a resposta da API não seja bem-sucedida, a aplicação exibe uma mensagem de erro ao usuário. Caso seja bem-sucedida, as informações retornadas são inseridas no estado e renderizadas no card do perfil.

---

## Tratamento de cenários

A aplicação considera os seguintes cenários:

| Cenário              | Comportamento esperado                                                 |
| -------------------- | ---------------------------------------------------------------------- |
| Campo de busca vazio | Exibe uma mensagem solicitando que o usuário informe um nome           |
| Perfil encontrado    | Exibe foto, nome e biografia do perfil                                 |
| Perfil sem biografia | Exibe uma mensagem alternativa no lugar da bio                         |
| Perfil inexistente   | Exibe uma mensagem de erro informando que nenhum perfil foi encontrado |
| Busca em andamento   | Exibe uma mensagem de carregamento até a API responder                 |

---

## Responsividade

A interface foi estruturada para se adaptar a diferentes tamanhos de tela.

Em telas menores, o card de perfil passa a organizar seus elementos em coluna, melhorando a leitura e o uso em dispositivos móveis. O campo de busca e os espaçamentos também se ajustam para preservar a usabilidade.

---

## Decisões de desenvolvimento

Algumas decisões foram tomadas para manter o projeto simples, objetivo e alinhado ao desafio:

- Uso de React com componentes funcionais;
- Uso de `useState` para gerenciamento de estado local;
- Uso de `fetch` nativo do JavaScript para consumir a API;
- Uso de CSS puro, sem frameworks de estilização;
- Tratamento de erros de requisição;
- Uso de `async/await` para tornar o código assíncrono mais legível;
- Estrutura simples, sem rotas ou gerenciamento global de estado, pois o escopo possui uma única página;
- Criação de estilos responsivos para diferentes dispositivos.

---

## Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, principalmente para auxiliar em etapas como:

- Organização de ideias;
- Revisão de estrutura de código;
- Sugestões de estilização;
- Esclarecimento de conceitos de React, JavaScript e consumo de APIs;
- Apoio na documentação do projeto.

Entretanto, o desenvolvimento não foi realizado de forma automática. Houve participação humana ativa na interpretação dos requisitos, tomada de decisões, escolha da estrutura, adaptação ao layout solicitado, validação da lógica, revisão do código e testes de funcionamento.

A inteligência artificial foi utilizada como ferramenta de apoio e aprendizado, enquanto as decisões finais e a validação da implementação foram conduzidas de forma humana.

---

## Melhorias futuras

Como possíveis evoluções para o projeto, poderiam ser implementadas:

- Exibir quantidade de seguidores, seguindo e repositórios públicos;
- Adicionar link direto para o perfil do GitHub;
- Exibir os repositórios públicos do usuário;
- Adicionar paginação para repositórios;
- Criar animações mais elaboradas durante o carregamento;
- Implementar histórico das últimas buscas;
- Criar testes para os principais comportamentos da aplicação;
- Utilizar um token de autenticação em ambiente seguro caso seja necessário ampliar o limite de requisições da API;
- Melhorar a acessibilidade com mais atributos ARIA e navegação por teclado.

---

## Autor

Desenvolvido por Caio Augusto Roçovski de Oliveira como parte de um desafio técnico de desenvolvimento front-end.

---

## Licença

Este projeto foi desenvolvido para fins educacionais e de avaliação técnica.
