import React, { Component } from 'react';
import api from './service/api';

class App extends Component {
 
  state = {dados: []}




async componentDidMount() {
  const response = await api.get("020b2c0f");
  
  console.log(response.data);
  
  this.setState({dados: response.data});
}

render () {

  const { dados } = this.state;

  return (
  <div>
   <div class="jumbotron text-center">
   <h1>Sheetsu SCORE</h1>
   </div>
    
   
    {dados.map(sheetsu => (
      <body>
      <div key={sheetsu.id} class="card" style={{ width: '18rem'}} >
        <img alt='sheetsu' src='https://images.dog.ceo/breeds/shihtzu/n02086240_12348.jpg'/>
      <div class="card-body">
        <h2>
          <strong>Sheetsu: </strong>
          {sheetsu.name}
        </h2>
        <p>
         score:
          {sheetsu.score}
        </p>
       </div><br/>
      </div>
      </body>
    ))}
    <div class="jumbotron text-center">
  <p>Footer</p>
</div>
  </div>);

}
}

export default App;
