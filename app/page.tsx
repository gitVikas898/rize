"use client";

import React from "react";
import LandingText from "./components/LandingText";
import WhyRizze from "./components/Feature";
import FAQSection from "./components/Faq";

const Page = () => {
  return (
    <div className=" min-h-screen text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <LandingText />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <WhyRizze />
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <FAQSection />
      </section>
    </div>
  );
};

export default Page;
