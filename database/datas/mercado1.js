const mercado1 = [
    {
        tipo: 'cafe',
        marca: 'santa clara',
        pesoG: 100,
        preco: 3.5
    },
    {
        tipo: 'cafe',
        marca: 'santa clara',
        pesoG: 250,
        preco: 8.5
    },
    {
        tipo: 'cafe',
        description: 'cafe descafeinado',
        marca: 'santa clara',
        pesoG: 250,
        preco: 16
    },
    {
        tipo: 'cafe',
        marca: 'kimino',
        pesoG: 250,
        preco: 8
    },
    {
        tipo: 'cafe',
        marca: 'cafe puro',
        pesoG: 250,
        preco: 7.5
    },
    {
        tipo: 'cafe',
        marca: 'pilao',
        pesoG: 250,
        preco: 9
    },
    {
        tipo: 'cafe',
        marca: 'uniao',
        pesoG: 250,
        preco: 8.5
    },
    {
        tipo: 'cafe',
        marca: 'Nescafe',
        pesoG: 100,
        preco: 12
    },
    {
        tipo: 'cafe',
        marca: 'Nescafe',
        pesoG: 200,
        preco: 23.5
    },
    {
        tipo: 'cafe',
        marca: 'Nescafe',
        pesoG: 40,
        preco: 3.9
    },
    {
        tipo: 'cafe',
        marca: 'Melita tradicional',
        pesoG: 250,
        preco: 9.5
    },
    {
        tipo: 'Acucar',
        description: 'Açucar cristal',
        marca: 'payol',
        pesoKG: 1,
        preco: 3.6
    },
    {
        tipo: 'Acucar',
        description: 'Açucar demarara',
        marca: 'Forpan',
        pesoKG: 1,
        preco: 5.5
    },
    {
        tipo: 'Feijao',
        description: 'Feijao preto',
        marca: 'Kicaldo',
        pesoKG: 1,
        preco: 7.5
    },
    {
        tipo: 'Feijao',
        description: 'Feijao carioca',
        marca: 'Dona De',
        pesoKG: 1,
        preco: 8.5
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'claybom',
        pesoG: 500,
        preco: 7.5
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'qualy',
        pesoG: 250,
        preco: 5.8
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'qualy',
        pesoG: 500,
        preco: 10.5
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'qualy',
        pesoKG: 1,
        preco: 20
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'Primor',
        pesoG: 500,
        preco: 6.8
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'Primor',
        pesoKG: 1,
        preco: 13
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'puro sabor',
        pesoG: 250,
        preco: 3.5
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'puro sabor',
        pesoG: 500,
        preco: 6.8
    },
    {
        tipo: 'Margarina',
        description: 'Margarina com sal',
        marca: 'puro sabor',
        pesoKG: 1,
        preco: 13
    },
    {
        tipo: 'Sal',
        marca: 'Nota10',
        pesoKG: 1,
        preco: 1
    },
    {
        tipo: 'Sal',
        marca: 'Mar-e-sol',
        pesoKG: 1,
        preco: 1.5
    },
    {
        tipo: 'Oleo',
        description: 'Oleo de soja',
        marca: 'Soya',
        preco: 8.5
    },
    {
        tipo: 'Arroz',
        description: 'Arroz branco',
        marca: '101',
        preco: 4.5
    },
    {
        tipo: 'Arroz',
        description:'Arroz Parborizado',
        marca: '101',
        preco: 4.5
    },
    {
        tipo: 'Arroz',
        description: 'Arroz branco',
        marca: 'Namorado',
        preco: 4.5
    },
    {
        tipo: 'Arroz',
        description: 'Arroz Parborizado',
        marca: 'Namorado',
        preco: 4.5
    },
    {
        tipo: 'Arroz',
        description: 'Arroz branco',
        marca: 'Predileto',
        preco: 3.99
    },
    {
        tipo: 'Arroz',
        description: 'Arroz branco',
        marca: 'panelaco',
        preco: 3.99
    },
    {
        tipo: 'Arroz',
        description: 'Arroz branco',
        marca: 'Beleza',
        preco: 3.99
    },
    {
        tipo: 'Macarrao',
        description: 'Macarrao espaguete',
        marca: 'Estrela',
        pesoG: 400,
        preco: 3.5
    },
    {
        tipo: 'Macarrao',
        description: 'Macarrao espaguete',
        marca: 'Bonsabor',
        pesoG: 400,
        preco: 3.5
    },
    {
        tipo: 'Farinha',
        description: 'Farinha amarela',
        marca: 'RedeCearense',
        pesoKG: 1,
        preco: 4.5
    },
    {
        tipo: 'Farinha',
        description: 'Farinha branca',
        marca: 'RedeCearense',
        pesoKG: 1,
        preco: 4.5
    },
    {
        tipo: 'Cuscuz',
        description: 'Massa de milho',
        marca: 'Vitamilho',
        pesoG: 500,
        preco: 2
    },
    {
        tipo: 'Cuscuz',
        description: 'Massa de milho Flocao',
        marca: 'Vitamilho',
        pesoG: 500,
        preco: 2.25
    },
    {
        tipo: 'Cuscuz',
        description: 'Massa de milho',
        marca: 'Caramil',
        pesoG: 500,
        preco: 1.8
    },
    {
        tipo: 'Pao',
        description: 'Pao Hamburguer',
        marca: 'Shopping Pães',
        preco: 5.8
    },
    {
        tipo: 'Pao',
        description: 'Pao Hot Dog',
        marca: 'Shopping Pães',
        preco: 5.8
    },
    {
        tipo: 'Pao',
        description: 'Pao de leite',
        marca: 'Shopping Pães',
        preco: 5.8
    },
    {
        tipo: 'Pao',
        description: 'Pao de forma',
        marca: 'Shopping Pães',
        preco: 6.25
    },
    {
        tipo: 'Leite',
        description: 'Leite Desnatado',
        marca: 'Betania',
        volumeL: 1,
        preco: 7
    },
    {
        tipo: 'Leite',
        description: 'Leite Integral',
        marca: 'Betania',
        volumeL: 1,
        preco: 7
    },
    {
        tipo: 'Leite',
        description: 'Leite zero lactose',
        marca: 'Betania',
        volumeL: 1,
        preco: 9
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Betania',
        pesoG: 800,
        preco: 36
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Betania',
        pesoG: 200,
        preco: 8.5
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Itambe',
        pesoG: 400,
        preco: 15
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Itambe',
        pesoKG: 1,
        preco: 36
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Itambe',
        pesoG: 200,
        preco: 7.5
    },
    {
        tipo: 'Leite',
        description: 'Leite desnatado em po',
        marca: 'itambe',
        pesoG: 200,
        preco: 9.5
    },
    {
        tipo: 'Leite',
        description: 'Leite integral em po',
        marca: 'Ninho',
        pesoG: 750,
        preco: 36
    },
    {
        tipo: 'Leite',
        description: 'composto lacteo com fibras em po',
        marca: 'Ninho',
        pesoG: 750,
        preco: 36
    },
    {
        tipo: 'Leite',
        description: 'composto lacteo com fibras em po',
        marca: 'Ninho',
        pesoG: 625,
        preco: 30
    },
    {
        tipo: 'Leite',
        description: 'Leite em po Ninho, em lata',
        marca: 'Ninho',
        pesoG: 380,
        preco: 19
    },
    {
        tipo: 'Leite',
        description: 'composto lacteo com fibras em po na lata',
        marca: 'Ninho',
        pesoG: 380,
        preco: 19
    }
    
]

module.exports = mercado1