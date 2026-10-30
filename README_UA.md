# Footers Pterodactyl <a href="README.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Russia_flag.png?raw=true" alt="RU" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_UA.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Ukraine_flag.png?raw=true" alt="UA" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_EN.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Unit_King_flag.png?raw=true" alt="UK" width="28" height="28" style="border-radius: 12px;"></a>

<img width="1920" height="957" alt="chrome_CEJ9p0kcgB" src="https://github.com/user-attachments/assets/3e4c39ae-10a7-4624-9183-fcf58fa1d5af" />

## Опис

**Footers Pterodactyl** — сучасний адаптивний футер зі скляним морфізмом, м'якою анімацією частинок та вбудованою багатомовною підтримкою.

Підходить для:

* веб-застосунків
* портфоліо
* лендінгів
* комерційних сайтів

Легкий, акуратний і готовий до використання без складного налаштування.

---

## Можливості

* Glassmorphism-дизайн
* Анімовані частинки всередині футера
* Автоматичне визначення мови браузера
* Повна адаптивність під будь-які екрани
* Оптимізована продуктивність
* Плавні ненав'язливі анімації
* Підтримка accessibility та reduced-motion
* Соціальні іконки з hover-ефектами

---

## Структура проєкту

```text
Footers_Pterodactyl/
├── index.html      # демо-сторінка з готовим футером
├── footer.css      # стилі футера (glassmorphism, адаптивність)
├── footer.js       # визначення мови та анімація частинок
├── README.md       # документація (RU)
├── README_UA.md    # документація (UA)
└── README_EN.md    # документація (EN)
```

Відкрийте `index.html` у браузері — і ви одразу побачите футер у роботі.

---

## Підтримка мов

Футер підтримує **лише три мови**:

| Мова         | Код  | Поведінка                             |
| ------------ | ---- | ------------------------------------- |
| Російська    | `ru` | **використовується за замовчуванням** |
| Українська   | `uk` | визначається автоматично              |
| Англійська   | `en` | визначається автоматично              |

Якщо мову браузера не розпізнано — відображається **російська версія**.

---

## Приклади відображення

**Українська**  
<img width="1357" height="177" alt="chrome_vdqe2j7L1u" src="https://github.com/user-attachments/assets/88fbe0dc-83b4-45d8-954d-28f0cdb0ef6a" />

**Російська**  
<img width="1266" height="126" alt="chrome_QYNoShnJdy" src="https://github.com/user-attachments/assets/d0967740-d3bb-4f36-8114-a00d5eefa0f1" />

**Англійська**  
<img width="1296" height="160" alt="chrome_Z3T1JHu0Zc" src="https://github.com/user-attachments/assets/87fda919-f04c-454d-ac94-3ed3160eaec6" />

---

## Встановлення

1. Скопіюйте `footer.css` та `footer.js` у свій проєкт
2. Скопіюйте блок `<footer class="pt-footer">…</footer>` з `index.html` і вставте його перед закривним тегом `</body>`
3. Підключіть стилі та скрипти:

```html
<head>
  <!-- Font Awesome (соціальні іконки) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <!-- Стилі футера -->
  <link rel="stylesheet" href="footer.css">
</head>
<body>
  <!-- ... ваш сайт ... -->

  <footer class="pt-footer"> ... </footer>

  <!-- Particles.js (анімація частинок) -->
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <!-- Логіка футера: мова та частинки -->
  <script src="footer.js"></script>
</body>
```

4. Готово

Без збирачів і npm-пакетів. Particles.js має завантажуватися **раніше** за `footer.js`.

---

## Технології

* **HTML5** — семантична структура
* **CSS3** — grid, flexbox, blur, clamp, gradients
* **JavaScript** — анімації та мовна логіка
* **Particles.js** — візуальні частинки
* **Font Awesome** — соціальні іконки

---

## Налаштування

### Соціальні посилання

Замініть URL усередині тегів в `index.html`:

```html
<a href="https://muhamedlabs.pro" class="social-icon">
```

### Логотип

Замініть адресу картинки в тезі:

```html
<img class="pt-footer__logo" src="шлях/до/вашого/логотипу.png" alt="">
```

### Зміна текстів і мов

Відкрийте `footer.js`. Тексти зберігаються в об'єкті `TRANSLATIONS`, а мову визначає функція:

