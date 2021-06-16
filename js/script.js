let  entrada = document.querySelector('input[name=tarefa]');
let botao = document.getElementById('botao');
let nome_anime =  document.querySelector("#lista");
let informativo = document.querySelector(".card");

let lista_anime = JSON.parse(localStorage.getItem("animes_stg")) || [];
function renderizar(){
    nome_anime.textContent = '';
    lista_anime.forEach(function(valor,indice)  {
     let criar_elemento = document.createElement('li');
     criar_elemento.setAttribute('class', 'list-group-item list-group-item-action');
    criar_elemento.onclick = function(){
        remover_item_da_lista(this);
    }
     let item = document.createTextNode(valor);
     criar_elemento.appendChild(item);
     nome_anime.appendChild(criar_elemento);
    });

}
renderizar();

botao.onclick = function(){
    let adicionar = entrada.value;
    if (adicionar != "" ){
        lista_anime.push(adicionar);
        entrada.value = "";
       
        renderizar();
        
        remover_mensagem_de_erros();
        salvar_conteudo_storage();
    }else{
        remover_mensagem_de_erros();
        let aviso = document.createElement("span");
        aviso.setAttribute('class', 'text-danger');
        let mensagem_inf = document.createTextNode("Por gentileza digite um anime, não foi possivel adicionar pois o campo esta vázio !");
        informativo.appendChild(aviso);
        aviso.appendChild(mensagem_inf);
            }
}

function remover_mensagem_de_erros(){
    let todas_msg= document.querySelectorAll("span");
    todas_msg.forEach(function(msg, i){

        informativo.removeChild(msg);
    })
}

function remover_item_da_lista(item_a_remover){
    console.log(lista_anime.indexOf(item_a_remover.textContent));
    lista_anime.splice(lista_anime.indexOf(item_a_remover.textContent),1);
    renderizar();
    salvar_conteudo_storage();
}

function salvar_conteudo_storage(){
    localStorage.setItem('animes_stg', JSON.stringify(lista_anime)); 
 }