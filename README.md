# Footers Pterodactyl <a href="README.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Russia_flag.png?raw=true" alt="RU" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_UA.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Ukraine_flag.png?raw=true" alt="UA" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_EN.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Unit_King_flag.png?raw=true" alt="UK" width="28" height="28" style="border-radius: 12px;"></a>

<img width="1920" height="957" alt="chrome_CEJ9p0kcgB" src="https://github.com/user-attachments/assets/3e4c39ae-10a7-4624-9183-fcf58fa1d5af" />

## Описание

**Footers Pterodactyl (ветка `complete`)** — готовый футер в розовой фирменной стилистике: стеклянный фон, интерактивные частицы на canvas, эффект печатной машинки, живые часы и встроенная мультиязычность.

Подходит для:

* веб-приложений
* портфолио
* лендингов
* коммерческих сайтов

Без сборщиков и npm-пакетов: подключаете файлы (или одну CDN-вставку) — и футер работает.

---

## Возможности

* Фирменный дизайн со стеклянным эффектом и срезанными углами
* Собственная система частиц на `<canvas>` (без Particles.js), реагирует на курсор
* Эффект печатной машинки с ротацией фраз
* Живые часы (UTC+3) и индикатор статуса сети
* Автоматическое определение языка браузера (RU / UK / EN)
* Автоопределение светлой и тёмной подложки сайта
* Опциональный фоновый рисунок
* Опциональная защита от копирования
* Полная адаптивность
* Поддержка `prefers-reduced-motion` и `prefers-contrast`
* Социальные иконки и кнопка «Мультиссылка» с hover-эффектами

---

## Структура проекта

```text
Footers_Pterodactyl/
├── Index_footer.html       # подключение локальных файлов
├── footer-panel.html       # подключение через CDN (jsDelivr, ветка complete)
├── README.md               # документация (RU)
├── README_UA.md            # документация (UA)
├── README_EN.md            # документация (EN)
└── assets/
    ├── logo.webp
    ├── images/
    │   └── picture.webp            # фоновое изображение
    ├── icons/
    │   ├── icon-m-pink.webp
    │   ├── icon-m-white.webp
    │   └── icon-m-black.webp
    ├── fonts/
    │   ├── kharkiv_tone.ttf
    │   └── ermilov_bold.otf
    ├── css/
    │   ├── base.css        # переменные и основа
    │   ├── layout.css      # сетка и расположение
    │   ├── brand.css       # логотип и название
    │   ├── actions.css     # соцсети и кнопка мультиссылки
    │   ├── status.css      # печатная машинка, статус, часы
    │   ├── effects.css     # фон, линии, светлая/тёмная подложка
    │   ├── protect.css     # стили защиты от копирования
    │   ├── a11y.css        # доступность
    │   ├── responsive.css  # адаптивность
    │   ├── font.css        # шрифт, встроенный в base64
    │   └── styles.css      # все стили одним файлом
    └── js/
        ├── language.js     # определение языка и тексты
        ├── typewriter.js   # печатная машинка, часы, подстановка текстов
        ├── particles.js    # система частиц
        ├── protection.js   # защита от копирования
        ├── background.js   # управление фоновым рисунком
        ├── main.js         # инициализация и API
        └── script.js       # весь JS одним файлом
```

---

## Поддержка языков

Футер поддерживает **три языка**:

| Язык       | Код  | Поведение                     |
| ---------- | ---- | ----------------------------- |
| Русский    | `ru` | **используется по умолчанию** |
| Украинский | `uk` | определяется автоматически    |
| Английский | `en` | определяется автоматически    |

Язык берётся из `navigator.language`. Если он не распознан — отображается **русская версия**.

---

## Примеры отображения

**Украинский**  
<img width="1357" height="177" alt="chrome_vdqe2j7L1u" src="https://github.com/user-attachments/assets/88fbe0dc-83b4-45d8-954d-28f0cdb0ef6a" />

**Русский**  
<img width="1266" height="126" alt="chrome_QYNoShnJdy" src="https://github.com/user-attachments/assets/d0967740-d3bb-4f36-8114-a00d5eefa0f1" />

