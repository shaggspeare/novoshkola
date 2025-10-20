// NMT "Why Choose Us" Features Data
// Based on detailed-products-md.md specifications

interface NMTFeatureType {
   id: number;
   page: string;
   icon: string;
   title: string;
   desc: string;
}

const nmt_feature_data: NMTFeatureType[] = [
   {
      id: 1,
      page: "nmt",
      icon: "/assets/img/icons/features_icon01.svg",
      title: "Малі групи до 5 учнів",
      desc: "Кожен отримує достатньо уваги, а вчитель може адаптувати пояснення під рівень і темп учня"
   },
   {
      id: 2,
      page: "nmt",
      icon: "/assets/img/icons/h2_features_icon02.svg",
      title: "Індивідуальний підхід",
      desc: "Програма, темп і завдання підбираються з урахуванням знань і цілей конкретного учня"
   },
   {
      id: 3,
      page: "nmt",
      icon: "/assets/img/icons/h2_features_icon03.svg",
      title: "Менторський супровід",
      desc: "Наставник допомагає планувати навчання, мотивує і підтримує, знає все про вступ до університетів"
   },
   {
      id: 4,
      page: "nmt",
      icon: "/assets/img/icons/h2_features_icon01.svg",
      title: "Безкоштовний моніторинг знань",
      desc: "Перед стартом визначаємо поточний рівень і створюємо ефективний маршрут навчання"
   },
   {
      id: 5,
      page: "nmt",
      icon: "/assets/img/icons/features_icon02.svg",
      title: "Групи одного рівня",
      desc: "У класі всі з приблизно однаковими знаннями, тому навчання йде у комфортному темпі"
   },
   {
      id: 6,
      page: "nmt",
      icon: "/assets/img/icons/features_icon03.svg",
      title: "Симуляції реального тесту",
      desc: "Звикаєте до формату НМТ і проходите тестування в умовах близьких до справжнього"
   },
   {
      id: 7,
      page: "nmt",
      icon: "/assets/img/icons/features_icon04.svg",
      title: "Особистий кабінет 24/7",
      desc: "Доступ до матеріалів і практики у будь-який момент для самостійного опрацювання"
   },
   {
      id: 8,
      page: "nmt",
      icon: "/assets/img/icons/features_icon01.svg",
      title: "Живі онлайн-уроки",
      desc: "Спілкування в Zoom у реальному часі з можливістю отримати запис уроку"
   },
   {
      id: 9,
      page: "nmt",
      icon: "/assets/img/icons/h4_features_icon01.svg",
      title: "Зручний графік",
      desc: "Заняття у вечірній час або на вихідних, щоб легко поєднувати з іншими справами"
   }
];

export default nmt_feature_data;
