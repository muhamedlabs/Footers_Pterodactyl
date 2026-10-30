function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage || 'ru';
    const langCode = userLang.split('-')[0].toLowerCase();

    if (langCode === 'uk') {
        return {
            texts: [
                "Креативні YouTube-канали та IT-проєкти",
                "Технології, ідеї й бачення Андрія Мухамеда",
                "Світ Андрія Мухамеда"
            ],
            tagline: "Креативна та технологічна мережа",
            brand: "Мухамед",
            status: "Мережа активна",
            buttonText: "Є — посилання"
        };
    }
    if (langCode === 'en') {
        return {
            texts: [
                "Creative YouTube channels & IT projects",
                "Technology, ideas and the vision of Andrey Muhamed",
                "The world of Andrey Muhamed"
            ],
            tagline: "Creative & Technology Network",
            brand: "Muhamed",
            status: "Network online",
            buttonText: "Multilink"
        };
    }
    return {
        texts: [
            "Креативные YouTube-каналы и IT-проекты",
            "Технологии, идеи и видение Андрея Мухамеда",
            "Мир Андрея Мухамеда"
        ],
        tagline: "Креативная и технологическая сеть",
        brand: "Мухамед",
        status: "Сеть активна",
        buttonText: "Мультиссылка"
    };
}
