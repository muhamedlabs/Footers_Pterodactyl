# Footers Pterodactyl <a href="README.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Russia_flag.png?raw=true" alt="RU" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_UA.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Ukraine_flag.png?raw=true" alt="UA" width="28" height="28" style="border-radius: 12px;"></a> <a href="README_EN.md"><img src="https://github.com/muhamedlabs/MuhamedTrash/blob/main/Flags/Unit_King_flag.png?raw=true" alt="UK" width="28" height="28" style="border-radius: 12px;"></a>

<img width="1920" height="957" alt="chrome_CEJ9p0kcgB" src="https://github.com/user-attachments/assets/3e4c39ae-10a7-4624-9183-fcf58fa1d5af" />

## Description

**Footers Pterodactyl** is a modern, responsive footer with glassmorphism, soft particle animation and built-in multilingual support.

Suitable for:

* web applications
* portfolios
* landing pages
* commercial websites

Lightweight, clean and ready to use with no complicated setup.

---

## Features

* Glassmorphism design
* Animated particles inside the footer
* Automatic browser language detection
* Fully responsive on any screen size
* Optimized performance
* Smooth, unobtrusive animations
* Accessibility and reduced-motion support
* Social icons with hover effects

---

## Project structure

```text
Footers_Pterodactyl/
├── index.html      # demo page with the ready-made footer
├── footer.css      # footer styles (glassmorphism, responsiveness)
├── footer.js       # language detection and particle animation
├── README.md       # documentation (RU)
├── README_UA.md    # documentation (UA)
└── README_EN.md    # documentation (EN)
```

Open `index.html` in your browser to see the footer in action right away.

---

## Language support

The footer supports **three languages only**:

| Language   | Code | Behavior                 |
| ---------- | ---- | ------------------------ |
| Russian    | `ru` | **used by default**      |
| Ukrainian  | `uk` | detected automatically   |
| English    | `en` | detected automatically   |

If the browser language is not recognized, the **Russian version** is shown.

---

## Screenshots

**Ukrainian**  
<img width="1357" height="177" alt="chrome_vdqe2j7L1u" src="https://github.com/user-attachments/assets/88fbe0dc-83b4-45d8-954d-28f0cdb0ef6a" />

**Russian**  
<img width="1266" height="126" alt="chrome_QYNoShnJdy" src="https://github.com/user-attachments/assets/d0967740-d3bb-4f36-8114-a00d5eefa0f1" />

**English**  
<img width="1296" height="160" alt="chrome_Z3T1JHu0Zc" src="https://github.com/user-attachments/assets/87fda919-f04c-454d-ac94-3ed3160eaec6" />

---

## Installation

1. Copy `footer.css` and `footer.js` into your project
2. Copy the `<footer class="pt-footer">…</footer>` block from `index.html` and paste it before the closing `</body>` tag
3. Include the styles and scripts:

```html
<head>
  <!-- Font Awesome (social icons) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <!-- Footer styles -->
  <link rel="stylesheet" href="footer.css">
</head>
<body>
  <!-- ... your site ... -->

  <footer class="pt-footer"> ... </footer>

  <!-- Particles.js (particle animation) -->
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <!-- Footer logic: language and particles -->
  <script src="footer.js"></script>
</body>
```

4. Done

No bundlers or npm packages. Particles.js must load **before** `footer.js`.

---

## Technologies

* **HTML5** — semantic structure
* **CSS3** — grid, flexbox, blur, clamp, gradients
* **JavaScript** — animations and language logic
* **Particles.js** — visual particles
* **Font Awesome** — social icons

---

## Configuration

### Social links

Replace the URL inside the tags in `index.html`:

```html
<a href="https://muhamedlabs.pro" class="social-icon">
```

### Logo

Replace the image address in the tag:

```html
<img class="pt-footer__logo" src="path/to/your/logo.png" alt="">
```

### Changing texts and languages

