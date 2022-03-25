import React, { useState } from "react";


const Nav = () => {

  const desplegarList = (e) => {
    let padre;
    e.target.id ? padre = e.target.id  : padre = e.target.parentElement.id;
   const img = document.querySelector(`#${padre ? padre : e.target.id} img`);
    img.classList.toggle("rotar");
    const mostrarElemento = padre;
    const p = document.querySelector(`#${mostrarElemento} p`);
    //Elemto actual
    const oculto = document.querySelector(`[data-nav="${mostrarElemento}"]`);
  
 //Elemento anterior
 const mostradoAnt = document.querySelector('.mostrar');
      

    if(oculto.classList.contains('ocultar')){
      if(mostradoAnt){

        //Cerrar el submenu que este abierto
        const pAnt = document.querySelector(`#${mostradoAnt.dataset.nav} p`)
        const imgAnt = document.querySelector(`#${mostradoAnt.dataset.nav} img`)
        //console.log(mostradoAnt.dataset);
        mostradoAnt.classList.remove("mostrar");
        mostradoAnt.classList.add('ocultar');
        imgAnt.classList.remove("rotar");
        pAnt.style.textDecoration = 'none';
      }
      oculto.classList.remove("ocultar");
      oculto.classList.add("mostrar");
      p.style.textDecoration = 'underline';
    }else{
      oculto.classList.remove("mostrar");
      oculto.classList.add("ocultar");
      p.style.textDecoration = 'none';
    }
  }
  
  return (
    <div className=" m-desktop">
      <div className="barra">
        <div className="barra-nav ">
          <img className="barra-logo" alt="Logo" src="images/logo.svg" />
          <nav className="navegacion">
            <ul>
              <li>
                <button type="button" onClick={desplegarList} id='Product'>
                <p>Product</p>
                  <img src="images/icon-arrow-light.svg" alt="arrow" />
                </button>

                <div className=" posicionar ocultar" data-nav="Product">
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </div>
              </li>
              <li>
              
                <button type="button" onClick={desplegarList} id='Company'>
                <p>Company</p>
                  <img src="images/icon-arrow-light.svg" alt="arrow" />
                </button>
                <div className="posicionar ocultar" data-nav="Company">
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
              </li>
              <li>
              
                <button type="button" onClick={desplegarList} id='Connect'>
                <p>Connect</p>
                  <img src="images/icon-arrow-light.svg" alt="arrow" />
                </button>
                   
        <div className="posicionar ocultar" data-nav="Connect">
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">Linkedin</a>
        </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="barra-ac">
          <a href="#">Login</a>
          <a href="#" className="btn btn-white">
            sing Up
          </a>
        </div>
      </div>
      </div>
  );
};

export default Nav;
