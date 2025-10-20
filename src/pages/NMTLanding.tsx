import NMTHeader from "../layouts/headers/NMTHeader";
import NMTFooter from "../layouts/footers/NMTFooter";
import {
   NMTHero,
   NMTStats,
   NMTFeatures,
   NMTPrograms,
   NMTHowItWorks,
   NMTTeachers,
   NMTPricing,
   NMTTestimonials,
   NMTFaq,
   NMTContact
} from "../components/nmt-landing";
import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";

const NMTLanding = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Новошкола - Підготовка до НМТ'} />
         <NMTHeader />
         <main className="main-area fix">
            {/* Hero Section */}
            <NMTHero />

            {/* Stats Section - Social Proof */}
            <NMTStats />

            {/* About - Features / Why Choose Us */}
            <NMTFeatures />

            {/* Program - Course Programs */}
            <NMTPrograms />

            {/* How It Works - Process */}
            <NMTHowItWorks />

            {/* Teachers */}
            <NMTTeachers />

            {/* Prices */}
            <NMTPricing />

            {/* Reviews / Testimonials */}
            <NMTTestimonials />

            {/* FAQ */}
            <NMTFaq />

            {/* Contact Form Section */}
            <NMTContact />
         </main>
         <NMTFooter />
      </Wrapper>
   )
}

export default NMTLanding;
