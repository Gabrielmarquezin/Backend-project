//Sao Francisco
const dataFrancisco = [
    {
        tipo: 'frutas',
        fruta: 'tomate',
        pesoKG: 1,
        preco: 4,
        estado: null,
        classificacao: 'normal',
        description: 'Tomate 1kg',
        img: null
    },
    {
        tipo: 'legumes',
        legume: 'batata',
        pesoKG: 1,
        preco: 6,
        estado: null,
        classificacao: 'normal',
        description: 'Batata inglesa',
        img: null
    },
    {
        tipo: 'margarina',
        marca: 'puro sabor',
        pesoKG: 1,
        preco: 14,
        estado: null,
        classificacao: 'normal',
        description: 'Margarina Puro Sabor 1kg',
        img: null
    },
    {
        tipo: 'margarina',
        marca: 'puro sabor',
        pesoG: 500,
        preco: 7,
        estado: null,
        classificacao: 'normal',
        description: 'Margarina Puro Sabor 500g',
        img: null
    },
    {
        tipo: 'margarina',
        marca: 'puro sabor',
        pesoG: 250,
        preco: 3.5,
        estado: null,
        classificacao: 'normal',
        description: 'Margarina Puro Sabor 250g',
        img: null
    },
    {
        tipo: 'margarina',
        marca: 'qualy',
        pesoKG: 1,
        preco: 20,
        estado: null,
        classificacao: 'normal',
        description: 'Margarina Qualy 1kg',
        img: null
    },
    {
        tipo: 'oleo',
        marca: 'soya',
        description: 'Oleo de soja soya',
        preco: 9,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'oleo',
        marca: 'siol',
        description: 'Oleo de soja siol',
        preco: 6.5,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'acucar',
        marca: 'payol',
        pesoKG: 1,
        preco: 3.8,
        estado: null,
        classificacao: 'normal',
        description: 'Açúcar cristal payol',
        img: null
    },
    {
        tipo: 'macarrao',
        marca: 'richester',
        description: 'Macarrao espaguete',
        pesoG: 500,
        preco: 5.5,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'macarrao',
        marca: 'estrela',
        description: 'Macarrao espaguete',
        pesoG: 500,
        preco: 3.9,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'arroz',
        marca: 'pai joao',
        pesoKG: 1,
        preco: 4.5,
        estado: null,
        classificacao: 'branco',
        description: 'Arroz Branco Pai Joao 1kg',
        img: null
    },
    {
        tipo: 'arroz',
        marca: 'namorado',
        pesoKG: 1,
        preco: 4.5,
        estado: null,
        classificacao: 'branco',
        description: 'Arroz Branco Namorado 1kg',
        img: null
    },
    {
        tipo: 'arroz',
        marca: 'panelaco',
        pesoKG: 1,
        preco: 4,
        estado: null,
        classificacao: 'branco',
        description: 'Arroz Branco Panelaço 1kg',
        img: null
    },
    {
        tipo: 'pao',
        description: 'pao bola',
        preco: 7,
        estado: null,
        classificacao: 'pao bola',
        img: null
    },
    {
        tipo: 'farinha',
        marca: 'ponto do feijao',
        description: 'Farinha amarela',
        pesoKG: 1,
        preco: 5.5,
        estado: null,
        classificacao: 'amarela',
        img: null
    },
    {
        tipo: 'farinha',
        marca: 'ponto do feijao',
        description: 'Farinha branca',
        pesoKG: 1,
        preco: 5.5,
        estado: null,
        classificacao: 'branco',
        img: null
    },
    {
        tipo: 'feijao',
        description: 'Feijao TL',
        pesoKG: 1,
        preco: 7.5,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'betania',
        description: 'Leite integral',
        volumeL: 1,
        preco: 7,
        estado: 'liquido',
        classificacao: 'integral',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'betania',
        description: 'Leite zero lactose',
        volumeL: 1,
        preco: 8,
        estado: 'liquido',
        classificacao: 'sem lactose',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'betania',
        description: 'Leite desnatado',
        volumeL: 1,
        preco: 7,
        estado: 'liquido',
        classificacao: 'desnatado',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'ninho',
        description: 'Leite integral',
        volumeL: 1,
        preco: 12.8,
        estado: 'liquido',
        classificacao: 'integral',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'itambe',
        description: 'Leite em po integral',
        pesoG: 200,
        preco: 8,
        estado: 'po',
        classificacao: 'integral',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'betania',
        description: 'Leite em po integral',
        pesoG: 200,
        preco: 7.5,
        estado: 'po',
        classificacao: 'integral',
        img: null
    },
    {
        tipo: 'leite',
        marca: 'betania',
        description: 'Leite em po integral',
        pesoKG: 1,
        preco: 30,
        estado: 'po',
        classificacao: 'integral',
        img: null
    },
    {
        tipo: 'cafe',
        marca: 'nescafe',
        description: 'Nescafe extraforte',
        pesoG: 40,
        preco: 5,
        estado: null,
        classificacao: 'normal',
        img: null
    },
    {
        tipo: 'cafe',
        marca: 'santa clara',
        preco: 8,
        estado: null,
        classificacao: 'normal',
        description: 'Cafe Santa Clara comum',
        img: null
    }
]

module.exports = dataFrancisco