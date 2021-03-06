import React from "react";

function Header(props) {
  const handleOrder = (cart) => {   
    console.log(cart);
  };

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
          
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Start Bootstrap</a>
        </div>
          
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li >

              
              

              <a href="#">Items In Cart ({props.numberOfItemsInCart})</a>
              {/* {console.log(props.numberOfItemsInCart)}; */}
              
            </li>

            <li>
              <a href="#" onClick={()=>{handleOrder(props.cart)}}>Check Out</a>

            </li>
          </ul>
        </div>
         
      </div>
      
    </nav>



  );

}

export default Header;

