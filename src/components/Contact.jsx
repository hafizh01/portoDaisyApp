// components/Contact.jsx

import {CgMail} from 'react-icons/cg';
import {FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import React from 'react';
import {FiMessageSquare, FiMail, FiCheckCircle} from 'react-icons/fi'
import react, {useState, useEffect} from 'react';
import { EmailAuthCredential } from 'firebase/auth/web-extension';
import { GrRadialSelected } from 'react-icons/gr';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMethodChooser, setShowMethodChooser] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);


  // Simpan draft ke localStorage
  useEffect(()=>{
    const saveDraft = ()=>{
      const draft = {name, email, message}
      localStorage.setItem('contactDraft', JSON.stringify(draft) );
    }
    const timeoutId = setTimeout(saveDraft, 500)
    return ()=>clearTimeout(timeoutId);
  }, [name, email, message])

  //  load draft 
  useEffect(()=>{
    const saved = localStorage.getItem('contactDraft');
    if (saved){
      try{
        const {name, email, message} = JSON.parse(saved);
        setName(draft.name || '')
        setEmail(draft.email || '')
        setMessage(draft.message || '')
      }catch(error){
        console.error('Error loading draft:', error);
      }
    }
  }, [])
// Template Pesan WhatsApp
  const getWhatsAppMessage = ()=>{
    return ` Hallo Hafizh, im interested in your portofolio
    ${name || 'visitor'}.
    ${email||'No email provided'}.
    ${message || 'Dikirim via contact Portofolio.'}`;

  }


  const getMailMessage = ()=>{
    return ` ,
      ${name, email, message}`;
  }

  const sendMessage = (e) =>{
    setIsSending (true)
    setSelectedMethod(method)
    let url = ''
    let text = ''

    switch(method){
      case 'whatsapp':
      text = getWhatsAppMessage()
      url = `https://wa.me/6285771025150?text=${encodeURIComponent(text)}`
      break

      case 'email':
        text = getMailMessage()
        url = `mailto:muhammadhafizh192168@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(text)}`
        break

      case 'linkedin':
        url = 'https://www.linkedin.com/in/muhammad-hafizh-2b2b14304/'
        break

      default:
        return

    }

// buka Aplikasi
    window.open(url, '_blank')

    // Tampilkan Konfirmasi
    setIsSending(false)
    setShowMethodChooser(false)
    setSentSuccess (true)

// reset form
    setTimeout(()=>{
      setName('');
      setEmail('');
      setMessage('');
      localStorage.removeItem('contactDraft')
      setSentSuccess(false);
    },3000)
  }
  // Simulasi Delay nya blom ada

  // handle Submit
  const handleSubmit = (e)=>{
    e.preventDefault()

    // validasi
    if (!name.trim()){
      alert('Mohon masukkan nama Anda.');
      document.querySelector('input[name="name"]')?.focus();
      return
     }
     
    if (!message.trim()) {
      alert('Mohon isi pesan Anda');
      document.querySelector('textarea')?.focus();
      return;
    }

    // Tampilkan Pilihan Metode
    setShowMethodChooser(true)

  }

  // quich send not form
  const quickSend = (method, defaultMessage = '')=>{
    if(defaultMessage){
      let url = ''

      if (method === 'whatsapp'){
        url = `https://wa.me/6285771025150?text=${encodeURIComponent(defaultMessage)}`
      }else if (method === 'email'){
        url = `mailto:muhammadhafizh192168@gmail.com?subject=Quick%20Message&body=${encodeURIComponent(defaultMessage)}`
      }
      window.open(url,'blank')
    }else{
      sendMessage(method)
    }

  }









  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        

        {/*Success dicoba */}
        {sentSuccess && (
          <div className=' max-w-lg mx-auto mb-6' >
            <div className='alert alert-success shadow-lg animate-pulse '>
              <FiCheckCircle className="text-2xl"/>
              <div >
                <h3 className='font-bold'>Your message has been sent successfully!</h3>
                <div className='text-xs'>
                  {selectedMethod === 'whatsapp' ? 'whatsapp' :
                  selectedMethod === 'email' ? 'Email' :
                  selectedMethod === 'linkedin' ? 'LinkedIn' : 'LinkedIN'

                  }

                </div>
              </div>
            </div>
          </div>
        )}


        {/*  Success dicoba */}
        

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <CgMail className="text-white text-3xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1"
                      href="mailto:muhammadhafizh192168@gmail.com"
                  >Email</p>
                  <a 
                  href="mailto:muhammadhafizh192168@gmail.com"
                  className='text-gray-600 hover:text-emerald-600 transition-colors'
                  >muhammadhafizh192168@gmail.com</a >

                  {/* <button
                  onClick={()=>{
                    const waMessage = `Hello, Hafizh  ${encodeURIComponent(name)}
                    . ${encodeURIComponent(message)}`;
                    window.open(`mail${encodeURIComponent(name)}&body=${encodeURIComponent(waMessage)}`, '_blank');
                  }}
                  className='btn btn-danger w-full gap-2'
                > 
                  <CgMail className='text-white text-xl'/>
                  Send via Email

                </button> */}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center ">
                  <FaWhatsapp className='text-white text-3xl '/>

                </div>
                <div>
                  <p className="font-bold text-lg mb-1">WhatsApp</p>
                  <a 
                  // href='https://wa.me/6285771025150'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-emerald-600 transition-colors'
                  >
                  +62 857 7102 5150
                  </a>

{/* Quick Send Message */}


                <div className=''>
                  <h4 className=''>Send Message</h4>
                <div className='space-y-3'>
                <button
                  onClick={ ()=>{
                    const waMessage = `Hallo Hafizh, im interested in your portofolio ${encodeURIComponent(name)}
                    . ${encodeURIComponent(message)}`;
                    window.open(`https://wa.me/6285771025150?text=${waMessage}`, '_blank');
                  }}
                  className='btn btn-success w-full gap-2'
                >

                  <FaWhatsapp className='text-white text-xl'/>
                  Send via WhatsApp
                </button>

                </div>
                </div>


{/* Social LinkedIn */}


                  <div className='mt-4 '>
                    <h4>Connect to Social</h4>
                    <div className='space-y-2'>
                      <a href="https://www.linkedin.com/in/muhammad-hafizh-2b2b14304/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary  gap-2">
                      <FaLinkedin className='text-white text-xl'/>
                      LinkedIn
                      </a>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}

          <div className="lg:w-1/2">
            <form  className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="input input-bordered w-full focus;border-emerald-500"
                  name="name"
                  // value={name}
                  onChange={(e) => setName(e.target.value)}
                  required

                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
              </label>
              
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="input input-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  name="email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered h-32" 
                  placeholder="Your message..."
                  name="message"
                  // value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required


                ></textarea>
                <span className='label-text-alt text-gray-500'> {message.length}/2000 characters </span>

              </div>
              

              <form action=""
              onSubmit={handleSubmit}
              >
              <div>

                <button type="submit" 
                disabled={isSending}
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                {isSending ?(
                  <>
                <span className="loading loading-spinner loading-sm">
                  Sending...
                </span>
                </>
                ):(
                  <>
                  <FiMessageSquare className="ml-2"/>
                  Send Message
                  </>
                )}
                </button>
                </div>
              </form>
              <p className='text-sm text-gray-500 text-center'>
                required fields. Your message will be sent via your preferrd app.
              </p>


{/* contact info */}
             


            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
