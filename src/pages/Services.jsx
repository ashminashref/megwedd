import React from 'react'
import FlowingMenu from '../components/ui/FlowingMenu'

function Services() {
  // 1. Define the items you want to show in the menu
  const demoItems = [
    { 
      link: '#', 
      text: 'Cinematic Films', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400' 
    },
    { 
      link: '#', 
      text: 'Wedding Photography', 
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400' 
    },
    { 
      link: '#', 
      text: 'Candid Moments', 
      image: 'https://images.unsplash.com/photo-1465495910483-0d674b0b700e?q=80&w=400' 
    },
    { 
      link: '#', 
      text: 'Pre-Wedding Shoots', 
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400' 
    }
  ];

  return (
    <div style={{ height: '100vh', width: '100%' }} className='pt-40 mb-100'>
      <p className='text-orange-500 text-[10px] px-8 font-bold mb-4 tracking-[0.4em] uppercase'>
  Signature Craft
</p>
<h1 className='text-white px-8 text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.85]'>
  Our <br/> <span className="italic font-serif font-light text-neutral-400">Services</span>
</h1>
<p className='px-8 text-neutral-500 max-w-lg mb-20 text-lg font-light leading-relaxed'>
  A curation of cinematic offerings designed to preserve your legacy. 
  From grand narratives to intimate whispers, discover our artistry.
</p>
        <FlowingMenu 
          items={demoItems} 
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#f97316" // Using your Orange accent for the hover effect
          marqueeTextColor="#000000"
        />
    </div>
  )
}

export default Services