import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Destinations from "@/components/destinations";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
   
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Destinations />
        <WhyChoose />
        <Testimonials />
        <Cta />
      </main>
     
    </>
  );
}
