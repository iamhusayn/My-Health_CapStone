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
        <header className="flex flex-row justify-center bg-slate-950 bg-opacity-40 h-[322px] md:h-[800px] md:pt-80 pt-28 w-full space-y-2 z-0">
          <div className="text-white text-center w-[52rem] h-[18rem]">
            <HeroSession
              heroheader="Meet Our Professionals"
              heroparagraph="We're here to help you through your health journey."
            />
          </div>
        </header>
      </section>

      <section className="mx-auto px-8 py-16 bg-white gap-10">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-8">
          We'd love to have a conversation
        </h2>

        <div className="flex flex-col md:flex-col items-center bg-slate-950 md:w-[1200px] md:h-[700px] m-auto p-auto p-16 rounded-lg gap-10">
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

          <div className="flex flex-col items-center mx-auto md:w-3/4 space-y-4">
            <label className="text-white">Message</label>
            <textarea
              className="w-[320px] md:w-[800px] rounded-md"
              rows="10"
            ></textarea>
          </div>
          <div className="text-center">
            <ContentBtn btnTittle="Submit" />
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
