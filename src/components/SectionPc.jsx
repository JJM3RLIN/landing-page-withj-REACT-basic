import React from 'react'

const SectionPc = () => {
  return (
    <div className='contenido-pc'>
     
     <img src="images/illustration-laptop-mobile.svg" alt="image-pc-mobile" className='img-phone' />
     <img src="images/illustration-laptop-desktop.svg" alt="image-pc-desk" className='img-desk' />

      <div className='contenido-info contenedor'>
         <div className='info'>
           <p className='info-title'>Free, open, simple</p>
           <p className='info-d'>Blogr is a free and open source application backed by a large
           comumunity of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commeting tools, and works seamlessly with Google Analytics. The
           architecture is clean and is relatively easy to learn
           </p>
           </div>

           <div className='info'>
           <p className='info-title'>Powerful tooling</p>
           <p className='info-d'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deplayment a breeze, but capable of producing even the most complicated sites.
           </p>
           </div>

        </div>
    </div>
  )
}

export default SectionPc