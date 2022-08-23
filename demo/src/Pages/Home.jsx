import React from 'react';
import Cons from '../Components/Cons';
import Features from '../Components/Features';
import Header from '../Components/Header';
import OurWork from '../Components/OurWork';
import Team from '../Components/Team';
import Services from './Services';


function Home() {
  return (
    <>
        <Header />
        <div className='mx-5 border-4 border-bottom' lang='ar'>
            <h1 className='' style={{color: 'purple'}}>ما الخدمات التي نقدمها ؟</h1>
        </div>
        <Services />
        <div className='m-5 border-4 border-bottom' lang='ar'>
            <h1 className='' style={{color: 'purple'}}>معرض الأعمال</h1>
        </div>
        <OurWork />
        <div className='m-5 border-4 border-bottom' lang='ar'>
            <h1 className='' style={{color: 'purple'}}>مميزاتنا</h1>
        </div>
        <Cons />
        <div className='m-5 border-4 border-bottom' lang='ar'>
            <h1 className='' style={{color: 'purple'}}>فريق العمل</h1>
        </div>
        <Team />
    </>
  )
}

export default Home