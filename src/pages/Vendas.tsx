import Cards from "@/components/Cards";
// import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroV2 from "@/components/HeroV2";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

import { ContainerFull } from "@/components/template/ContainerFull";

export function Vendas() {
  return (
    <ContainerFull>
      <Hero />
      <HeroV2 />
      <Cards />
      <Team />
      <Stats />
      <Testimonials />
      <Pricing id="pricing" />
      {/* <Footer /> */}
    </ContainerFull>
  )
}