//capturas de elementos
const characterID = document.getElementById('characterId'); //capturas de elementos atraves das ids insiridas pelo input
const btnGo = document.getElementById('btn-go'); //botão que gerará o evento após clicado 
const content = document.getElementById('content'); //conteudo que será preenchido pelo objeto
const image = document.getElementById('img'); //img da api

//requisição da api através da função criada
// API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas
const fetcApi = (value) => {
    //nesse caso, o fetch traz um resultado em formato de promise e em seguida ele é transormado eum o objt js, que também é uma promesie que espera uma saida, queaundo sai salva os dados do novo objeto no data  
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data; // a variável result vai retornar o objeto chamado em data 
    }); //o then promete que algo será entregue e ai sim ele faz algo

    return result; // a função fetchApi vai retornar o que está armazenado em result (ou seja o objeto escolhido pela id)
}

//evento que com o click do botão o valor inserido no input será passado como parametro para a função fetcApi em value
btnGo.addEventListener('click', async (event) => {
    event.preventDefault(); // previne que a página atuaize e eu perca os dados
    //viavel que armazena o valor do input do usuario salvo na variavel characterID
    const result = await fetcApi(characterID.value);
    content.textContent = `${JSON.stringify(result, undefined, 2 )}`;//converte para texto o arquivo json, e insere no local do html que tem o content,  o async permite que de tempo do código processar e rotornar oq desejamos, se tentar sem não aparece nada 
    image.src = `${result.image}`; //isere a imagem do objeto na área de imagem do html (mudamos a propriedade src). 
} )