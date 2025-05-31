"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What people are saying about DevInsight.ai
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1)].map((_, index) => {
        return (
          <div
            key={"testimonial" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                “DevInsight.ai helped me land two interviews.”
              </span>{" "}
              The AI-generated portfolio was far more insightful than anything I wrote manually. It connects all my tech activities beautifully.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Developer",
    title: "Priya Shah",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring Manager",
    title: "Arjun Malhotra",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            “DevInsight is our go-to for dev evaluation.”
          </span>{" "}
          We use it to understand a candidate’s strengths before even looking at their resume.
        </p>
      </div>
    ),
  },
  {
    category: "Frontend Engineer",
    title: "Tanvi Sharma",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            “AI-generated summary was shockingly accurate.”
          </span>{" "}
          It analyzed my GitHub and even referenced a side project from 2022. Blew my mind.
        </p>
      </div>
    ),
  },
];