```js
detectLanguage()
```

Можна:

* змінити тексти
* змінити мову за замовчуванням (`DEFAULT_LANG`)
* додати нову мову (додайте її в `TRANSLATIONS` і в список `SUPPORTED`)

Елементи з атрибутом `data-i18n` отримують текст, а `data-i18n-aria` — підпис для скрінрідерів.

### Кольори та стиль

Основні параметри задано змінними на початку `footer.css`:

```css
.pt-footer {
  --pt-bg: rgba(255, 255, 255, 0.08);   /* фон скла */
  --pt-border: rgba(255, 255, 255, 0.18); /* рамка */
  --pt-text: #e8ecff;                   /* колір тексту */
  --pt-accent: #7aa2ff;                 /* акцент при наведенні */
  --pt-radius: 20px;                    /* заокруглення */
}
```

### Налаштування частинок

Параметри розташовані у функції `initParticles()` у `footer.js`:

```js
number: { value: isMobile ? 20 : 40 }   // кількість частинок
color:  { value: '#ffffff' }            // колір
move:   { speed: 1 }                    // швидкість
```

Зменште кількість і швидкість для слабших пристроїв або спокійнішого вигляду.

---

## Сумісність і адаптивність

Футер коректно відображається на різних типах пристроїв:

<table align="center">
  <tr>
    <td align="center">
      <img width="581" height="892" alt="chrome_B1AAI7eRqi" src="https://github.com/user-attachments/assets/60155fb0-c52a-44d2-9e0b-bd8f4de1b6f0" alt="Mobile view 1" /><br/>
      <sub>Смартфон</sub>
    </td>
    <td align="center">
      <img width="1466" height="872" alt="chrome_653xxqbE42" src="https://github.com/user-attachments/assets/03dd5e18-3650-4e63-b448-88fd0102bc1c" alt="Desktop view" /><br/>
      <sub>Десктоп</sub>
    </td>
    <td align="center">
      <img width="489" height="913" alt="chrome_HHbuyAhQDb" src="https://github.com/user-attachments/assets/8a1336e3-23f9-4ef9-94d0-5dd434120405" alt="Mobile view 2" /><br/>
      <sub>Смартфон (альтернативний вигляд)</sub>
    </td>
  </tr>
</table>

---

## Доступність

* підтримка `prefers-reduced-motion` (частинки не запускаються, переходи вимикаються)
* коректні ARIA-атрибути
* навігація з клавіатури та помітний фокус
* сумісність зі скрінрідерами

Інтерфейс залишається зручним для всіх користувачів.

---

## Сумісність браузерів

Підтримуються сучасні браузери:

* Chrome 90+
* Firefox 88+
* Edge 90+
* Safari 14+
* iOS Safari 14+
* Chrome Android 90+

---

## FAQ

**Чому футер російською?**
Російська — мова за замовчуванням. Вона показується, коли мова браузера не російська, не українська й не англійська.

**Частинки не з'являються. Що перевірити?**
Переконайтеся, що Particles.js підключено раніше за `footer.js`, що в проєкті є елемент `<div id="footer-particles">` і що в консолі браузера немає помилок. Якщо в системі ввімкнено зменшення руху, частинки вимкнено навмисно.

**Соціальні іконки відображаються порожніми квадратами.**
Не підключено Font Awesome. Перевірте посилання на стилі в `<head>`.

**Чи можна вимкнути анімацію?**
Приберіть виклик `initParticles()` у `footer.js` або видаліть блок `footer-particles` з розмітки.

---

## Участь у розвитку проєкту

Ідеї та покращення вітаються:

1. Зробіть форк репозиторію
2. Створіть гілку для своїх змін
3. Відкрийте Pull Request з коротким описом

Про помилки повідомляйте через Issue: вкажіть браузер, пристрій і кроки для відтворення.

---

## Зв'язок і підтримка

Ми завжди відкриті до спілкування, нових ідей і співпраці. З усіх питань звертайтеся:

- Telegram-канал: https://t.me/muhamedlabs
- Email: partners@muhamedlabs.pro
- Discord: https://discord.com/users/768782555171782667

<br>

<div align="center">
  <sub><img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> 2023-2028 Muhamed IT <img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> </sub>
</div>
