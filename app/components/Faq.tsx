"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Rizze help me stay consistent?",
    answer: "Rizze tracks your streaks, and rewards consistency with a heatmap and leaderboard rankings.",
  },
  {
    question: "Can I see my progress over time?",
    answer: "Yes! Rizze features a GitHub-style heatmap where you can track your consistency visually.",
  },
  {
    question: "Is Rizze free to use?",
    answer: "Yes, Rizze is completely free! We want to help students and professionals build solid habits.",
  },
  {
    question: "How do leaderboards work?",
    answer: "Leaderboards rank users based on completed tasks and consistency scores. The more consistent you are, the higher you rank!",
  },
];

export default function FAQSection() {
  return (
    <div className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Frequently Asked Questions ❓
      </motion.h2>

      <div className="mt-10 max-w-3xl mx-auto px-6">
        <Accordion type="single" collapsible className="">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300 dark:border-gray-700">
              <AccordionTrigger className="text-lg text-center font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-center dark:text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
