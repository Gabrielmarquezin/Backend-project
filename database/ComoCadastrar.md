## Como cadastrar um novo produto

1- coloque dentro de um **array**. <br/>

exemplo: const produtos = [<br/>
    {<br/>
     &nbsp; &nbsp;tipo: 'coloque o tipo',<br/>
     &nbsp; &nbsp;  marca: 'coloque o nome da marca',<br/>
     &nbsp; &nbsp;  quantidade: 'estoque do prodduto',<br/>
     &nbsp; &nbsp;   preco: 'quanto é o produto'<br/>
    },<br/>
    {<br/>
     &nbsp; &nbsp; tipo: 'coloque o tipo',<br/>
     &nbsp; &nbsp;marca: 'coloque o nome da marca',<br/>
     &nbsp; &nbsp;quantidade: 'estoque do prodduto',<br/>
     &nbsp; &nbsp;preco: 'quanto é o produto'<br/>
    },<br/>
    {<br/>
     &nbsp;&nbsp;# novo produto <br/>
    }<br/>
]<br/>


2-  para cada **objeto**, representado por '{}', é um novo produto, no exemplo anterior tem 2  produtos<br/>

um produto diferente é criado um novo objeto, se um produto tem os mesmos atributos(marca, nome, tipo e preco)
é feito somente um objeto e aumenta +1 no atributo quantidade

exemplo: um produto tem marca: soya, tipo: oleo e preco: 15, outro produto tem os mesmos atributos, entao
cria apenas um objeto e acrescenta +1 no atributo quantidade, ou seja quantidade = 2(quantidade: 2)

caso outro produto tenha algum atributo diferente, sera criado um novo objeto.


## SISTEMA DE PASTAS

o registro de produtos sera na pasta database/schemas<br/>
terá 3 pastas: mercado1, mercado2, mercado3

para cada pasta tera um arquivo .js, onde sera registrado os produtos, entao ai sera feito os passos do exemplo anterior <br/>
em cada arquivo tem um exemplo, apague e faça outro ou apenas continue, substituindo os valores e adicionando novos objetos.


obs: os produtos tem que ser registrados em seus respectivos mercado<br/>
para cada produto tem seu mercado



