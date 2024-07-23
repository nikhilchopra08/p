import Image from "next/image";
import HeroSection from "./components/heroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
        <NavBar/>
        <div className="Container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AchievementSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
