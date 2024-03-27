import Hero from "@/components/hero/Hero";
import Services from "@/container/services/Services";
import HomeItems from "@/container/items/HomeItems";
import Contact from "@/container/contact/Contact";


export default function Home() {
  return (
   <main>
     <Hero/>
       <Services/>
       <HomeItems/>
       <Contact/>
   </main>
  );
}
