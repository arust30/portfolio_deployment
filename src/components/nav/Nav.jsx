import React from 'react'
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FiAward } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiPlusSquare } from 'react-icons/fi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href ="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineHome />  </a>
      <a href ="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}> <BiBook /> </a>
      <a href ="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <MdWorkOutline /> </a>
      <a href ="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}> <HiOutlineClipboardList /> </a>
      <a href ="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <BsFillPersonCheckFill /> </a>
      <a href ="#awards" onClick={() => setActiveNav('#awards')} className={activeNav === '#awards' ? 'active' : ''}> <FiAward /> </a>
      <a href ="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdOutlineMailOutline /> </a>
      <a href ="#more" onClick={() => setActiveNav('#more')} className={activeNav === '#more' ? 'active' : ''}> <FiPlusSquare/> </a>
    </nav>
  )
}

export default Nav