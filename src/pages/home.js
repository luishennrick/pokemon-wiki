import React, { Component } from 'react';
import api from '../service/api';
import Body from './body.js';
import Header from './header.js';
import pokemonlogo from "../img/pokemonlogo.png";
import wiki from "../img/wiki.png";
import Footer from './footer.js';
import pkone from "../img/pkone.png"
import pktwo from "../img/pktwo.png"
import pktri from "../img/pktri.png"

var pkm;


class Home extends Component {
 
  state = {pokemon: [],
           pokemon: null
  }

 
  

async componentDidMount() {
  const response = await api.get(`/pokemon/charizard/`)
  
  
 
  
 .then(response => {
    let resp = JSON.stringify(response)
    this.setState({pokemon: response.data})
   
  
  

});


  
}


render () {

  const { pokemon } = this.state;

  return (
  <div>
   <Header>
    <img src={pokemonlogo} alt='pokemon' className='img1' />
    <img src={wiki} alt='wiki' className='img2' />
   </Header>
  
   <Body>
    <label>Pesquisar Pokémon:</label><br/>
    <input type="text" id='pkm' placeholder="Digite o nome ou ID"/><br/><br/>
   <input type="submit" class="btn btn-danger" value="enviar" onclick={pkm}/><br/><br/>
   
    {pokemon && (
      
      <div key={pokemon.name} >
        
      <div className="card">
       
      <h3>
          <strong>Pokémon: </strong>
          {pokemon.name}
        </h3>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} width="100%" />
        <p>
         <h5>ID:&ensp;{pokemon.id}</h5>
          Tipo:&ensp;  
          {pokemon.types[0].type.name}<br/>
          Habilidades:&nbsp;
          {pokemon.abilities[0].ability.name},&nbsp;
          {pokemon.abilities[1].ability.name}
        </p>
        <h5> 
          HP:&nbsp;
          {pokemon.stats[0].base_stat}&ensp;
          ATK:&nbsp;
          {pokemon.stats[1].base_stat}&ensp;
          DEF:&nbsp;
          {pokemon.stats[2].base_stat}
          </h5>
       </div><br/>
      </div>
      
    )}
    </Body>
    <Footer>
      <img src={pktwo} alt='two' />
      <h1>© copyright 2022</h1>
      <img src={pktri} alt='tri' className='pk1' />
      <img src={pkone} alt='one' />

</Footer>
  </div>);

}
}

export default Home;
