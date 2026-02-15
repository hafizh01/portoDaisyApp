// import {Route, Routes} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Portofolio from './components/Portofolio'
import SkillsSlider from './components/SkillsSlider'
import Contact from './components/Contact'


const App = () => {

  
  return (

    // kenapa di tambahin Main className karena untuk memberikan padding top 
    // agar tidak tertutup oleh navbar yang fixed, sehingga konten utama tetap 
    // terlihat dengan baik saat di scroll.
  <main className='pt-auto'>

  {/* ini digunakan untuk routing dari beberapa page  */}
    {/* <Routes>
      <Route path='/' element={Homepage} />
      <Route path='/about' element={About} />
      <Route path='/portfolio' element={Portofolio} />
    </Routes> */}


{/* metode ini hanya 1 page saja  */}
    <Navbar/>
    <Hero />
    <About />
    <Portofolio />
    <SkillsSlider />
    <Contact />

  </main>
  )
}

export default App