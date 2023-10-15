import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';
import { Link } from 'react-router-dom';
function Details() {
    let {pict}=useParams()
    let getid=Data.filter((x)=>x.id==pict)
    let quantity;
    
    const [ count , updateCount ] = useState(0)
     console.log({quantity})
    return (
    <div>
       <div className="detail-all">
        
        {getid.map((x)=>
    
        <div className='detail-cont row'>
            <div className='detail-img col-3'>
                 <img src={x.image}></img>
                </div>
         <div className="nextcol col">       
                <div className='detail-title'>
                    <h2>{x.title}</h2>
                </div>
                <div className='detail-det'>
                    <b>{x.description.substring(0,500)}</b>
                    <h3>CATEGORY : {x.category}</h3>
                </div><br/>

                <div className='detail-footer'>
                    <h3>PRICE : {x.price}$</h3>
                </div>
               
                <div className="counter">
                  <h3>Quantity : </h3>
                <a onClick={()=>updateCount(count-1)}><button> - </button></a> 
                  <h3> {count} </h3>
                <a onClick={()=>updateCount(count+1)}><button> + </button></a>
                </div>
          
                <Link to={`/order/${x.id}`}><button>CONFORM ORDER</button></Link>

         </div>
    </div>    
    )}
</div>    
        </div>

  
  );
}

export default Details;
