# Налаштування Google Apps Script для NMT Contact Form

## Інструкція з розгортання

### Крок 1: Відкрийте Google Sheet

1. Відкрийте вашу таблицю: https://docs.google.com/spreadsheets/d/1IQhlPC91lQA0cL_UoX0kghWk6Qy3-Jpi7XnoADL9OYM/edit
2. Переконайтеся, що ви увійшли під **обліковим записом з повними правами** (не обмеженим доменом)

### Крок 2: Відкрийте редактор Apps Script

1. У меню виберіть: **Розширення → Apps Script**
2. Відкриється редактор скриптів

### Крок 3: Додайте код

Вставте наступний код у редактор (можна додати до існуючого коду `OnSync`):

```javascript
/**
 * Обробник POST-запитів від форми NMT Contact
 * Додає дані в таблицю і синхронізує з backend
 */
function doPost(e) {
  try {
    // Отримуємо активний аркуш таблиці
    var sheet = SpreadsheetApp.openById('1IQhlPC91lQA0cL_UoX0kghWk6Qy3-Jpi7XnoADL9OYM').getActiveSheet();

    // Парсимо дані з форми
    var data = JSON.parse(e.postData.contents);

    // Поточна дата і час
    var timestamp = new Date();

    // Якщо це перший рядок - додаємо заголовки
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Дата та час',
        'Ім\'я',
        'Телефон',
        'Email',
        'Програма',
        'Формат',
        'Коментар'
      ]);

      // Форматуємо заголовки
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }

    // Запам'ятовуємо номер рядка для синхронізації
    var rowStart = sheet.getLastRow() + 1;

    // Додаємо дані в таблицю
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.program || '',
      data.format || '',
      data.message || ''
    ]);

    // Форматуємо дату
    var dateCell = sheet.getRange(rowStart, 1);
    dateCell.setNumberFormat('dd.mm.yyyy hh:mm:ss');

    // ОПЦІОНАЛЬНО: Синхронізація з backend API
    // Розкоментуйте, якщо потрібна автоматична синхронізація
    /*
    try {
      var sheetID = sheet.getParent().getId();
      var rowEnd = rowStart;
      var syncUrl = 'https://school-today.com/api/GoogleSheetApi/SyncGoogleSheet?fileID=' + sheetID + '&rowStart=' + rowStart + '&rowEnd=' + rowEnd;

      Logger.log('Синхронізація з backend: ' + syncUrl);
      var options = { "method": "GET" };
      var response = UrlFetchApp.fetch(syncUrl, options);
      Logger.log("Відповідь backend: " + response.getResponseCode());
    } catch (syncError) {
      Logger.log('Помилка синхронізації (дані збережено в таблиці): ' + syncError);
    }
    */

    // Повертаємо успішну відповідь
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Дані успішно додано',
      'row': rowStart
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Логуємо помилку
    Logger.log('Помилка doPost: ' + error);

    // Повертаємо помилку
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * ІСНУЮЧА ФУНКЦІЯ - НЕ ВИДАЛЯТИ
 * Синхронізація з backend при зміні таблиці
 */
function OnSync(e){
    try {
        var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

        var rowStart;
        var rowEnd;

        if (!e || !e.range) {
            var sheet = spreadsheet.getActiveSheet();

            rowStart = sheet.getLastRow();
            rowEnd = rowStart;
        } else{
            var range = e.range;

            rowStart = range.rowStart;
            rowEnd = range.rowEnd;
        }

        var sheetID = spreadsheet.getId()
        var url = 'https://school-today.com/api/GoogleSheetApi/SyncGoogleSheet?fileID='+sheetID+'&rowStart='+rowStart+'&rowEnd='+rowEnd;

        console.log('URL - ' + url);

        var options = { "method" : "GET" }
        var response = UrlFetchApp.fetch(url, options);
        console.log("Response code - " + response.getResponseCode());
    }catch(e){
        console.error('OnSync() error: ' + e);
    }
}
```

### Крок 4: Збережіть проект

