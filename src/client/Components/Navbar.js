import React,{useEffect, useState} from 'react';
// import useContext from 'react';
import { Link } from 'react-router-dom';
// import { myContext } from '../Context';
// import CartCon  from './CartCon'



const Navbar=() => {
     const [scrolled,setScrolled]= useState(false);
    

    //  navbar tiny when scroll
     const handleScroll=() => { 
       window.scrollY>300 ? setScrolled(true): setScrolled(false) ;
       } 
     useEffect(() => { 
      window.addEventListener('scroll',handleScroll) 
    })
    
    let shrink = scrolled ?'nav-header nav-shrink':'nav-header';
   

    

    return (

        <nav className= 'navbar'>
          
            <div className={shrink}>
       
            <button onClick={cOpen} className=""  >  </button>
              <Link to='/'>< img src={ logo }  alt='goodmorning' /></Link> 
              <button  type="button" className="nav-btn" onClick={handleHamToggle} ><i className="fas fa-angle-double-down"></i></button>      
              
             </div>
             <div className="con">
                <ul className="menu">
                <li className="item"><Link to="/">Home</Link> </li>
                <li className="item"><Link to="/new">New user</Link></li>
                
          
        
                </ul>
            </div>
            
   
    
        </nav>



    )
  };
  
  export default Navbar;
  