// ✅ This is a Server Component (NO 'use client' here)
import HeroSection from "./components/heroSection";
import Campaigns from "./components/campaigns";
import TrustedBrands from "./components/trustedBrands";
import About from "./components/about";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Blogs from "./components/blogs";
import Process from "./components/process";
import Faqs from "./components/faqs";

// ✅ This disables static prerendering (required for Vercel build issue)
export const dynamic = 'force-dynamic';

// ✅ (Optional but recommended) metadata export
// export const metadata = {
//   title: "Digital Marketing & SEO Services | Talentsuite",
//   description: "We offer all services to scale your business including SEO, Paid Ads, Content Marketing, and More.",
// };

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <About />
      <Services />
      <Testimonials />
      <Campaigns />
      <Blogs />
      <Process />
      <Faqs />
    </>
  );
}