Open `footer.js`. The texts live in the `TRANSLATIONS` object, and the language is chosen by the function:

```js
detectLanguage()
```

You can:

* change the texts
* change the default language (`DEFAULT_LANG`)
* add a new language (add it to `TRANSLATIONS` and to the `SUPPORTED` list)

Elements with the `data-i18n` attribute receive the text, and `data-i18n-aria` sets the label for screen readers.

### Colors and style

The main parameters are variables at the top of `footer.css`:

```css
.pt-footer {
  --pt-bg: rgba(255, 255, 255, 0.08);   /* glass background */
  --pt-border: rgba(255, 255, 255, 0.18); /* border */
  --pt-text: #e8ecff;                   /* text color */
  --pt-accent: #7aa2ff;                 /* hover accent */
  --pt-radius: 20px;                    /* corner radius */
}
```

### Particle settings

The settings are in the `initParticles()` function in `footer.js`:

```js
number: { value: isMobile ? 20 : 40 }   // number of particles
color:  { value: '#ffffff' }            // color
move:   { speed: 1 }                    // speed
```

Lower the number and speed for weaker devices or a calmer look.

---

## Compatibility and responsiveness

The footer displays correctly on different types of devices:

<table align="center">
  <tr>
    <td align="center">
      <img width="581" height="892" alt="chrome_B1AAI7eRqi" src="https://github.com/user-attachments/assets/60155fb0-c52a-44d2-9e0b-bd8f4de1b6f0" alt="Mobile view 1" /><br/>
      <sub>Smartphone</sub>
    </td>
    <td align="center">
      <img width="1466" height="872" alt="chrome_653xxqbE42" src="https://github.com/user-attachments/assets/03dd5e18-3650-4e63-b448-88fd0102bc1c" alt="Desktop view" /><br/>
      <sub>Desktop</sub>
    </td>
    <td align="center">
      <img width="489" height="913" alt="chrome_HHbuyAhQDb" src="https://github.com/user-attachments/assets/8a1336e3-23f9-4ef9-94d0-5dd434120405" alt="Mobile view 2" /><br/>
      <sub>Smartphone (alternative view)</sub>
    </td>
  </tr>
</table>

---

## Accessibility

* `prefers-reduced-motion` support (particles are not started, transitions are disabled)
* correct ARIA attributes
* keyboard navigation and visible focus
* screen reader compatibility

The interface stays comfortable for all users.

---

## Browser compatibility

Modern browsers are supported:

* Chrome 90+
* Firefox 88+
* Edge 90+
* Safari 14+
* iOS Safari 14+
* Chrome Android 90+

---

## FAQ

**Why is the footer in Russian?**
Russian is the default language. It is shown when the browser language is not Russian, Ukrainian or English.

**The particles don't appear. What should I check?**
Make sure Particles.js is loaded before `footer.js`, that your page has the `<div id="footer-particles">` element, and that there are no errors in the browser console. If reduced motion is enabled in the system, the particles are disabled on purpose.

**The social icons show as empty squares.**
Font Awesome is not loaded. Check the stylesheet link in `<head>`.

**Can I turn the animation off?**
Remove the `initParticles()` call in `footer.js` or delete the `footer-particles` block from the markup.

---

## Contributing

Ideas and improvements are welcome:

1. Fork the repository
2. Create a branch for your change
3. Open a Pull Request with a short description

For bugs, open an Issue and describe the browser, the device and the steps to reproduce.

---

## Contact and support

We are always open to communication, new ideas and collaboration. For any questions, reach out:

- Telegram channel: https://t.me/muhamedlabs
- Email: partners@muhamedlabs.pro
- Discord: https://discord.com/users/768782555171782667

<br>

<div align="center">
  <sub><img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> 2023-2028 Muhamed IT <img src="https://github.com/muhamedlabs/MuhamedTrash/raw/main/Avatars/Muhamed_IT.png" width="20" style="vertical-align: middle;"> </sub>
</div>
