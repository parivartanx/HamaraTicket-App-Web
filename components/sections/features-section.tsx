"use client"

import React, { useRef, ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from 'framer-motion';
import { 
  Ticket, 
  Calendar, 
  MapPin, 
  Bell, 
  Shield, 
  CreditCard, 
  Users, 
  Search 
} from 'lucide-react';

const features = [
  {
    icon: <Ticket className="h-10 w-10 text-primary" />,
    title: "Instant Digital Tickets",
    description: "Get your tickets instantly on your device. No need to print or wait in long queues at the venue.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Easy Booking",
    description: "Book water park passes and event tickets in seconds with our simple and intuitive booking process.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Discover Nearby",
    description: "Find water parks and events near you with our location-based search and recommendations.",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Smart Notifications",
    description: "Get timely alerts for booking confirmations, event reminders, and special offers.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Payments",
    description: "Your transactions are protected with secure payment gateway integration and data encryption.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Multiple Payment Options",
    description: "Pay using various methods including credit cards, UPI, and digital wallets.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Group Bookings",
    description: "Book tickets for your entire group with our easy group booking feature and bulk entry options.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Advanced Search",
    description: "Find the perfect water park or event with powerful filters for date, location, and price range.",
  }
];

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-md border border-border/40">
        <CardHeader className="pb-2">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            POWERFUL FEATURES
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything You Need for Entertainment
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hamara Ticket combines powerful features with an intuitive interface to make booking water parks and events a breeze.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;