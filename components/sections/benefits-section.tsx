"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: "Skip the Long Queues",
    description: "Book your tickets online and get instant digital passes. No more waiting in long lines at the venue.",
    image: "skip-line.png"
  },
  {
    title: "Find the Best Deals",
    description: "Compare prices and find the best deals for water parks and events. Save money with our exclusive offers.",
    image: "best-deal.png"
  },
  {
    title: "Plan Your Entertainment",
    description: "Discover and book water parks and events in advance. Get notifications for new events and special offers.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            WHY USE HAMARA TICKET
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Transform Your Entertainment Experience
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Hamara Ticket helps you discover, book, and enjoy water parks and events with ease and convenience.
          </motion.p>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            const ref = useRef(null);
            const isBenefitInView = useInView(ref, { once: true, amount: 0.3 });
            
            return (
              <div 
                key={index} 
                ref={ref}
                className={`grid grid-cols-1 ${isEven ? 'md:grid-cols-[55%_45%]' : 'md:grid-cols-[45%_55%]'} gap-8 md:gap-16 items-center`}
              >
                <motion.div 
                  className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={isBenefitInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-sm uppercase tracking-wider mb-1">Hamara Ticket Feature</p>
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`${isEven ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={isBenefitInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{benefit.description}</p>
                  
                  <ul className="space-y-4">
                    {[
                      "Book tickets in seconds",
                      "Get instant digital passes",
                      "Compare prices and deals",
                      "Receive exclusive offers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-3 mt-1.5 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;