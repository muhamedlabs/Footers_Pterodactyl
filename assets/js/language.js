function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage || 'ru';
    const langCode = userLang.split('-')[0].toLowerCase();

    if (langCode === 'uk') {
        return {
            texts: [
                "Креативні YouTube - канали та IT - проєкти",
                "Технології, ідеї й бачення Андрея Мухамеда",
                "Світ творця Андрея Мухамеда",
                "Ідеї, що стають проєктами",
                "Долучайся до нашої спільноти"
            ],
            tagline: "Креативна та технологічна мережа",
            brand: "Мухамед",
            status: "Мережа активна",
            buttonText: "Єпосилання"
        };
    }
    if (langCode === 'en') {
        return {
            texts: [
                "Creative YouTube channels & IT projects",
                "Technology, ideas and the vision of Andrey Muhamed",
                "The world of Andrey Muhamed",
                "Ideas that become projects",
                "Join our community"
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
            "Мир Андрея Мухамеда",
            "Идеи, которые становятся проектами",
            "Присоединяйся к нашему сообществу"
        ],
        tagline: "Креативная и технологическая сеть",
        brand: "Мухамед",
        status: "Сеть активна",
        buttonText: "Мультиссылка"
    };
}
