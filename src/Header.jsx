import React from 'react';

function Header() {
  return (
    <div>
    <div className='top_head'>
          <img src="http://www.themespride.com/wp-content/themes/themespride/images/logo.png" alt="" />
      
      <div className="text">
          <p><span>Spring Special!</span> Festive Sale! Enjoy <span>20% OFF</span> Use Code: <span>"NY23Festiv20"</span>
          </p>
      </div>
      <div className="button">
          <button>BUY NOW</button>
      </div>
      
    </div>

    <div className="text2">
      <p>Up to <span>70% Discount</span> on Fashion collection for this week Get Now</p>
    </div>
  

{/* <div className="nav container-fluid">
<div className="sec-1">
  <a>ABOUT US</a>
  <a>MY ACCOUNT</a>
  <a>WISH LIST</a>
  <a>CHECK OUT</a>
</div>
<div className="contact">
    <p>Need help? Call us: <span>917-991-9010</span></p>
</div>
<br/>
</div>
<br/> */}
</div>

  );
}

export default Header;
