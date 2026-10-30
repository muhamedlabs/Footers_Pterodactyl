# Footers Pterodactyl <a href="README.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Russia_flag.png?raw=true" alt="RU" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_UA.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Ukraine_flag.png?raw=true" alt="UA" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_EN.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Unit_King_flag.png?raw=true" alt="UK" width="28" height="28" style="border-radius: 12px;"></a>

<img width="1920" height="957" alt="chrome_gw9W4tSBCN" src="https://github.com/user-attachments/assets/3ede5f1e-4405-4cd0-804d-5a9fab83e834" />

## Опис

**Footers Pterodactyl** — готовий футер у рожевій фірмовій стилістиці: скляний фон, інтерактивні частинки на canvas, ефект друкарської машинки, живий годинник і вбудована багатомовність.

Підходить для:

* вебзастосунків
* портфоліо
* лендингів
* комерційних сайтів

Без збирачів і npm-пакетів: підключаєте файли (або одну CDN-вставку) — і футер працює.

---

## Можливості

* Фірмовий дизайн зі скляним ефектом і зрізаними кутами
* Власна система частинок на `<canvas>` (без Particles.js), реагує на курсор
* Ефект друкарської машинки з ротацією фраз
* Живий годинник (UTC+3) та індикатор статусу мережі
* Автоматичне визначення мови браузера (RU / UK / EN)
* Автовизначення світлої та темної підкладки сайту
* Опційний фоновий малюнок
* Опційний захист від копіювання
* Повна адаптивність
* Підтримка `prefers-reduced-motion` і `prefers-contrast`
* Соціальні іконки та кнопка «Мультипосилання» з hover-ефектами

---

## Структура проєкту

```text
Footers_Pterodactyl/
├── Index_footer.html       # підключення локальних файлів
├── footer-panel.html       # підключення через CDN (jsDelivr, гілка complete)
├── README.md               # документація (RU)
├── README_UA.md            # документація (UA)
├── README_EN.md            # документація (EN)
└── assets/
    ├── logo.webp
    ├── images/
    │   └── picture.webp            # фонове зображення
    ├── icons/
    │   ├── icon-m-pink.webp
    │   ├── icon-m-white.webp
    │   └── icon-m-black.webp
    ├── fonts/
    │   ├── kharkiv_tone.ttf
    │   └── ermilov_bold.otf
    ├── css/
    │   ├── base.css        # змінні та основа
    │   ├── layout.css      # сітка й розташування
    │   ├── brand.css       # логотип і назва
    │   ├── actions.css     # соцмережі та кнопка мультипосилання
    │   ├── status.css      # друкарська машинка, статус, годинник
    │   ├── effects.css     # фон, лінії, світла/темна підкладка
    │   ├── protect.css     # стилі захисту від копіювання
    │   ├── a11y.css        # доступність
    │   ├── responsive.css  # адаптивність
    │   ├── font.css        # шрифт, вбудований у base64
    │   └── styles.css      # усі стилі одним файлом
    └── js/
        ├── language.js     # визначення мови та тексти
        ├── typewriter.js   # друкарська машинка, годинник, підстановка текстів
        ├── particles.js    # система частинок
        ├── protection.js   # захист від копіювання
        ├── background.js   # керування фоновим малюнком
        ├── main.js         # ініціалізація та API
        └── script.js       # весь JS одним файлом
```

---

## Підтримка мов

Футер підтримує **три мови**:

| Мова       | Код  | Поведінка                      |
| ---------- | ---- | ------------------------------ |
| Російська  | `ru` | **використовується за замовчуванням** |
| Українська | `uk` | визначається автоматично       |
| Англійська | `en` | визначається автоматично       |

Мова береться з `navigator.language`. Якщо її не розпізнано — відображається **російська версія**.

---

## Приклади відображення


**Українська**  
<img width="1337" height="215" alt="chrome_jAjjGor5yJ" src="https://github.com/user-attachments/assets/eca4462f-c9e6-47e1-97f3-c7d8ac2f36a1" />

**Російська**  
<img width="1413" height="241" alt="chrome_P42jY1INGV" src="https://github.com/user-attachments/assets/1b0fb935-5d08-4310-9b19-5f3d48fa50b7" />

**Англійська**  
<img width="1267" height="197" alt="chrome_f7bmc30PF0" src="https://github.com/user-attachments/assets/b0cf987d-b4ad-41c0-936c-43dee0b622f6" />

---

## Встановлення

Є два способи.

### Варіант 1. Локальні файли

