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
import StructuredData from "../components/StructuredData";

const NMTLanding = () => {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Новошкола",
      "description": "Онлайн школа для підготовки до НМТ та ЗНО з досвідченими викладачами",
      "url": "https://novoshkola.ua/nmt",
      "logo": "https://novoshkola.ua/logo.png",
      "address": {
         "@type": "PostalAddress",
         "addressCountry": "UA",
         "addressLocality": "Україна"
      },
      "contactPoint": {
         "@type": "ContactPoint",
         "contactType": "Customer Service",
         "availableLanguage": "Ukrainian"
      },
      "offers": {
         "@type": "AggregateOffer",
         "priceCurrency": "UAH",
         "lowPrice": "450",
         "highPrice": "650",
         "offerCount": "2",
         "offers": [
            {
               "@type": "Offer",
               "name": "Групові заняття з підготовки до НМТ",
               "description": "Групові онлайн-заняття з підготовки до НМТ, до 5 учнів у групі, тривалість 90 хвилин",
               "price": "450",
               "priceCurrency": "UAH"
            },
            {
               "@type": "Offer",
               "name": "Індивідуальні заняття з підготовки до НМТ",
               "description": "Індивідуальні онлайн-заняття з підготовки до НМТ один-на-один з викладачем, тривалість 60 хвилин",
               "price": "650",
               "priceCurrency": "UAH"
            }
         ]
      },
      "hasOfferCatalog": {
         "@type": "OfferCatalog",
         "name": "Курси підготовки до НМТ",
         "itemListElement": [
            {
               "@type": "Course",
               "name": "НМТ Стандарт",
               "description": "Стандартна програма підготовки до НМТ, 9 місяців, 2 заняття на тиждень",
               "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Новошкола"
               }
            },
            {
               "@type": "Course",
               "name": "НМТ Прискорений",
               "description": "Прискорена програма підготовки до НМТ, 6 місяців, 2 заняття на тиждень",
               "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Новошкола"
               }
            },
            {
               "@type": "Course",
               "name": "НМТ Експрес",
               "description": "Експрес-програма підготовки до НМТ, 3 місяці, 4 заняття на тиждень",
               "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Новошкола"
               }
            }
         ]
      }
   };

   return (
      <Wrapper>
         <SEO
            pageTitle="Підготовка до НМТ та ЗНО онлайн | Новошкола - Курси з живими викладачами"
            description="Ефективна підготовка до НМТ та ЗНО онлайн. Групові заняття до 5 учнів (450 грн) та індивідуальні (650 грн). Досвідчені викладачі, особистий кабінет 24/7, симуляції тесту. Безкоштовний пробний урок 60 хв. Предмети: українська мова, математика, історія України, англійська."
            keywords="підготовка до НМТ, підготовка до ЗНО, НМТ 2025, ЗНО 2025, курси НМТ онлайн, репетитор НМТ, українська мова НМТ, математика НМТ, історія України НМТ, англійська НМТ, групові заняття НМТ, індивідуальні заняття НМТ, онлайн підготовка до тестування, менторська підтримка, безкоштовний пробний урок НМТ, симуляція НМТ, моніторинг знань НМТ, Новошкола"
            ogUrl="https://novoshkola.ua/nmt"
            canonical="https://novoshkola.ua/nmt"
         />
         <StructuredData data={structuredData} />
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
