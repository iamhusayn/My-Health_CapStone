import React from "react";
import Image from "next/image";

const CareerPage = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white text-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/digotb1jl/video/upload/v1730078625/cellular_1_cpmhoc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 bg-slate-950 bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Be a part of Our Health Mission
          </h1>
          <p className="text-lg md:text-xl">
            Join a team that’s transforming healthcare.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg"
                alt="Why Join Us"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-lg mb-4">
                We are committed to fostering a healthy work-life balance,
                providing excellent healthcare benefits, and giving you the
                tools to grow your career.
              </p>
              <ul className="list-disc ml-6">
                <li>Competitive salaries and benefits</li>
                <li>Continuous learning and development</li>
                <li>Supportive and inclusive work environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Available Jobs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-2">
                Nurse Practitioner
              </h3>
              <p className="text-gray-700 mb-4">
                Full-time | Location: New York, NY
              </p>
              <p className="text-gray-600">
                We are looking for a dedicated Nurse Practitioner to join our
                growing healthcare team. You will be responsible for...
              </p>
              <button className="mt-4 bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-950">
                Apply Now
              </button>
            </div>

            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-2">Medical Assistant</h3>
              <p className="text-gray-700 mb-4">
                Part-time | Location: Los Angeles, CA
              </p>
              <p className="text-gray-600">
                The Medical Assistant will assist with patient care, prepare
                treatment rooms, and help support the medical team...
              </p>
              <button className="mt-4 bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-950">
                Apply Now
              </button>
            </div>

            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-2">
                Physical Therapist
              </h3>
              <p className="text-gray-700 mb-4">
                Full-time | Location: Miami, FL
              </p>
              <p className="text-gray-600">
                We are looking for a skilled Physical Therapist to work with
                patients to improve their mobility and relieve pain...
              </p>
              <button className="mt-4 bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-950">
                Apply Now
              </button>
            </div>

            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-2">
                Healthcare Administrator
              </h3>
              <p className="text-gray-700 mb-4">
                Full-time | Location: Austin, TX
              </p>
              <p className="text-gray-600">
                As a Healthcare Administrator, you will oversee the daily
                operations of the healthcare facility...
              </p>
              <button className="mt-4 bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-950">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* <Image
                src="https://res.cloudinary.com/demo/image/upload/team-member-1.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              /> */}
              <h3 className="mt-4 text-xl font-semibold text-center">
                Dr. Alex Smith
              </h3>
              <p className="text-center text-gray-600">Chief Medical Officer</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* <Image
                src="https://res.cloudinary.com/demo/image/upload/team-member-2.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              /> */}
              <h3 className="mt-4 text-xl font-semibold text-center">
                Sarah Johnson
              </h3>
              <p className="text-center text-gray-600">Head of Nursing</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* <Image
                src="https://res.cloudinary.com/demo/image/upload/team-member-3.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-full mx-auto"
              /> */}
              <h3 className="mt-4 text-xl font-semibold text-center">
                John Doe
              </h3>
              <p className="text-center text-gray-600">
                Healthcare Administrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
