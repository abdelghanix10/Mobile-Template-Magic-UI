import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Pricing } from "@/components/sections/pricing";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="relative pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
