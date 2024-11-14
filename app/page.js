import React from 'react'
import HeroSession from './_components/HeroSession';
import About from './Paths/About/about';
import Services from './Paths/Services/services';

const Page = () => {
  return (
    <>
      <HeroSession />

      <About />
    
      <Services />
    </>
  );
}

export default Page;
