"use client";

import { navItems } from "@/data";
import { isBrowser } from "@/lib/helpers";
import dynamic from "next/dynamic";

// Regular import for non-3D components
import Footer from "@/components/Footer";

// Dynamically import components that might use browser APIs
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-teal-800-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
