import HeroImg from '/assets/images/hero1.png'
import cvFile from '/assets/CVHafizh.pdf'

export default function Hero() {

  const scrollToPortofolio = () => {
    const portofolioSection = document.getElementById('portofolio');
    if(portofolioSection){
      portofolioSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  // ini untuk menarik data dari assets 
  const link = document.createElement('a')
  

  return (
     <div className="hero bg-base-200 min-h-screen flex-wrap px-10" id="home">
  <div className="hero-content flex-col md:flex-row-reverse md:gap-20 gap-10">

    <img
      src={HeroImg}
      className="max-w-sm rounded-lg pt-16 pr-8 md:w-full"
    />
    <div className='md:text-left  text-center flex flex-col gap-6'>
      <h1 className="text-5xl font-bold text-emerald-500">Muhammad Hafizh <br/>Wahyu Nugroho</h1>
      <h3 className='font-bold text-3xl'>Front-end Developer</h3>
      <p className="py-6">
       Creating digital experiences modern technology.
      </p>
      
      <div className='flex gap-4'>
      <button onClick={scrollToPortofolio} className="btn bg-emerald-700 hover:bg-emerald-900 shadow-3xl">See Portofolio</button>
      
      <a 
      href={cvFile}      
      download="CVHafizh.pdf"
      >
      <button href={cvFile} download="CVHafizh.pdf" className="btn btn-outline shadow-3xl">Download CV</button>
      </a>
      </div>

    </div>
  </div>
</div>
    
  )

            
}
