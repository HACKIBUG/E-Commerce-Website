import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { FaCaretDown } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

 
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";

const MenuLinks=[
  {
    id:1,
    name:"Home",
    link:'/#',
  },
  {
    id:2,
    name:"Shop",
    link:"/#shop",
  },
  {
    id:3,
    name:"About",
    link:"/#about",
  },
  {
    id:4,
    name:"Blogs",
    link:"/#blog",
  },
]
const DropDownLinks=[
  {
    id:1,
    name:'Trending Products',
    link:'/#',
  },
  {
    id:2,
    name:'Best Selling',
    link:'/#',
  },
  {
    id:3,
    name:'Top Rated',
    link:'/#',
  },
]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-5'>
      <div className="container flex justify-between items-center">
        <div className='flex gap-4 items-center'>
        <AnimatedGradientText >
        Shop Ease
      </AnimatedGradientText>
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-4'>
              {MenuLinks.map((data,index)=>(
                  <li key={index}>
                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                      {" "}
                      {data.name}</a>
                  </li>
                ))}
                <li className='relative cursor-pointer group'>
                  <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 '>Quick Links
                  <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300'></FaCaretDown>
                  </span>
                  </a>
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white '>
                    <ul className='space-y-2'>
                      {
                        DropDownLinks.map((data,index)=>(
                          <li key={data.id}>
                             <a className='text-gray-500 rounded-md font-semibold dark:hover:text-wh duration-200 p-2 hover:bg-primary/20 inline-block w-full' href={data.link}>{data.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center gap-4'>
        <div className='relative group hidden sm:block'>
          <input type="text" placeholder='Search' className='search-bar' />
          <IoMdSearch className='text-xl text-gray-600 group:hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'></IoMdSearch>
          </div>
         <button className='relative p-3' >
          <FaCartShopping className='text-xl text-gray-500 dark:text-gray-400 '></FaCartShopping>
          <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex item-center justify-center text-xs'>4</div>
         </button>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
