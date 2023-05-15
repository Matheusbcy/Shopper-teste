# Shopper.com.br - Teste Técnico  
Este é o projeto desenvolvido como parte do teste técnico para a vaga de desenvolvedor(a) na Shopper.com.br. O objetivo deste projeto é construir uma ferramenta para atualização de preços em lojas de e-commerce de forma massiva, considerando regras específicas de validação.

Cenário
Em uma empresa de e-commerce, é essencial permitir que os usuários atualizem os preços de seus produtos para se manterem competitivos e alinhados com os custos de operação. No entanto, essa tarefa pode se tornar complexa quando lidamos com lojas que possuem milhares de produtos. Portanto, é necessário desenvolver uma ferramenta que permita a atualização massiva de produtos, levando em consideração as seguintes regras:  

O time de Compras gera um arquivo CSV contendo o código do produto e o novo preço.  
O time Financeiro exige que o preço de venda dos produtos não fique abaixo do custo.  
O time de Marketing solicita que o sistema impeça reajustes maiores ou menores do que 10% do preço atual do produto.  
Alguns produtos são vendidos em pacotes, ou seja, um produto composto por um ou mais produtos em quantidades diferentes. Ao reajustar o preço de um pacote, os preços dos componentes devem ser ajustados de forma que a soma dos componentes seja igual ao preço do pacote.  
