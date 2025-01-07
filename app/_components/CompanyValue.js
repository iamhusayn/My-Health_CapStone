"use client"

import { useState } from "react";
import React from "react";
// import "../app/global.css";


const CompanyValue = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {setToggleState(index)};

  return (
    <>
      <div className="value-container">
        <div className="tab-container">
          <input type="radio" name="option" id="1"></input>
          <label for="1">
            <div className="tab-name">Trust</div>
            <div className="tab-content">
              <p>
                <strong>Trust</strong> is the foundation of quality healthcare,
                fostering open communication, personalized care, and better
                health outcomes. At MediCare, we prioritize transparency,
                empathy, and professional expertise to ensure you feel confident
                in your care. By clearly explaining diagnoses and treatments,
                respecting your privacy, and listening to your concerns, we
                build a partnership that supports your well-being. Together,
                through honesty and collaboration, we create a healthcare
                experience grounded in trust and understanding, ensuring you
                receive compassionate, evidence-based care every step of the
                way.
              </p>
            </div>
          </label>

          <input type="radio" name="option" id="2"></input>
          <label for="2">
            <div className="tab-name">Innovation</div>
            <div className="tab-content">
              <p>
                <strong>Innovation</strong> drives the future of healthcare,
                transforming how we diagnose, treat, and prevent illnesses. At
                MediCare, we embrace cutting-edge technologies, groundbreaking
                research, and advanced medical techniques to deliver the highest
                standard of care. Our team continually integrates the latest
                advancements, from state-of-the-art equipment to innovative
                treatment options, ensuring you receive effective, personalized
                solutions tailored to your needs. By fostering a culture of
                innovation, we are committed to improving outcomes, enhancing
                patient experiences, and shaping a healthier future for all.
              </p>
            </div>
          </label>

          <input type="radio" name="option" id="3"></input>
          <label for="3">
            <div className="tab-name">Customer Focus</div>
            <div className="tab-content">
              <p>
                <strong>Customer focus</strong> is at the heart of everything we
                do at MediCare. We are dedicated to understanding and addressing
                your unique needs, ensuring that every aspect of your healthcare
                experience is tailored to you. From compassionate communication
                and personalized care plans to prompt responses and a welcoming
                environment, our team prioritizes your comfort, convenience, and
                satisfaction. By actively listening to your concerns and valuing
                your feedback, we strive to build lasting relationships based on
                trust, respect, and a shared commitment to your well-being. Your
                health and happiness are our top priorities.
              </p>
            </div>
          </label>

          <input type="radio" name="option" id="4"></input>
          <label for="4">
            <div className="tab-name">Integrity</div>
            <div className="tab-content">
              <p>
                <strong>Integrity</strong> is the foundation of our commitment
                to delivering exceptional healthcare at MediCare. We uphold the
                highest ethical standards in every interaction, ensuring
                honesty, transparency, and accountability in the care we
                provide. From offering clear and accurate information to making
                decisions that prioritize your well-being, we are dedicated to
                doing what is right, every time. Our team fosters trust through
                consistent actions and unwavering dedication to treating every
                patient with fairness, respect, and compassion. At the core of
                our mission is a promise to act with integrity, placing your
                health and trust above all else.
              </p>
            </div>
          </label>

          <input type="radio" name="option" id="5"></input>
          <label for="5">
            <div className="tab-name">Collaboration</div>
            <div className="tab-content">
              <p>
                <strong>Collaboration</strong> is essential to delivering
                comprehensive, patient-centered care at MediCare. Our team works
                closely with you, your family, and a network of healthcare
                professionals to ensure seamless communication and coordinated
                treatment plans tailored to your unique needs. By fostering
                partnerships across medical disciplines and actively involving
                you in the decision-making process, we aim to provide the
                highest quality care and achieve the best possible outcomes.
                Together, through open dialogue and shared expertise, we create
                a healthcare experience built on trust, teamwork, and a unified
                commitment to your well-being.
              </p>
            </div>
          </label>

          <input type="radio" name="option" id="6"></input>
          <label for="6">
            <div className="tab-name">Quality</div>
            <div className="tab-content">
              <p>
                <strong>Quality</strong> is at the core of everything we do at
                MediCare, ensuring that you receive the highest standard of care
                at every stage of your healthcare journey. From experienced
                medical professionals and state-of-the-art facilities to
                evidence-based treatments and personalized care plans, we are
                dedicated to delivering excellence in all aspects of your care.
                Our commitment to continuous improvement, rigorous safety
                protocols, and compassionate service ensures that your health,
                comfort, and satisfaction are always our top priorities. At
                MediCare, quality isn’t just a goal—it’s our promise to you.
              </p>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

{/* <>
  <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-20 py-10 bg-[]">
    {values.map((company, index) => (
      <div
        key={index}
        className="bg-slate-950 w-96 lg:w-[700px] lg:h-[300px] rounded-lg p-12 space-y-4"
      >
        <h3 className="text-white text-2xl lg:text-4xl">
          <strong>{company.header}</strong>
        </h3>
        <p className="text-white text-lg lg:text-2xl">{company.paragraph}</p>
      </div>
    ))}
  </div>
</>; */}

export default CompanyValue;
