 /* Quando clicar no pokemon escolhido na listagem temos que esconder o cartão aberto e mostrar o cartão correspondente ao que foi selecionado. 

 Ao clicar em um pokemon da listagem pegamos o id desse card para saber qual mostrar.
 Remover a classe ativo que marca o pokemon selecionado.
 Adicionar a classe ativo no item da lista selecionada.
 */

// Precisamos trabalhar com dois elementos (listagem e cartão pokemon - criar duas variáveis). Evento de clique feito pelo usuário na listagem. 
 const listingPokemon = document.querySelectorAll('.Pokemon')
 const pokemonsCard = document.querySelectorAll('.card')

 listingPokemon.forEach(Pokemon => {
  //Evento de clique feito pelo usuário na listagem.  
  
 Pokemon.addEventListener('click', () => {
   // remover a classe aberto do cartão que estiver aberto
   const cardPokemonOpen = document.querySelector('.open')  
   cardPokemonOpen.classList.remove('open')
   
   //Ao clicar em um pokemon da listagem pegamos o id desse card para saber qual mostrar.
    const idPokemonSelect = Pokemon.attributes.id.value 

    const cardPokemonWillOpen = document.getElementById('card-' + idPokemonSelect)
    cardPokemonWillOpen.classList.add('open')

    const listPokemonOpen = document.querySelector('.ativo')  
    listPokemonOpen.classList.remove('ativo')
    
    const listPokemonWillOpen = document.getElementById(idPokemonSelect)
    listPokemonWillOpen.classList.add('ativo')

  })
 })

