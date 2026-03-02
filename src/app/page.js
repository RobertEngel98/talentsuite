'use client';
import React from "react";
import Head from "next/head";
import Index from "./index/page";

const Page = () => {
  return (
    <>
      <Head>
        <title>TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur</title>
        <meta name="description" content="TalentSuite ist deine Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media. 50+ Unternehmen vertrauen uns. Jetzt kostenlose Potenzialanalyse sichern." />
        <link rel="canonical" href="https://www.talentsuite.io" />
      </Head>
      <Index/>
    </>
  );
};

export default Page;
