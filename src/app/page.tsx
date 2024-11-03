"use client";

import React from 'react';
import TopMenu from '@/components/TopMenu';
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("../components/Map"), { ssr: false });

const Page: React.FC = () => {
  return (
    <div>
      <TopMenu />
      <Map />
    </div>
  );
};

export default Page;

