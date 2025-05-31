import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Hamara Ticket App',
  description: 'Terms and Conditions for Hamara Ticket App - Your Event Ticketing Solution',
};

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 pt-24 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">TERMS AND CONDITIONS</h1>
      <p className="text-muted-foreground mb-8">Last updated February 23, 2025</p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
        <p>
          We are Parivartan X ('Company', 'we', 'us', or 'our').
        </p>
        <p>
          We operate the website http://www.hamaraticket.com (the 'Site'), the mobile application HamaraTicket (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
        </p>
        <p>
          HamaraTicket is an e-ticket booking platform that enables users to purchase tickets for parks, water parks, and private events in their vicinity. The platform offers a seamless ticketing experience, allowing customers to conveniently book tickets online. HamaraTicket is powered by ParivartanX, a leading software development agency specializing in web and mobile applications.
        </p>
        <p>
          You can contact us by phone at +91 80 6964 5134, email at support@parivartanx.com, or by mail to Shadalichak Patna, Patna, Bihar 804453, India.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Parivartan X, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by support@parivartanx.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
        </p>
        <p>
          We recommend that you print a copy of these Legal Terms for your records.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">TABLE OF CONTENTS</h2>
        <ol className="list-decimal pl-6">
          <li>OUR SERVICES</li>
          <li>INTELLECTUAL PROPERTY RIGHTS</li>
          <li>USER REPRESENTATIONS</li>
          <li>USER REGISTRATION</li>
          <li>PURCHASES AND PAYMENT</li>
          <li>PROHIBITED ACTIVITIES</li>
          <li>USER GENERATED CONTRIBUTIONS</li>
          <li>CONTRIBUTION LICENCE</li>
          <li>GUIDELINES FOR REVIEWS</li>
          <li>MOBILE APPLICATION LICENCE</li>
          <li>THIRD-PARTY WEBSITES AND CONTENT</li>
          <li>SERVICES MANAGEMENT</li>
          <li>PRIVACY POLICY</li>
          <li>TERM AND TERMINATION</li>
          <li>MODIFICATIONS AND INTERRUPTIONS</li>
          <li>GOVERNING LAW</li>
          <li>DISPUTE RESOLUTION</li>
          <li>CORRECTIONS</li>
          <li>DISCLAIMER</li>
          <li>LIMITATIONS OF LIABILITY</li>
          <li>INDEMNIFICATION</li>
          <li>USER DATA</li>
          <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
          <li>SMS TEXT MESSAGING</li>
          <li>MISCELLANEOUS</li>
          <li>CONTACT US</li>
        </ol>

        {/* Continue with the rest of the sections... */}
        
        <h2 className="text-2xl font-bold mt-8 mb-4">26. CONTACT US</h2>
        <p>
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
        </p>
        <address className="not-italic">
          Parivartan X<br />
          Shadalichak Patna<br />
          Patna, Bihar 804453<br />
          India<br /><br />
          Phone: +91 80 6964 5134<br />
          Email: support@parivartanx.com
        </address>

        <p className="mt-8 text-center text-lg font-medium">
          HamaraTicket - Your Event Ticketing Solution
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;