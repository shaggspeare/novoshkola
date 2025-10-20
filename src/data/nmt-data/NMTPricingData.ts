// NMT Pricing Data
// Based on detailed-products-md.md specifications

export interface NMTPricingType {
   id: number;
   type: "group" | "individual";
   title: string;
   price: number;
   currency: string;
   duration: number; // in minutes
   features: string[];
   isPopular?: boolean;
   badge?: string;
}

const nmt_pricing_data: NMTPricingType[] = [
   {
      id: 1,
      type: "group",
      title: "Групове заняття",
      price: 450,
      currency: "грн",
      duration: 90,
      isPopular: true,
      badge: "Популярне",
      features: [
         "Група до 5 учнів",
         "Тривалість 90 хвилин",
         "Індивідуальний підхід до кожного",
         "Групи одного рівня",
         "Записи всіх уроків",
         "Доступ до особистого кабінету 24/7",
         "Симуляції реального тесту",
         "Можливість оплати частинами"
      ]
   },
   {
      id: 2,
      type: "individual",
      title: "Індивідуальне заняття",
      price: 650,
      currency: "грн",
      duration: 60,
      features: [
         "Заняття один-на-один з викладачем",
         "Тривалість 60 хвилин",
         "Персональна програма навчання",
         "Гнучкий графік занять",
         "100% уваги викладача",
         "Записи всіх уроків",
         "Доступ до особистого кабінету 24/7",
         "Можливість оплати частинами"
      ]
   }
];

// Additional pricing info
export const pricing_notes = {
   trialLesson: {
      title: "Безкоштовний пробний урок",
      duration: 60,
      groupSize: "до 10 учнів",
      description: "Визначаємо ваш рівень, знайомимось зі стилем викладання та формуємо персональну навчальну траєкторію"
   },
   mentorSupport: {
      title: "Менторський супровід",
      freePeriod: "1 місяць безкоштовно",
      price: 1200,
      currency: "грн/міс",
      description: "Персональний наставник допомагає планувати навчання, мотивує та консультує з питань вступу"
   },
   paymentOptions: {
      installments: true,
      description: "Можливість оплати частинами через банк"
   }
};

export default nmt_pricing_data;
