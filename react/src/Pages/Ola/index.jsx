import React, {useState} from 'react';
import './estilo.css';
import { Card } from '../../components/card';
function Ola(){
  const [clientname, setClientname] = useState('');
  const [client, setClient] = useState([]);

  function hand(){
    const novo = {
      name: clientname,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setClient(prevState =>[...prevState, novo]);
  }


  return(
    <div className="container">
    <h1>Lista de Clientes</h1>
    <input type="text" placeholder="Digite o nome..."
    onChange={e =>setClientname(e.target.value)}
    />
    <button type="button" onClick={hand}
    >Adicionar</button>
    
      {
       client.map(client => 
       <Card 
       key={client.time}
       name={client.name} 
       time={client.time} />) 
      }
    </div>

  )
}

export default Ola;