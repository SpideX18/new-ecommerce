import React from 'react';
import Home from './Home';
import Data from './Data';
import { Link } from 'react-router-dom';
import Details from './Details';
function Female() {
  let cat ="women's clothing";
  let getdetail = Data.filter((x)=>x.category==cat)
// console.log(getdetail)
  return (
  
        <div>

       <div className='card-container container-fluid'>
            {getdetail.map((x)=>
            <>
             <div className='card-cont'>
             <div class="card-img" >
  <Link  to={`/details/${x.id}`}> <img src={x.image} class="card-img-top"></img></Link>
  <div class="card-body">
    <h5 class="card-title">{x.title.substring(0,10)}</h5>
    <div className='card-footer'>
                   <h5 className='p-cat'>{x.price}$</h5>
                </div>
  </div>
</div>
</div>
</>

             )}
        </div>
        
  </div>
  
      );
}

export default Female;
