# Shopper.com.br - Teste Técnico  
Este é o projeto desenvolvido como parte do teste técnico para a vaga de desenvolvedor(a) na Shopper.com.br. O objetivo deste projeto é construir uma ferramenta para atualização de preços em lojas de e-commerce de forma massiva, considerando regras específicas de validação.

## Cenário  
Em uma empresa de e-commerce, é essencial permitir que os usuários atualizem os preços de seus produtos para se manterem competitivos e alinhados com os custos de operação. No entanto, essa tarefa pode se tornar complexa quando lidamos com lojas que possuem milhares de produtos. Portanto, é necessário desenvolver uma ferramenta que permita a atualização massiva de produtos, levando em consideração as seguintes regras:  

O time de Compras gera um arquivo CSV contendo o código do produto e o novo preço.  
O time Financeiro exige que o preço de venda dos produtos não fique abaixo do custo.  
O time de Marketing solicita que o sistema impeça reajustes maiores ou menores do que 10% do preço atual do produto.  
Alguns produtos são vendidos em pacotes, ou seja, um produto composto por um ou mais produtos em quantidades diferentes. Ao reajustar o preço de um pacote, os preços dos componentes devem ser ajustados de forma que a soma dos componentes seja igual ao preço do pacote.  

## Requisitos  
O sistema desenvolvido atende aos seguintes requisitos:  

- Back-end em Node.js: Responsável por implementar todas as regras definidas e lógica de negócio.  
- Front-end em React.js: Utilizado pelo usuário para interagir com a ferramenta.  
- Código em Javascript ou TypeScript (preferencialmente).  
- Banco de dados MySQL (versão 5 ou 8) para armazenar os dados dos produtos.  
- O sistema deve permitir o carregamento de um arquivo de precificação em formato CSV.  
- O sistema deve possuir um botão chamado "VALIDAR".  
- Ao clicar no botão "VALIDAR", o sistema deve ler o arquivo e realizar as seguintes verificações:  
  - Verificar se todos os campos necessários estão presentes.  
  - Verificar se os códigos de produtos informados existem no banco de dados.  
  - Verificar se os preços estão preenchidos e são valores numéricos válidos.  
  - Verificar se o arquivo respeita as regras descritas no cenário.  
  - Ao final da validação, o sistema deve exibir as informações dos produtos enviados, incluindo Código, Nome, Preço Atual e Novo Preço.    
- Caso uma ou mais regras de validação tenham sido quebradas, o sistema deve exibir ao lado de cada produto qual regra foi violada.  
- O sistema deve possuir um botão "ATUALIZAR", que só ficará habilitado se todos os produtos do arquivo estiverem validados e sem regras quebradas.  
- Ao clicar no botão "ATUALIZAR", o sistema deve salvar os novos preços no banco de dados e estar pronto para receber um novo arquivo.  
- O preço de custo dos pacotes deve ser atualizado como a soma dos custos dos seus componentes. Os preços de custo dos produtos que não são pacotes não devem ser atualizados.  

## Como executar o projeto  
Para executar o projeto localmente, siga as instruções abaixo:  

## Pré-requisitos  
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:  

1. Node.js (versão X.X.X)
2. MySQL (versão 5 ou 8) 

## Passos de instalação

1. Clone o repositório do projeto:  
`git clone <URL_DO_REPOSITÓRIO>`    
2. Acesse o diretório do projeto:    
`cd shopper-teste`  
3. Instale as dependências do back-end:  
`cd back-end-express      
npm install`    
4. Importe o banco de dados: 
Execute o script database.sql no seu servidor MySQL para criar a estrutura do banco de dados e preencher a tabela de produtos.  
5. Inicie o servidor do back-end:  
`npm start`    
6. Instale as dependências do front-end:    
`cd ../front-end-react      
npm install`  
7. Inicie o servidor do front-end:    
`npm start`    
8. Acesse a aplicação no navegador:  

## Como utilizar a ferramenta  
1. Faça o upload do arquivo CSV contendo as atualizações de preços dos produtos.  
2. Clique no botão "VALIDAR" para realizar as verificações e validar os dados do arquivo.  
3. Os produtos serão listados na tela, exibindo as informações: Código, Nome, Preço Atual e Novo Preço.  
4. Caso haja alguma violação das regras de validação, a mensagem de erro correspondente será exibida ao lado do produto.  
5. Se todos os produtos estiverem validados, o botão "ATUALIZAR" será habilitado.  
6. Clique no botão "ATUALIZAR" para salvar os novos preços no banco de dados.  
7. O sistema estará pronto para receber um novo arquivo de atualização de preços.  
