import React from 'react'

const NavMobile = () => {

 const desplegarMobile = (e) =>{
  let padre;
  e.target.id ? padre = e.target.id  : padre = e.target.parentElement.id;
 const img = document.querySelector(`#${padre ? padre : e.target.id} img`);
  img.classList.toggle("rotar");
  const mostrarElemento = padre;
  //Elemto actual
  const oculto = document.querySelector(`[data-nav="${mostrarElemento}"]`);

  if(oculto.classList.contains('ocultar')){
    oculto.classList.remove("ocultar");
    oculto.classList.add("subNav");
  }else{
    oculto.classList.remove("subNav");
    oculto.classList.add("ocultar");
  }
 }
 const mostrarMenu = (e) =>{
   const nav = document.querySelector('.m-mobile .navegacion') ?? document.querySelector('.nav-mobile');
   const mHa = document.querySelector('#menu-h');
   const mClose = document.querySelector('#menu-close');
   nav.classList.toggle('nav-mobile');
   nav.classList.toggle('navegacion');
   if(mHa.classList.contains('menu-b')){
     mHa.classList.remove('menu-b');
     mHa.classList.add('ocultar-menu');
     mClose.classList.remove('ocultar-menu');
     mClose.classList.add('menu-b-cerrar');
   }else{
    mHa.classList.add('menu-b');
    mHa.classList.remove('ocultar-menu');
    mClose.classList.add('ocultar-menu');
    mClose.classList.remove('menu-b-cerrar');
   }



 }
 
  return (
 <div className=' m-mobile'>
      <div className="barra">
        <div className="barra-nav ">
          <img className="barra-logo" alt="Logo" src="images/logo.svg" />
          <nav className="navegacion">
            <ul>
              <li>
                <button type="button" onClick={desplegarMobile}  id='Product-m'>
                <p>Product</p>
                  <img src="images/icon-arrow-dark.svg" alt="arrow" />
                </button>

                <div className=" ocultar" data-nav="Product-m">
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </div>
              </li>
              <li>
              
                <button type="button" onClick={desplegarMobile}  id='Company-m'>
                <p>Company</p>
                  <img src="images/icon-arrow-dark.svg" alt="arrow" />
                </button>
                <div className=" ocultar" data-nav="Company-m">
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
              </li>
              <li>
              
                <button type="button" onClick={desplegarMobile}  id='Connect-m'>
                <p>Connect</p>
                  <img src="images/icon-arrow-dark.svg" alt="arrow" />
                </button>
                   
        <div className="subNav ocultar" data-nav="Connect-m">
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">Linkedin</a>
        </div>
              </li>
            </ul>
            <div className="barra-ac-mobile">
          <a href="#">Login</a>
          <a href="#" className="btn btn-white">
            sing Up
          </a>
        </div>
          </nav>
        </div>
        <img src="images/icon-hamburger.svg" alt="menu-Hamburguesa" className="menu-b" id='menu-h' onClick={mostrarMenu}/>
        <img src="images/icon-close.svg" alt="menu-close" className="ocultar-menu" id='menu-close' onClick={mostrarMenu}/>
      </div>
      </div>
  )
}

export default NavMobile