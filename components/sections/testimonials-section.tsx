"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Kumar",
    rating: 5,
    review: "Best app for booking water park tickets! Saved me from standing in long queues. The instant digital tickets are super convenient.",
    date: "2 days ago"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review: "Amazing app! Found great deals on water park tickets and the booking process was super smooth. Highly recommended!",
    date: "1 week ago"
  },
  {
    name: "Amit Patel",
    rating: 5,
    review: "Very user-friendly app. Booked tickets for my family in minutes. The exclusive deals are really worth it!",
    date: "2 weeks ago"
  },
  {
    name: "Neha Gupta",
    rating: 5,
    review: "Excellent service! The app made planning our water park visit so easy. Will definitely use it again.",
    date: "3 weeks ago"
  },
  {
    name: "Vikram Singh",
    rating: 5,
    review: "Great app for booking water parks. The instant confirmation and digital tickets are a game-changer!",
    date: "1 month ago"
  },
  {
    name: "Anjali Desai",
    rating: 5,
    review: "Love this app! Found the best deals for water parks and the booking was super quick. Perfect for family outings!",
    date: "1 month ago"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Join thousands of satisfied users who have transformed their entertainment experience with Hamara Ticket.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useRef(null);
            const isTestimonialInView = useInView(ref, { once: true, amount: 0.3 });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.review}</p>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.parivartanx.hamaraticket&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-primary hover:underline"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Read more reviews on Google Play
            <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;