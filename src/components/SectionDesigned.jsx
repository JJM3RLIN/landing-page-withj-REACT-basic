import React from 'react'

const SectionDesigned = () => {
  return (
    <main className=' section w-10'>
     <h2 className='title'>Designed for the future</h2>   
     <div className="contenido flex">
         <img src="images/illustration-editor-desktop.svg" alt="img-desk" className='img-desk'/>
         <img src="images/illustration-editor-mobile.svg" alt="img-phone" className='img-phone'/>
         <div className="contenido-info">
             <div className="info">
                 <p className='info-title'>Introducing an extensible editor</p>
                 <p className='info-d'>Blogr features an exceedingly intuitive
                     interface wich lets you focus on one thing: create content. 
                     The editor supports management of multiple blogs and allows easy
                     manipulation of embeds such as images, videos, and Markdown. Extensibility
                     with plugins and themes provide easy ways to add functionality or change the looks a blog.
                 </p>
                 </div>

                 <div className="info">
                 <p className='info-title'>Robust content management</p>
                 <p className='info-d'>Blogr features an exceedingly intuitive
                     interface wich lets you focus on one thing: create content. 
                     The editor supports management of multiple blogs and allows easy
                     manipulation of embeds such as images, videos, and Markdown. Extensibility
                     with plugins and themes provide easy ways to add functionality or change the looks a blog.
                 </p>
                 </div>

             </div>
          
         </div>
    </main>
  )
}

export default SectionDesigned