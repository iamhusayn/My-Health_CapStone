"use client"
import React from "react";


const Review = () => {
  const users = [
    {
        review: "Medicare is an employee-friendly benefit that takes the guesswork out of the family-building process, which can often be confusing and overwhelming…Medicare's approach to fertility and family building supports our employees around the world and is tailored to each person.",
        author: "Lian Neeman, Global Director of Benefits, Amazon"
    },

    {
        review: "We had put together a list of everything we wanted with a family support program and Medicare had all of our requirements and more (menopause). We didn’t have to design It ourselves, you already had It",
        author: "Elevance Health"
    },

    {
        review: "We only wanted one partner. We didn’t want to have to go to multiple benefits providers to address all of these various needs—adoption, surrogacy, fertility, egg freezing, loss, pregnancy and postpartum, return-to-work, partners—because everyone’s journey to parenthood is unique.",
        author: "Debbie Westover, Director of Benefits, SoFi"
    },

    {
        review: "Medicare is the single best investment our company has ever made…I cannot recommend it enough! Maven is both an attraction and retention slam dunk; it allows us to solve for the issue of health equity that we'd navigated for years and invest in a meaningful way.",
        author: "Mairead Hanna, Senior Talent Management Director, Vynamic"
    },

    {
        review: "We love that Maven can grow with us and our needs. It’s really exciting to see that as our company grows, Medicare will grow alongside us.",
        author: "Jes Schneider, Senior Manager of Global Compliance and Payroll, Bumble"
    },
];

  return (
    <>
      <div className="lg:h-[700px] m-10 py-16 overflow-hidden md:space-y-20">
        {users.map((review, index) => (
          <div key={index} className="flex flex-col lg:mx-96 my-10 text-center gap-10 lg:gap-40">
            <div className="bg-slate-950 rounded-lg p-8 lg:p-20 space-y-10 lg:space-y-10">
              <h2 className="text-xl lg:text-4xl text-white">{review.review}</h2>
              <p className="text-white lg:text-lg">{review.author}</p>
            </div>
          </div>)
        )}
      </div>
    </>
  );
};

export default Review;
