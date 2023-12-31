import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';

function Order() {
  let {ord}=useParams()
  let conform=Data.filter((x)=>x.id==ord)

  return (
    <>
     <div className="conform-all">
    {conform.map((x)=>
         <div className="orderplace row">
             <div className='order-img col-4'>
                 <img src={x.image}></img>
             </div>
             <div className="nextcol col-6">       
                <div className='order-title'>
                    <h3>{x.title}</h3>
                </div> 
                  
                <div className="order-price">
                  <h2>PRICE : Rs.<span>{x.price}</span></h2>
                </div>
                <div className="order-conform">
                  <button><h2>SHIP OFF</h2></button>
                  <button className="cancel"><h2>CANCEL ORDER</h2></button>
                </div>
             </div>
          </div>
          
       )}
       
       </div>
    </>

  );
}

export default Order;
