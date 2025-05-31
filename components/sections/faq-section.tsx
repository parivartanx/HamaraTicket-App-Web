"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book tickets through Hamara Ticket?",
    answer: "Booking tickets is simple! Just download our app, browse water parks or events, select your preferred date and time, choose the number of tickets, and complete the payment. You'll receive digital tickets instantly on your device."
  },
  {
    question: "Can I book tickets for a group?",
    answer: "Yes! Hamara Ticket makes group bookings easy. You can book multiple tickets in a single transaction, and we offer special group discounts for larger bookings. Perfect for family outings or corporate events."
  },
  {
    question: "How do I use my digital tickets?",
    answer: "Your digital tickets will be available in the app immediately after booking. Simply show the QR code at the venue entrance, and our staff will scan it for entry. No need to print anything!"
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including credit/debit cards, UPI, digital wallets, and net banking. All transactions are secure and encrypted for your safety."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule your booking through the app. Cancellation policies vary by venue, and refunds are processed according to the venue's terms. Check the specific venue's policy before booking."
  },
  {
    question: "How do I find water parks and events near me?",
    answer: "The app uses your location to show nearby water parks and events. You can also use filters to search by date, price range, or specific activities. We regularly update our listings with new venues and events."
  }
];

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have Questions? We Have Answers
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about booking water parks and events with Hamara Ticket.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              const ref = useRef(null);
              const isFaqInView = useInView(ref, { once: true, amount: 0.1 });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;