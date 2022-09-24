## Como cadastrar um novo produto

1- coloque dentro de uma **array**. <br/>

exemplo: const produtos = [
    {
        tipo: 'coloque o tipo',
        marca: 'coloque o nome da marca',
        quantidade: 'estoque do prodduto',
        preco: 'quanto é o produto'
    },<br/>
    {
        tipo: 'coloque o tipo',
        marca: 'coloque o nome da marca',
        quantidade: 'estoque do prodduto',
        preco: 'quanto é o produto'
    },<br/>
    {
        # novo produto 
    }
]<br/>


2-  para cada **objeto**, representado por '{}', e um novo produto, no exemplo anterior, tem 2  produtos

um produto diferente e criado um novo objeto, se um produto tem os mesmos atributos(marca, nome, tipo e preco)
e feito somente um objeto e aumenta +1 no atributo quantidade

exemplo: um produto tem marca: soya, tipo: oleo e preco: 15, outro produto tem os mesmos atribiutos, entao
cria apenas um objeto e acrescenta +1 no atributo quantidade, ou seja quantidade = 2(quantidade: 2)

caso outro produto tenha algum atributo diferente, sera criado um novo objeto.


## SISTEMA DE PASTAS

o registro de produtos sera na pasta database/schemas
terá 3 pastas: mercado1, mercado2, mercado3

para cada pasta tera um arquivo .js, onde sera registrado os produtos, entao ai sera feito os passos do exemplo anterior
em cada arquivo tem um exemplo, apague e faça outro ou apenas continue substituindo os valores e adicionando novos objetos.


obs: os produtos tem que ser registrados em seus respectivos mercado
para cada produto tem seu mercado



