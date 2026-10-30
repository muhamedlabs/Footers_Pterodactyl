# Footers Pterodactyl <a href="README.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Russia_flag.png?raw=true" alt="RU" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_UA.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Ukraine_flag.png?raw=true" alt="UA" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_EN.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Unit_King_flag.png?raw=true" alt="UK" width="28" height="28" style="border-radius: 12px;"></a>

<img width="1920" height="957" alt="chrome_CEJ9p0kcgB" src="https://github.com/user-attachments/assets/3e4c39ae-10a7-4624-9183-fcf58fa1d5af" />

## Описание

**Footers Pterodactyl** — современный адаптивный футер со стеклянным морфизмом, мягкой анимацией частиц и встроенной мультиязычной поддержкой.

Подходит для:

* веб-приложений
* портфолио
* лендингов
* коммерческих сайтов

Лёгкий, аккуратный и готовый к использованию без сложной настройки.

---

## Возможности

* Glassmorphism-дизайн
* Анимированные частицы внутри футера
* Автоматическое определение языка браузера
* Полная адаптивность под любые экраны
* Оптимизированная производительность
* Плавные ненавязчивые анимации
* Поддержка accessibility и reduced-motion
* Социальные иконки с hover-эффектами

---

## Поддержка языков

Футер поддерживает **только три языка**:

| Язык            | Код  | Поведение                     |
| --------------- | ---- | ----------------------------- |
| Русский         | `ru` | **используется по умолчанию** |
| Украинский      | `uk` | определяется автоматически    |
| Английский      | `en` | определяется автоматически    |

Если язык браузера не распознан — отображается **русская версия**.

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

1. Скопируйте HTML-код футера
2. Вставьте его перед закрывающим тегом `</body>`
3. Готово

Без сборщиков, npm-пакетов и лишних зависимостей.

### Подключение зависимостей

Футер использует две внешние библиотеки. Убедитесь, что они подключены на странице (например, через CDN):

```html
<!-- Font Awesome (социальные иконки) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Particles.js (анимация частиц) -->
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
```

---

## Технологии

* **HTML5** — семантическая структура
* **CSS3** — grid, flexbox, blur, clamp, gradients
* **JavaScript** — анимации и языковая логика
* **Particles.js** — визуальные частицы
* **Font Awesome** — социальные иконки

---

## Настройка

### Социальные ссылки

Замените URL внутри тегов:

```html
<a href="https://muhamedlabs.pro" class="social-icon">
```

### Изменение текстов и языков

Отредактируйте функцию:

```js
detectLanguage()
```

Можно:

* изменить тексты
* поменять язык по умолчанию
* добавить новый язык

### Настройка частиц

Анимация настраивается через стандартные опции Particles.js. Самые полезные:

```js
particles: {
  number: { value: 40 },              // количество частиц
  color: { value: "#ffffff" },        // цвет частиц
  opacity: { value: 0.4 },            // прозрачность
  size: { value: 3 },                 // размер частиц
  move: { speed: 1 }                  // скорость движения
}
```

Уменьшите `number` и `speed` для слабых устройств или более спокойного вида.

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

* поддержка `prefers-reduced-motion`
* корректные ARIA-атрибуты
* клавиатурная навигация
* совместимость со скринридерами

Интерфейс остаётся удобным для всех пользователей.

---

## Совместимость браузеров

Поддерживаются современные браузеры:

* Chrome 90+
* Firefox 88+
* Edge 90+
* Safari 14+
* iOS Safari 14+
* Chrome Android 90+

---

## FAQ

**Почему футер на русском?**
Русский — язык по умолчанию. Он показывается, когда язык браузера не русский, не украинский и не английский.

**Частицы не появляются. Что проверить?**
Убедитесь, что Particles.js загружается раньше скрипта футера и что в консоли браузера нет ошибок.

**Социальные иконки отображаются пустыми квадратами.**
Не подключён Font Awesome. Проверьте ссылку на стили из раздела «Подключение зависимостей».

**Можно ли отключить анимацию?**
Для пользователей с включённым `prefers-reduced-motion` анимация уменьшается автоматически. Также можно убрать инициализацию Particles.js, чтобы отключить её для всех.

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
