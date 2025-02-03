import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';


const Search = () => {
  return (
    <div className=' flex justify-center items-center bg-[#f4f4f4] w-full ' >
        <div className=' flex justify-start items-center w-[80%] h-[45px] bg-[#f4f4f4]  text-[#232425] font-normal ' >
        <Icon path={mdiMagnify} size={0.9} />
        <input className='w-full ring-0 border-none outline-none h-full font-normal italic px-2 text-pretty bg-[#f4f4f4] text-[#d3d3d3]  ' placeholder='Search for a movie, tv shows, person...' type="text" name="" id="" />

        </div>
    </div>
  )
}

export default Search