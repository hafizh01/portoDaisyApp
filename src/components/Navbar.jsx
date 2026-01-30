import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  // Cek posisi scroll untuk efek visual (opsional)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// Fungsi untuk scroll ke section tertentu


  const scrollToPortofolio = () => {
    const portofolioSection = document.getElementById('portofolio');
    if(portofolioSection){
      portofolioSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if(aboutSection){
      aboutSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  // Fungsi untuk scroll ke home/atas halaman
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Atau alternatif:
    // document.documentElement.scrollTop = 0;
  }

  return (
    <div className={`w-screen navbar bg-base-300 fixed py-5 z-50 shadow-sm transition-all duration-300 ${!isAtTop ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}>
      <div className="navbar-start">
        {/* Dropdown Menu <1080 */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a onClick={scrollToAbout} className="text-lg cursor-pointer">About</a></li>
            <li><a onClick={scrollToPortofolio} className="text-lg cursor-pointer">Portfolio</a></li>
            <li><a onClick={scrollToContact} className="text-lg cursor-pointer">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        {/* Tombol Home - Klik untuk kembali ke atas */}
        <button 
          onClick={scrollToHome}
          className=" text-3xl font-bold  cursor-pointer"
        >
          Hafizh Portofolio
        </button>
      </div>

      <div className="navbar-end">
        <label htmlFor="search-input" className="label"></label>
        <input type="search" id="search-input" className="input input-bordered w-24 md:w-auto" placeholder="Search..." />
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> 
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar;