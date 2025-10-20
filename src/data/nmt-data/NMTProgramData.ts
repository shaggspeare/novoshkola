// NMT Course Programs Data
// Based on detailed-products-md.md specifications

export interface NMTProgramType {
   id: number;
   title: string;
   duration: string;
   frequency: string;
   totalLessons: number;
   lessonDuration: number;
   format: "group" | "individual" | "flexible";
   description: string;
   highlights?: string[];
   tag?: string;
}

const nmt_program_data: NMTProgramType[] = [
   {
      id: 1,
      title: "НМТ Стандарт",
      duration: "9 місяців",
      frequency: "2 заняття на тиждень",
      totalLessons: 72,
      lessonDuration: 90,
      format: "group",
      tag: "Популярний",
      description: "Комплексна програма підготовки з поглибленим вивченням всіх тем",
      highlights: [
         "Систематичне навчання протягом навчального року",
         "Достатньо часу для опанування складних тем",
         "Регулярні проміжні тестування"
      ]
   },
   {
      id: 2,
      title: "НМТ Прискорений",
      duration: "6 місяців",
      frequency: "2 заняття на тиждень",
      totalLessons: 48,
      lessonDuration: 90,
      format: "group",
       tag: "Інтенсив",
      description: "Інтенсивна програма для тих, хто розпочинає підготовку пізніше",
      highlights: [
         "Оптимальний баланс інтенсивності та якості",
         "Фокус на найважливіших темах",
         "Підходить для учнів з базовими знаннями"
      ]
   },
   {
      id: 3,
      title: "НМТ Експрес",
      duration: "3 місяці",
      frequency: "4 заняття на тиждень",
      totalLessons: 48,
      lessonDuration: 90,
      format: "group",
      tag: "Інтенсив",
      description: "Максимально інтенсивна підготовка до тесту за короткий термін",
      highlights: [
         "Швидкий старт перед тестом",
         "Концентроване вивчення матеріалу",
         "Для мотивованих учнів"
      ]
   },
   {
      id: 4,
      title: "Персональна програма",
      duration: "Гнучко",
      frequency: "За вашим вибором",
      totalLessons: 0, // flexible
      lessonDuration: 60,
      format: "individual",
      tag: "Індивідуально",
      description: "Гнучкий формат: учень сам обирає кількість і частоту занять",
      highlights: [
         "Безкоштовний моніторинг знань перед стартом",
         "Персональний план навчання від вчителя",
         "Можливість коригування програми",
         "Максимальна гнучкість графіку"
      ]
   },
   {
      id: 5,
      title: "Річна програма для 10-класників",
      duration: "Навчальний рік",
      frequency: "2 заняття на тиждень",
      totalLessons: 72,
      lessonDuration: 90,
      format: "group",
      tag: "Для 10 класу",
      description: "Ранній старт підготовки з додатковою профорієнтацією",
      highlights: [
         "Заняття по 90 хвилин двічі на тиждень",
         "Окремі заняття з профорієнтації",
         "Фундаментальна підготовка без поспіху",
         "Більше часу на опанування складних тем"
      ]
   }
];

export default nmt_program_data;
