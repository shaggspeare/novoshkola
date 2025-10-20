// NMT "How It Works" Process Steps Data
// Based on nmt-landing-spec.md specifications

export interface NMTStepType {
   id: number;
   step: number;
   title: string;
   description: string;
}

const nmt_how_it_works_data: NMTStepType[] = [
   {
      id: 1,
      step: 1,
      title: "Заповнюєте заявку",
      description: "Залиште свої контактні дані, і ми зв'яжемося з вами для уточнення деталей та запису на пробний урок"
   },
   {
      id: 2,
      step: 2,
      title: "Проходите безкоштовний моніторинг знань",
      description: "Визначаємо ваш поточний рівень знань, щоб підібрати оптимальну групу та програму навчання"
   },
   {
      id: 3,
      step: 3,
      title: "Викладач формує персональний план",
      description: "На основі результатів моніторингу створюємо індивідуальну траєкторію навчання з урахуванням ваших цілей"
   },
   {
      id: 4,
      step: 4,
      title: "Заняття та супровід ментора",
      description: "Регулярні уроки з викладачем у зручний час плюс підтримка персонального ментора протягом всього курсу"
   },
   {
      id: 5,
      step: 5,
      title: "Підготовка до тесту + симуляції",
      description: "Проходите пробні тести в умовах, максимально наближених до реального НМТ, щоб бути готовими на 100%"
   },
   {
      id: 6,
      step: 6,
      title: "Результат на тесті",
      description: "Впевнено здаєте НМТ та отримуєте високий бал для вступу до обраного університету"
   }
];

export default nmt_how_it_works_data;