1. Скопіюйте папку `assets` у свій проєкт
2. Скопіюйте блок `<div class="footer-wrapper">…</div>` з `Index_footer.html` перед закривальним тегом `</body>`
3. Підключіть стилі та скрипти (вони вже є внизу `Index_footer.html`):

```html
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/layout.css">
<link rel="stylesheet" href="assets/css/brand.css">
<link rel="stylesheet" href="assets/css/actions.css">
<link rel="stylesheet" href="assets/css/status.css">
<link rel="stylesheet" href="assets/css/effects.css">
<link rel="stylesheet" href="assets/css/protect.css">
<link rel="stylesheet" href="assets/css/a11y.css">
<link rel="stylesheet" href="assets/css/responsive.css">

<script src="assets/js/language.js"></script>
<script src="assets/js/typewriter.js"></script>
<script src="assets/js/particles.js"></script>
<script src="assets/js/protection.js"></script>
<script src="assets/js/background.js"></script>
<script src="assets/js/main.js"></script>
```

Порядок скриптів важливий: `main.js` має йти **останнім**.

### Варіант 2. Через CDN

Скопіюйте вміст `footer-panel.html` на свою сторінку. Вбудований скрипт сам підтягне всі стилі, скрипти та логотип із jsDelivr:

```text
https://cdn.jsdelivr.net/gh/muhamedlabs/Footers_Pterodactyl@complete/
```

Нічого завантажувати не потрібно.

Font Awesome підключати вручну не потрібно — `main.js` завантажує його сам.

---

## Технології

* **HTML5** — семантична структура
* **CSS3** — grid, flexbox, clamp, градієнти, змінні
* **JavaScript (vanilla)** — частинки на canvas, друкарська машинка, мовна логіка
* **Font Awesome** — соціальні іконки (підвантажується автоматично)

---

## Налаштування

### Соціальні посилання

Замініть URL у блоці `footer-actions` в HTML:

```html
<a href="https://t.me/muhamedlabs" target="_blank" class="social-icon" aria-label="Вступайте до нашого Telegram-каналу">
    <i class="fa-brands fa-telegram" aria-hidden="true"></i>
</a>
```

Посилання кнопки мультипосилання змінюйте в `<a class="multilink-button" href="...">`.

### Логотип

Іконка бренду лежить у `assets/icons/`: доступні рожева, біла та чорна версії. Вкажіть потрібну в тезі:

```html
<img src="assets/icons/icon-m-pink.webp" alt="">
```

Якщо зображення не завантажиться, автоматично показується літера «M».

### Зміна текстів і мов

Відкрийте `assets/js/language.js`. Функція `detectLanguage()` повертає для кожної мови:

| Поле         | Призначення                         |
| ------------ | ----------------------------------- |
| `texts`      | фрази для друкарської машинки       |
| `tagline`    | підпис під назвою бренду            |
| `brand`      | назва бренду                        |
| `status`     | текст статусу мережі                |
| `buttonText` | текст кнопки мультипосилання        |

Щоб додати мову, додайте ще одну гілку `if (langCode === '...')`. Мова за замовчуванням — останній `return` у функції.

Суфікс **Ads** у назві додається в `typewriter.js` (`this.data.brand + ' <b>Ads</b>'`) — змініть його там.

Часовий пояс годинника (`UTC+3`) задано в `typewriter.js`, метод `startClock()`, і в підписі `<em>UTC+3</em>` у розмітці.

### Кольори та стиль

Основні змінні розташовані на початку `assets/css/base.css`:

```css
.footer-wrapper {
  --ft-pink: #ff2a62;     /* основний акцент */
  --ft-edge: #ff9dbd;     /* світла кромка */
  --ft-white: #ffffff;
  --ft-soft: #f6f1f3;
  --ft-muted: #cfc6c9;
  --ft-cut: 16px;         /* зріз кутів */
  --ft-max: 1200px;       /* максимальна ширина */
  --ft-glass: .16;        /* прозорість скла */
}
```

### Фоновий малюнок

Керується атрибутом `data-bg` у `.footer-wrapper` (`on` / `off`, за замовчуванням `off`):

```html
<div class="footer-wrapper" data-bg="on">
```

Або через JavaScript:

```js
window.footerUtils.setBackground(true);
window.footerUtils.toggleBackground();
```

Картинка задається змінною `--ft-bg-img` (за замовчуванням `assets/images/picture.webp`).

### Захист від копіювання

Режим задається атрибутом `data-protect`:

| Значення | Що відбувається                                                             |
| -------- | --------------------------------------------------------------------------- |
| `footer` | захист діє лише всередині футера (використовується в демо)                  |
| `page`   | захист на всій сторінці (**значення за замовчуванням, якщо атрибут не вказано**) |
| `off`    | захист вимкнено                                                             |

