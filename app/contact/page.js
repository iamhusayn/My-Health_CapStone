import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import HeroSession from "../_components/HeroSession";
import ContentBtn from "../_components/Buttons/ContentBtn";
import SectionHeader from "../_components/SectionHeader";

const ContactPage = () => {
  return (
    <>
      <section className="relative flex justify-center md:h-[800px]">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730450086/pexels-karolina-grabowska-5207114_u5zzal.jpg"
            alt="Picture of doctors"
            width={1920}
            height={400}
          />
        </div>
        <div className="bg-slate-950 bg-opacity-40 w-full h-full">
          <header className="flex flex-row justify-center h-[322px] lg:h-[800px] lg:pt-80 lg:w-full w-3/4 pt-40 space-y-2 m-auto">
            <div className="text-white text-center w-[52rem] h-[18rem]">
              <HeroSession
                heroheader="Meet Our Professionals"
                heroparagraph="We're here to help you through your health journey."
              />
            </div>
          </header>
        </div>
      </section>

      <section className="mx-auto px-8 pt-60 py-16 bg-white gap-10">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-8">
          We'd love to have a conversation
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center bg-slate-950 md:w-[1200px] md:h-[700px] m-auto p-auto p-16 rounded-lg gap-10">
          <div>
            <form
              action="https://formsubmit.co/alawiyehusayn@email.com"
              method="POST"
              className="text-slate-950 flex flex-col space-y-4"
            >
              <label className="text-white">First Name</label>
              <input
                className="bg-white rounded-md h-10 w-[400px]"
                type="text"
                id="text"
                name="text"
              />

              <label className="text-white">Last Name</label>
              <input
                className="bg-white rounded-md h-10 w-[400px]"
                type="text"
                id="text"
                name="text"
              />

              <label className="text-white">Age</label>
              <input
                className="bg-white rounded-md h-10 w-[400px]"
                type="text"
                id="text"
                name="text"
              />

              <label className="text-white">Gender</label>
              <input
                className="bg-white rounded-md  h-10 w-[400px]"
                type="text"
                id="text"
                name="text"
              />
            </form>
          </div>

          <div className="flex flex-col items-center lg:w-full space-y-4">
            <label className="text-white">Write a message</label>
            <textarea
              className="w-[390px] lg:w-[600px] rounded-md p-4"
              rows="10"
            ></textarea>
            <ContentBtn btnTittle="Submit" className="text-center" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div>
            <SectionHeader header="Our Contact Team" />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-32 pt-14">
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730454962/pexels-carmel-nsenga-735492-18788957_ppwne7.jpg"
                alt="Team Member 1"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">Sarah Johnson</h3>
              <p className="text-slate-800">Customer Service Manager</p>
            </div>
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
                alt="Team Member 2"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">James Thompson</h3>
              <p className="text-slate-800">Emergency Director</p>
            </div>
            <div className="text-center">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730454966/pexels-shkrabaanthony-6749777_oo8kpj.jpg"
                alt="Team Member 3"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">Emily Carter</h3>
              <p className="text-slate-800">Mental Health Counselor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center text-white justify-center py-10 bg-slate-950 mb-2">
        <div className="mx-auto px-4">
          <div>
            <SectionHeader header="Our Location & Hours" />
          </div>
          <div className="pt-8">
            <div className="flex flex-col text-center justify-center">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">Visit Us</h3>
              <p className="text-lg">
                <strong>Address:</strong>No, 43 Montgomery Road, Yaba, Lagos.
              </p>
              <p className="text-lg">
                <strong>Hours:</strong> Mon-Fri, 9am-5pm
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
