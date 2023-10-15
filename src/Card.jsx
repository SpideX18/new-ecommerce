import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import Details from './Details';
function Card() {
  return (
    <div>

      
  <div className="card-all">
            {Data.map((x)=>
            <>
            <div className='card'>
             <div className='c-con'>
             <div class="c-img" >
  <Link  to={`/details/${x.id}`}> <img src={x.image}></img></Link>
  <div class="c-body">
    <h5 class="c-title">{x.title.substring(0,10)}</h5>
    <div className='c-foot'>
                   <h5 className='p-cat'>{x.price}$</h5>
                </div>
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

export default Card;
