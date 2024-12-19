import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Social from "@/components/Contact"



export default function Home() {
  return (
    <>
     <main className="min-h-screen font-[Ubuntu] bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About/>
      <Projects/>
      <Social/>
    </main>
    </>
  );
}
