import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Image1 from './assets/hero/headphone.png'
import Image2 from './assets/category/smartwatch2.png'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerData = {
  discount:"40% Off",
  title:"Fine Smile",
  date:"10 Sep to 26 Sep",
  image:Image1,
  title2:'Air Solo Bass',
  title3:'Winter Sale',
  title4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, tenetur quisquam. Nihil magni assumenda necessitatibus inventore minima velit, nemo quidem perspiciatis aspernatur, sint deserunt quo aliquam officia saepe esse fugiat.',
  bgColor:"#f42c37",
};
const BannerData2 = {
  discount:"40% Off",
  title:"Happy Hours",
  date:"10 Sep to 26 Sep",
  image:Image2,
  title2:'Smart Solo',
  title3:'Winter Sale',
  title4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, tenetur quisquam. Nihil magni assumenda necessitatibus inventore minima velit, nemo quidem perspiciatis aspernatur, sint deserunt quo aliquam officia saepe esse fugiat.',
  bgColor:"#2dcc61",
};


const App = () => {
  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(()=>{
    AOS.init(
      {
        easing: 'ease-in-sine',
        duration: 800,
        delay:100,
        offset:100,
      });
      AOS.refresh();
      },[])
  return (
    <div className='bg-white dark:bg-gray-900 darl:text-white duration-200 overflow-hidden'>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category></Category>
    <Category2></Category2>
    <Services></Services>
    <Banner data={BannerData}/>
    <Products></Products>
    <Banner data={BannerData2}/>
    <Blogs></Blogs>
    <Partners></Partners>
    <Footer></Footer>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} handleOrderPopup={handleOrderPopup}></Popup>
    </div>
  )
}

export default App
