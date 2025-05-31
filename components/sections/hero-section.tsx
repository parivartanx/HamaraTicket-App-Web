"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Book Water Parks & Events with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-500">
                Hamara Ticket
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Your all-in-one platform for booking water park passes and event
              tickets. Skip the lines, book online, and enjoy instant digital
              tickets.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.parivartanx.hamaraticket"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://www.hamaraticket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Tickets Now
                </Link>
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Available on Android. iOS coming soon.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 md:right-10 h-[500px] w-[250px] bg-gradient-to-b from-blue-500 to-primary rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <Image
                  src="qrticket.jpeg"
                  alt="Hamara Ticket Water Park Booking"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[220px] h-[450px] rounded-2xl overflow-hidden border-4 border-white/20">
                    <Image
                      src="qrticket.jpeg"
                      alt="Hamara Ticket Water Park Booking"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 md:left-10 h-[500px] w-[250px] bg-gradient-to-b from-primary to-blue-600 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3">
                <Image
                  src="home.jpeg"
                  alt="Hamara Ticket Event Booking"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[220px] h-[450px] rounded-2xl overflow-hidden border-4 border-white/20">
                    <Image
                      src="home.jpeg"
                      alt="Hamara Ticket Event Booking"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-6 text-muted-foreground">
              Trusted by thousands of users for their entertainment needs
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">4.8</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">App Rating</p>
                  <p className="text-sm text-muted-foreground">Play Store</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">100+</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">Downloads</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">10+</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">Water Parks</p>
                  <p className="text-sm text-muted-foreground">
                    Partnered with
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">10+</span>
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium">Events</p>
                  <p className="text-sm text-muted-foreground">
                    Monthly bookings
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
