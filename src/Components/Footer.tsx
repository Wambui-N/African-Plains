import Link from 'next/link';
import React from 'react'

const menuLinks = [
    { path: "/FAQS", label: "Frequently Asked Questions" },
    { path: "#", label: "Terms and Conditions" },
    { path: "#", label: "Privacy Policy" },
    { path: "#", label: "Projects and Programs" },
    { path: "#", label: "Cookies" },
  ];

const Footer = () => {
  return (
    <div className='border-t-[0.5px] border-white/30 lg:py-6 py-3 flex sm:flex-row flex-col justify-between'>
        <div className='flex lg:flex-row flex-col lg:gap-4 gap-0'>
            {menuLinks.map((link, index) => (
                <Link className='text-[10px] uppercase text-white/50' key={index} href={(link.path)}>{link.label}</Link>
            ))}
        </div>
        <p className="text-[10px] uppercase py-2 text-white/50">&copy; African Plains Conservation Trust</p>
    </div>
  )
}

export default Footer