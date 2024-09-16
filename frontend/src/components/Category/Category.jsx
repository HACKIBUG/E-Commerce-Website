import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/hero/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button'

const Category = () => {
  return (
    <div className='py-8'>
      <div className="container">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brand/70 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="mb-4">
            <p className='mb-[2px] text-gray-400 font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-20 mr-2'>Earphone</p>
            <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'}></Button>
          </div>
        </div>
        <img src={Image1} alt="" className='w-[320px] absolute bottom-0 ml-3'/>
        </div>

        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/70 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="mb-4">
            <p className='mb-[2px] text-white font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-40 mr-2'>Gadget</p>
            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandYellow'}></Button>
          </div>
        </div>
        <img src={Image2} alt="" className='w-[320px] absolute -right-4  xl:top-1 md:top-3 lg:top-[40px]'/>
        </div>

        <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="space-y-2 mb-4 ml-7">
            <p className='mb-[2px] text-gray-700 font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-20 mr-2'>Laptop</p>
            <Button text='Browse' bgColor={'bg-white'} textColor={'text-primary'}></Button>
          </div>
        </div>
        <img src={Image3} alt="" className='w-[370px] absolute top-1/2 pr-7 -translate-y-1/2 -right-0 '/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Category
