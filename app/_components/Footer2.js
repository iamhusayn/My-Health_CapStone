import React from 'react'
import SectionHeader from './SectionHeader'
import ContentBtn from './Buttons/ContentBtn'

const Footer2 = () => {
  return (
    <div>
        <section className="bg-slate-950 text-white h-[300px] mb-5 py-10 flex flex-col gap-10 items-center">
        <div className="flex justify-center">
          <SectionHeader
            header="Take the next step"
            paragraph="Let’s talk about how we can work together to make healthcare work for all of us."
          />
        </div>
        <ContentBtn btnTittle="Request a demo"/>
      </section>
    </div>
  )
}

export default Footer2