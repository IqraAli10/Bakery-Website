import About from "@/Components/About";
import AppSection from "@/Components/AppSection";
import BestFood from "@/Components/BestFood";
import Featured from "@/Components/Featured";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Newsletter from "@/Components/Newsletter";
import OtherSection from "@/Components/OtherSection";


export default function Home() {
  return (
    <main>
      
      <Hero/>
      <OtherSection/>
      <About/>
      <Featured/>
      <AppSection/>
      <BestFood/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