**Английский**  
<img width="1296" height="160" alt="chrome_Z3T1JHu0Zc" src="https://github.com/user-attachments/assets/87fda919-f04c-454d-ac94-3ed3160eaec6" />

---

## Установка

Есть два способа.

### Вариант 1. Локальные файлы

1. Скопируйте папку `assets` в свой проект
2. Скопируйте блок `<div class="footer-wrapper">…</div>` из `Index_footer.html` перед закрывающим тегом `</body>`
3. Подключите стили и скрипты (они уже есть внизу `Index_footer.html`):

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

Порядок скриптов важен: `main.js` должен идти **последним**.

### Вариант 2. Через CDN

Скопируйте содержимое `footer-panel.html` на свою страницу. Встроенный скрипт сам подтянет все стили, скрипты и логотип из jsDelivr:

```text
https://cdn.jsdelivr.net/gh/muhamedlabs/Footers_Pterodactyl@complete/
```

Ничего скачивать не нужно.

Font Awesome подключать вручную не требуется — `main.js` загружает его сам.

---

## Технологии

* **HTML5** — семантическая структура
* **CSS3** — grid, flexbox, clamp, градиенты, переменные
* **JavaScript (vanilla)** — частицы на canvas, печатная машинка, языковая логика
* **Font Awesome** — социальные иконки (подгружается автоматически)

---

## Настройка

### Социальные ссылки

Замените URL в блоке `footer-actions` в HTML:

```html
<a href="https://t.me/muhamedlabs" target="_blank" class="social-icon" aria-label="Вступайте в наш Telegram-канал">
    <i class="fa-brands fa-telegram" aria-hidden="true"></i>
</a>
```

Ссылку кнопки мультиссылки меняйте в `<a class="multilink-button" href="...">`.

### Логотип

Иконка бренда лежит в `assets/icons/`: доступны розовая, белая и чёрная версии. Укажите нужную в теге:

```html
<img src="assets/icons/icon-m-pink.webp" alt="">
```

Если изображение не загрузится, автоматически показывается буква «M».

### Изменение текстов и языков

Откройте `assets/js/language.js`. Функция `detectLanguage()` возвращает для каждого языка:

| Поле         | Назначение                          |
| ------------ | ----------------------------------- |
| `texts`      | фразы для печатной машинки          |
| `tagline`    | подпись под названием бренда        |
| `brand`      | название бренда                     |
| `status`     | текст статуса сети                  |
| `buttonText` | текст кнопки мультиссылки           |

Чтобы добавить язык, добавьте ещё одну ветку `if (langCode === '...')`. Язык по умолчанию — последний `return` в функции.

Суффикс **Ads** в названии добавляется в `typewriter.js` (`this.data.brand + ' <b>Ads</b>'`) — измените его там.

Часовой пояс часов (`UTC+3`) задан в `typewriter.js`, метод `startClock()`, и в подписи `<em>UTC+3</em>` в разметке.

### Цвета и стиль

Основные переменные находятся в начале `assets/css/base.css`:

```css
.footer-wrapper {
  --ft-pink: #ff2a62;     /* основной акцент */
  --ft-edge: #ff9dbd;     /* светлая кромка */
  --ft-white: #ffffff;
  --ft-soft: #f6f1f3;
  --ft-muted: #cfc6c9;
  --ft-cut: 16px;         /* срез углов */
  --ft-max: 1200px;       /* максимальная ширина */
  --ft-glass: .16;        /* прозрачность стекла */
}
```

### Фоновый рисунок

Управляется атрибутом `data-bg` у `.footer-wrapper` (`on` / `off`, по умолчанию `off`):

```html
<div class="footer-wrapper" data-bg="on">
```

Или через JavaScript:

```js
window.footerUtils.setBackground(true);
window.footerUtils.toggleBackground();
```

Картинка задаётся переменной `--ft-bg-img` (по умолчанию `assets/images/picture.webp`).

### Защита от копирования

Режим задаётся атрибутом `data-protect`:

