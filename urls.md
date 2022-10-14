# SISTEMA DE ULRs

## Pegando Produtos
<br>

PEGAR TODOS OS PRODUTOS DE UM MERCADO ESPECIFICO:
<br>
**link**: https://ceara-cientifico.herokuapp.com/${NomeDoMercado}

**valores do mercado** = biga, Deirton, Francisco
<br>
<br>
<br>
PEGAR PRODUTOS DE UM MERCADO ESPECIFICO DIVIDIDO POR CATEGORIA(TIPO)<br>

**link**: https://ceara-cientifico.herokuapp.com/${NomeDoMercado}/produtos?tipo={QualTipo}

**valores do tipo**: &nbsp;
Cafe, Frutas, Oleo, Acucar, Macarrao, Arroz, Feijao, Legumes, Margarina, Farinha, Leite, Sal, Cuscuz
<br>
<br>
<br>
PEGAR PRODUTOS DE UM MERCADO ESPECIFICO DIVIDIDO POR CATEGORIA(TIPO) LIMITANDO A QUANTIDADE DE PRODUTOS

**link**: https://ceara-cientifico.herokuapp.com/${NomdeDoMercado}/produtos?tipo={QualTipo}&tamanho={limiteDeProdutos}

obs: {limiteDeProdutos} recebe numeros inteiros, limita a quantidade de produtos que deseja receber. Ex: 'De 4 produtos com a classificação 'Frutas' quero apenas 1. Se o limite for superior ao que tem registrado, havera um array com alguns elementos null. caso queira receber tudo, apenas omita '&tamanho'
<br>
<br>
<br>
___
## PEGANDO MEDIAS
<br>
1-PEGANDO MEDIA DA CESTA BASICA EM RELAÇÃO AOS TRES MERCADOS.<br>

**link**: https://ceara-cientifico.herokuapp.com/mercados/media

obs: retorna um objeto com atributo MeidaCesta e NotFound, que indica a media e os produtos que nao fizeram parte da cesta, respectivamente.
<br>
<br>
2-PEGANDO MEDIA DOS PRECOS DOS PRODUTOS COM BASE NA CESTA BASICA, POR MERCADO
<br>
**link**: https://ceara-cientifico.herokuapp.com/mercados/media/${NomeDoMercado}?tamanho={Quantos}

obs: Tamanho indica a quantidade de produtos por classificação. A **cesta é composta por**: &nbsp;Arroz, Feijao, Oleo, Margarina, Macarrao, Farinha, Leite, Cuscuz, Sardinha, Acucar, Bolacha, Sal, Polpa, Cafe. Entao pegara uma certa quantidade de cada. Recomendo deixar no 1.
<br>
<br>
<br>
**obs**: {}ou ${} sao valores que você preenchera, os links que nao tiverem isso, nao precisa colocar nada, so copia e cola. Valores do Mercado e tipo(classificação) é padrao para todas urls.