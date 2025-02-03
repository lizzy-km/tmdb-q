import React from 'react'
import Nav from './Nav'
import Search from './Search'

const Header = () => {
  return (
    <div id='header' className=' fixed flex flex-col w-[100%] text-[#f4f4f4] font-bold h-auto bg-[#032541] justify-center items-center  ' >
       <Nav/>
       <Search/>
      
    </div>
  )
}

export default Header