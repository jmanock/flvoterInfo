import React from 'react';
import pic from '../Images/download.png'

const Home = () =>{
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <img src={pic} className='card-img-top' alt='pic' style={{width:'25%'}}></img>
            <div className='card-body'>
              <h5 className='card-title'>Name</h5>
              <p className='card-text'>Key Issues</p>
              <p className='card-text'>News</p>
              <ul className='list-group'>
                <li className='list-group-item'><a href='twitter.com'>Twitter</a></li>
                <li className='list-group-item'><a href='facebook.com'>Facebook</a></li>
                <li className='list-group-item'><a href='instagram.com'>Instagram</a></li>
                <li className='list-group-item'><a href='website.com'>Website</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <img src={pic} alt='pic' style={{width:'25%'}}/>
            <div className='card-body'>
              <h5 className='card-title'>Name</h5>
              <p className='card-text'>Key Issues</p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><a href='#'>Twitter</a></li>
                <li className='list-group-item'><a href='#'>Facebook</a></li>
                <li className='list-group-item'><a href='#'>Instagram</a></li>
                <li className='list-group-item'><a href='#'>Website</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
