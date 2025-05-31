import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Hamara Ticket App',
  description: 'Privacy Policy for Hamara Ticket App - Your Event Ticketing Solution',
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 pt-24 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">PRIVACY POLICY</h1>
      <p className="text-muted-foreground mb-8">Last updated February 23, 2025</p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          This Privacy Notice for Parivartan X ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
        </p>

        <ul>
          <li>Visit our website at http://www.hamaraticket.com, or any website of ours that links to this Privacy Notice</li>
          <li>Download and use our mobile application (HamaraTicket), or any other application of ours that links to this Privacy Notice</li>
          <li>Use HamaraTicket - A E-Ticket Booking Platform. HamaraTicket is an e-ticket booking platform that enables users to purchase tickets for parks, water parks, and private events in their vicinity. The platform offers a seamless ticketing experience, allowing customers to conveniently book tickets online. HamaraTicket is powered by ParivartanX, a leading software development agency specializing in web and mobile applications</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>

        <p>
          Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@parivartanx.com.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">SUMMARY OF KEY POINTS</h2>
        <p>
          This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">What personal information do we process?</h3>
        <p>
          When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Do we process any sensitive personal information?</h3>
        <p>
          Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions. We do not process sensitive personal information.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Do we collect any information from third parties?</h3>
        <p>
          We do not collect any information from third parties.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">How do we process your information?</h3>
        <p>
          We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">How do we keep your information safe?</h3>
        <p>
          We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">What are your rights?</h3>
        <p>
          Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">TABLE OF CONTENTS</h2>
        <ol className="list-decimal pl-6">
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
        </ol>

        {/* Continue with the rest of the sections... */}
        
        <h2 className="text-2xl font-bold mt-8 mb-4">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at support@parivartanx.com or contact us by post at:
        </p>
        <address className="not-italic">
          Parivartan X<br />
          Shadalichak Patna<br />
          Dariyapur Brajeshwar market<br />
          Patna, Bihar 804453<br />
          India
        </address>

        <h2 className="text-2xl font-bold mt-8 mb-4">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.
        </p>
        <p>
          To request to review, update, or delete your personal information, please visit: <a href="https://hamaraticket.com/contact-us" className="text-primary hover:underline">https://hamaraticket.com/contact-us</a>.
        </p>

        <p className="mt-8 text-center text-lg font-medium">
          HamaraTicket - Your Event Ticketing Solution
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;