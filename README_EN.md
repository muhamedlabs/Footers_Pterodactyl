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

## Language support

The footer supports **three languages only**:

| Language   | Code | Behavior                  |
| ---------- | ---- | ------------------------- |
| Russian    | `ru` | **used by default**       |
| Ukrainian  | `uk` | detected automatically    |
| English    | `en` | detected automatically    |

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

1. Copy the footer's HTML code
2. Paste it before the closing `</body>` tag
3. Done

No bundlers, npm packages or unnecessary dependencies.

### Connecting dependencies

The footer relies on two external libraries. Make sure they are loaded on your page (for example via CDN):

```html
<!-- Font Awesome (social icons) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Particles.js (particle animation) -->
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
```

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

Replace the URL inside the tags:

```html
<a href="https://muhamedlabs.pro" class="social-icon">
```

### Changing texts and languages

Edit the function:

```js
detectLanguage()
```

You can:

* change the texts
* change the default language
* add a new language

### Particle settings

The animation is configured through the standard Particles.js options. The most useful ones:

```js
particles: {
  number: { value: 40 },              // number of particles
  color: { value: "#ffffff" },        // particle color
  opacity: { value: 0.4 },            // transparency
  size: { value: 3 },                 // particle size
  move: { speed: 1 }                  // movement speed
}
```

Lower `number` and `speed` for weaker devices or a calmer look.

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

* `prefers-reduced-motion` support
* correct ARIA attributes
* keyboard navigation
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
Make sure Particles.js is loaded before the footer script and that there are no errors in the browser console.

**The social icons show as empty squares.**
Font Awesome is not loaded. Check the stylesheet link from the "Connecting dependencies" section.

**Can I turn the animation off?**
Users with `prefers-reduced-motion` enabled get reduced animation automatically. You can also remove the Particles.js initialization to disable it for everyone.

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