Блокуються контекстне меню, копіювання, виділення, перетягування та частина гарячих клавіш. Поля введення не зачіпаються.

> Це лише легка перешкода: повністю захистити контент на клієнті неможливо. У режимі `page` також приховується сторінка під час друку. Якщо вам це не потрібно, використовуйте `footer` або `off`.

Режим можна задати і через конфіг, до підключення скриптів:

```html
<script>
  window.FooterConfig = { protect: 'footer', background: 'off' };
</script>
```

### Керування з JavaScript

Після завантаження доступний об'єкт `window.footerUtils`:

```js
footerUtils.restartTyping();                 // перезапустити друкарську машинку
footerUtils.updateTexts(['Текст 1', 'Текст 2']); // замінити фрази
footerUtils.setBackground(true);             // увімкнути/вимкнути фон
footerUtils.toggleBackground();              // перемкнути фон
footerUtils.detectLanguage();                // отримати тексти поточної мови
```

### Налаштування частинок

Параметри розташовані в `assets/js/particles.js`. Кількість частинок обчислюється автоматично за площею футера (від 14 до 70), дальність зв'язків задає `this.link` (за замовчуванням 125). Зменште значення для слабких пристроїв або спокійнішого вигляду.

---

## Сумісність і адаптивність

Футер коректно відображається на різних типах пристроїв:

<table align="center">
  <tr>
    <td align="center">
      <img width="483" height="891" alt="chrome_sr3gtINryR" src="https://github.com/user-attachments/assets/8b7c35e9-4f4f-47d8-ba1b-f24b26eeb1f2" alt="Mobile view 1" /><br/>
      <sub>Смартфон</sub>
    </td>
    <td align="center">
      <img width="1411" height="859" alt="chrome_L2eTnXYkbD" src="https://github.com/user-attachments/assets/a3ad4838-ee61-4e00-a2c7-c0f4b176594d" alt="Desktop view" /><br/>
      <sub>Десктоп</sub>
    </td>
    <td align="center">
     <img width="451" height="912" alt="chrome_CeNEgRNm7a" src="https://github.com/user-attachments/assets/2cf5d23b-43b9-4e41-b732-df0e8e480b95" alt="Mobile view 2" /><br/>
      <sub>Смартфон (альтернативний вигляд)</sub>
    </td>
  </tr>
</table>

---

## Доступність

* `prefers-reduced-motion` — анімації вимикаються, частинки малюються статично, перша фраза показується одразу
* `prefers-contrast: high` — посилені контури та контраст тексту
* ARIA-атрибути в посилань, `aria-live` для тексту, що друкується
* Видимий фокус і клавіатурна навігація
* Анімація частинок ставиться на паузу, коли футер не видно або вкладка неактивна

---

## Сумісність браузерів

Підтримуються сучасні браузери з `ResizeObserver` та `IntersectionObserver`:

* Chrome 90+
* Firefox 88+
* Edge 90+
* Safari 14+
* iOS Safari 14+
* Chrome Android 90+

---

## FAQ

**Чому футер російською?**
Російська — мова за замовчуванням. Вона показується, якщо мова браузера не російська, не українська і не англійська.

**Частинки не з'являються. Що перевірити?**
Переконайтеся, що в розмітці є `<div id="particles-js">`, що `main.js` підключено останнім і що в консолі немає помилок. Якщо в системі ввімкнено зменшення руху, частинки малюються без анімації навмисно.

**Соціальні іконки відображаються порожніми квадратами.**
Font Awesome завантажується автоматично з `kit.fontawesome.com`. Перевірте, що запит не блокується розширенням, CSP або мережею.

**Не вдається скопіювати текст футера.**
Увімкнено захист від копіювання. Встановіть `data-protect="off"` або `window.FooterConfig = { protect: 'off' }`.

**Футер погано читається на світлому сайті.**
Тема підкладки визначається автоматично за фоном батьківських елементів. Її можна задати вручну: `data-surface="light"` або `data-surface="dark"` у `.footer-wrapper`.

**Чи можна вимкнути анімацію?**
Видаліть `particles.js` і блок `<div id="particles-js">`, але тоді приберіть і `new ParticleSystem()` з `main.js`. Друкарську машинку можна зупинити, залишивши один текст у `texts`.

---

## Участь у розвитку проєкту

Ідеї та покращення вітаються:

1. Зробіть форк репозиторію
2. Створіть гілку для своїх змін
3. Відкрийте Pull Request з коротким описом

Про знайдені помилки повідомляйте через Issue: вкажіть браузер, пристрій і кроки для відтворення.

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
