import React from 'react'

export default function Portofolio() {
  return (

    <section id='portofolio' className='bg-base-200 min-h-screen pt-5'>

    <div className="container mx-auto px-4 pb-30 w-screen py-20 md:px-8 lg:px-16 ">
        
        <h1 className="text-5xl font-bold text-center mt-15 mb-15  text-bold">Portofolio</h1>
        <p className="text-center">Here are some of my projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center w-full max-w-7xl mx-auto">
{/* CARD 1 */}

        <div className="card bg-base-100 ">
          <figure className='px-4 pt-4x'>
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 

            alt="Shoes" 
            className='rounded-x1 h-48 w-full object-cover'
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">E-commerce Website</h2>
            <p className='text-base leading-8'>Full-stack e-commerce dengan React dan Node.js</p>
            <div className="justify-end card-actions mt-4">
            <button className="btn btn-primary">Live Demo</button>
            </div>
            </div>
        </div>

{/* CARD 2 */}
<div className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Project" 
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mobile App</h2>
              <p className='text-base leading-8'>Aplikasi React Native untuk management task</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">View Code</button>
              </div>
            </div>
          </div>

{/* CARD 3 */}
<div className="card bg-base-100 shadow-xl">
          <figure className='px-4 pt-4'>
            <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Project"
              className='rounded-x1 h-48 w-full object-cover'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Portfolio Website</h2>
            <p className='text-base leading-8'>Website portofolio pribadi menggunakan Next.js</p>
            <div className="justify-end card-actions mt-4">
            <button className="btn btn-primary">Live Demo</button>
            </div>
          </div>
        </div>
{/* CARD 4 */}
<div className="card bg-base-100 shadow-xl">
          <figure className='px-4 pt-4'>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Project"
              className='rounded-x1 h-48 w-full object-cover'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blog Platform</h2>
            <p className='text-base leading-8'>Platform blogging dengan fitur lengkap menggunakan Gatsby.js</p>
            <div className="justify-end card-actions mt-4">
            <button className="btn btn-primary">View Code</button>
            </div>
          </div>  
        </div>
{/* CARD 5 */}
<div className="card bg-base-100 shadow-xl">
          <figure className='px-4 pt-4'>
            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Project"
              className='rounded-x1 h-48 w-full object-cover'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Task Manager</h2>
            <p className='text-base leading-8'>Aplikasi manajemen tugas berbasis web dengan Vue.js</p>
            <div className="justify-end card-actions mt-4">
            <button className="btn btn-primary">Live Demo</button>
            </div>
          </div>
        </div>
        
{/* CARD 6 */}
<div className="card bg-base-100 shadow-xl">
          <figure className='px-4 pt-4'>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Project"
              className='rounded-x1 h-48 w-full object-cover'
            />  
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <p className='text-base leading-8'>Aplikasi cuaca real-time menggunakan API OpenWeather</p>
            <div className="justify-end card-actions mt-4">
            <button className="btn btn-primary">View Code</button>
            </div>
          </div>  
        </div>


        
        </div>
        </div>
    </section>
    
  )
}