1. Натисніть **💾 (іконка збереження)** або `Ctrl+S`
2. Дочекайтеся повідомлення "Збережено"
3. Можете дати проекту назву: "NMT Contact Form Handler"

### Крок 5: Розгорніть Web App

1. Натисніть **"Почати розгортання"** → **"Нове розгортання"**
2. Натисніть на **⚙️ шестерінку** поруч із "Виберіть тип"
3. Виберіть **"Веб-додаток"**
4. Налаштуйте параметри:
   - **Опис**: "NMT Contact Form v1"
   - **Виконувати як**: **Я** (або "Мене")
   - **Хто має доступ**: **Усі** (або "Будь-який користувач")
5. Натисніть **"Розгорнути"**
6. Може знадобитися авторизація:
   - Натисніть **"Авторизувати доступ"**
   - Виберіть ваш Google обліковий запис
   - Натисніть **"Дозволити"** (може показати попередження - це нормально для особистих скриптів)

### Крок 6: Скопіюйте URL

Після успішного розгортання ви отримаєте **Web App URL**:

```
https://script.google.com/macros/s/AKfycby.../exec
```

**ВАЖЛИВО: Скопіюйте цей URL повністю!**

### Крок 7: Оновіть код React компонента

1. Відкрийте файл: `src/components/nmt-landing/NMTContact.tsx`
2. Знайдіть рядок 7:
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
3. Замініть на ваш URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby.../exec";
   ```
4. Збережіть файл

### Крок 8: Тестування

1. Запустіть dev сервер: `npm run dev`
2. Відкрийте сторінку NMT Landing: `http://localhost:5173/nmt`
3. Прокрутіть до форми контактів
4. Заповніть і відправте тестову заявку
5. Перевірте:
   - ✅ З'явилося зелене повідомлення про успіх
   - ✅ Форма очистилася
   - ✅ У Google Sheets з'явився новий рядок з даними

---

## Структура даних у Google Sheets

Після відправки форми в таблиці з'явиться рядок з даними:

| Дата та час | Ім'я | Телефон | Email | Програма | Формат | Коментар |
|-------------|------|---------|-------|----------|--------|----------|
| 31.10.2025 14:30:00 | Іван Петров | +380501234567 | ivan@example.com | НМТ Стандарт (9 місяців) | Група (до 5 учнів) | Хочу почати в листопаді |

---

## Можливі проблеми та рішення

### ❌ Помилка: "Дозвіл на розгортання..."

**Причина**: Використовується обліковий запис з обмеженнями домену.

**Рішення**:
- Увійдіть під обліковим записом з повними правами (не корпоративним)
- Або попросіть адміністратора домену надати права на розгортання

### ❌ Форма не відправляється

**Перевірте**:
1. URL правильно скопійовано (повинен закінчуватися на `/exec`)
2. Web App розгорнуто з правами "Усі" (Anyone)
3. У консолі браузера немає помилок CORS (це нормально з `mode: 'no-cors'`)

### ❌ Дані не з'являються в таблиці

**Перевірте**:
1. Правильний ID таблиці в коді скрипта
2. У облікового запису є права на редагування таблиці
3. Логи в Apps Script: View → Executions (подивіться помилки)

---

## Додаткові можливості

### 1. Email сповіщення

Додайте у функцію `doPost` після додавання даних:

```javascript
// Відправка email сповіщення
MailApp.sendEmail({
  to: "manager@novoshkola.com",
  subject: "Нова заявка з NMT Landing",
  body: "Ім'я: " + data.name + "\n" +
        "Телефон: " + data.phone + "\n" +
        "Email: " + data.email + "\n" +
        "Програма: " + data.program + "\n" +
        "Формат: " + data.format
});
```

### 2. Автоматична синхронізація з backend

Розкоментуйте секцію з `syncUrl` у коді вище.

### 3. Захист від спаму

Додайте перевірку частоти відправки з одного IP (потребує додаткового налаштування).

---

## Контакти для підтримки

Якщо виникнуть проблеми:
1. Перевірте логи: Apps Script → View → Executions
2. Перевірте консоль браузера (F12)
3. Переконайтеся, що ToastContainer працює (повинні бути сповіщення)
