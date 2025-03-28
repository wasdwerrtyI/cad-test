import { CallToAction } from "../../components/callToAction/CallToAction";
import { Features } from "../../components/features/Features";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";

export function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}