| Значение | Что происходит                                                              |
| -------- | --------------------------------------------------------------------------- |
| `footer` | защита действует только внутри футера (используется в демо)                 |
| `page`   | защита на всей странице (**значение по умолчанию, если атрибут не указан**) |
| `off`    | защита отключена                                                            |

Блокируются контекстное меню, копирование, выделение, перетаскивание и часть горячих клавиш. Поля ввода не затрагиваются.

> Это лишь лёгкое препятствие: полностью защитить контент на клиенте невозможно. В режиме `page` также скрывается страница при печати. Если вам это не нужно, используйте `footer` или `off`.

Режим можно задать и через конфиг, до подключения скриптов:

```html
<script>
  window.FooterConfig = { protect: 'footer', background: 'off' };
</script>
```

### Управление из JavaScript

После загрузки доступен объект `window.footerUtils`:

```js
footerUtils.restartTyping();                 // перезапустить печатную машинку
footerUtils.updateTexts(['Текст 1', 'Текст 2']); // заменить фразы
footerUtils.setBackground(true);             // включить/выключить фон
footerUtils.toggleBackground();              // переключить фон
footerUtils.detectLanguage();                // получить тексты текущего языка
```

### Настройка частиц

Параметры находятся в `assets/js/particles.js`. Количество частиц считается автоматически по площади футера (от 14 до 70), дальность связей задаёт `this.link` (по умолчанию 125). Уменьшите значения для слабых устройств или более спокойного вида.

---

## Совместимость и адаптивность

Футер корректно отображается на разных типах устройств:

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
      <sub>Смартфон (альтернативный вид)</sub>
    </td>
  </tr>
</table>

---

## Доступность

* `prefers-reduced-motion` — анимации отключаются, частицы рисуются статично, первая фраза показывается сразу
* `prefers-contrast: high` — усиленные контуры и контраст текста
* ARIA-атрибуты у ссылок, `aria-live` для печатающегося текста
* Видимый фокус и клавиатурная навигация
* Анимация частиц ставится на паузу, когда футер не виден или вкладка неактивна

---

## Совместимость браузеров

Поддерживаются современные браузеры с `ResizeObserver` и `IntersectionObserver`:

* Chrome 90+
* Firefox 88+
* Edge 90+
* Safari 14+
* iOS Safari 14+
* Chrome Android 90+

---

## FAQ

**Почему футер на русском?**
Русский — язык по умолчанию. Он показывается, если язык браузера не русский, не украинский и не английский.

**Частицы не появляются. Что проверить?**
Убедитесь, что в разметке есть `<div id="particles-js">`, что `main.js` подключён последним и что в консоли нет ошибок. Если в системе включено уменьшение движения, частицы рисуются без анимации намеренно.

**Социальные иконки отображаются пустыми квадратами.**
Font Awesome загружается автоматически с `kit.fontawesome.com`. Проверьте, что запрос не блокируется расширением, CSP или сетью.

**Не удаётся скопировать текст футера.**
Включена защита от копирования. Установите `data-protect="off"` или `window.FooterConfig = { protect: 'off' }`.

**Футер плохо читается на светлом сайте.**
Тема подложки определяется автоматически по фону родительских элементов. Можно задать её вручную: `data-surface="light"` или `data-surface="dark"` у `.footer-wrapper`.

**Можно ли отключить анимацию?**
Удалите `particles.js` и блок `<div id="particles-js">`, но тогда уберите и `new ParticleSystem()` из `main.js`. Печатную машинку можно остановить, оставив один текст в `texts`.

---

## Участие в развитии проекта

Идеи и улучшения приветствуются:

1. Сделайте форк репозитория
2. Создайте ветку для своих изменений
3. Откройте Pull Request с кратким описанием

О найденных ошибках сообщайте через Issue: укажите браузер, устройство и шаги для воспроизведения.

---

## Связь и поддержка

Мы всегда открыты к общению, новым идеям и сотрудничеству. По всем вопросам обращайтесь:

- Telegram-канал: https://t.me/muhamedlabs
- Email: partners@muhamedlabs.pro
- Discord: https://discord.com/users/768782555171782667

<br>

<div align="center">
  <sub><img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> 2023-2028 Muhamed IT <img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> </sub>
</div>
