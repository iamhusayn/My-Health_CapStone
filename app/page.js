import React from 'react'
import HeroSession from './_components/HeroSession';
import About from './Paths/About/about';
import Services from './Paths/Services/services';
import Doctors from './_components/Doctors';

const Page = () => {
  return (
    <>
      <HeroSession />

      <About />
    
      <Services />

      <Doctors />
    </>
  );
}

export default Page;
