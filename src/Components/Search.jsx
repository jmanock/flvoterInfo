import React,{Component} from 'react';
import House from './House';
import Senators from './Senators';

class Search extends Component{
  render(){
    const housePeople = House.map((x) =>{
      return(
        <ul key={x.id} className='list-group list-group-flush'>
          <li className='list-group-item'>{x.name} </li>
        </ul>
      )
    });

    const senators = Senators.map((z) => {
      return(
        <ul key={z.district} className='list-group list-group-flush'>
          <li className='list-group-item'>{z.name}</li>
        </ul>
      )
    })
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h3>Florida House</h3>
            {housePeople}
          </div>
          <div className='col-sm'>
            <h3>Florida Senate</h3>
            {senators}
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
