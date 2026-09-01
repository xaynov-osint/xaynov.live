/* Lightweight client-side localization shared by all static pages. */
(function () {
    const translations = {
        'Главная': 'Home', 'Портфолио': 'Portfolio', 'Прайс': 'Pricing', 'Курс': 'Course', 'Политика': 'Policy',
        'Программа обучения OSINT': 'OSINT Training Program', 'Прайс-лист': 'Price List',
        'Информационно-консультационные услуги': 'Information and consulting services',
        'Длительность': 'Duration', 'Формат': 'Format', 'Уровень': 'Level', 'Для кого': 'For whom',
        '7 дней': '7 days', '1.5 часа в день': '1.5 hours a day', 'Начальный / средний': 'Beginner / intermediate',
        'Аналитики, журналисты, безопасники, энтузиасты': 'Analysts, journalists, security professionals, enthusiasts',
        'День 01': 'Day 01', 'День 02': 'Day 02', 'День 03': 'Day 03', 'День 04': 'Day 04', 'День 05': 'Day 05', 'День 06': 'Day 06', 'День 07': 'Day 07',
        'Основы и методология': 'Fundamentals and methodology', 'Поиск и поисковые операторы': 'Search and search operators',
        'Социальные сети': 'Social networks', 'Домены, инфраструктура и техническая разведка': 'Domains, infrastructure and technical intelligence',
        'Бизнес-разведка (Corporate OSINT)': 'Business intelligence (Corporate OSINT)', 'Верификация и работа с дезинформацией': 'Verification and disinformation',
        'Итоговый проект и оформление отчёта': 'Final project and report writing', 'Практика': 'Practice',
        'Записаться на курс': 'Enroll in the course', 'Связаться': 'Contact', '← Прайс-лист': '← Price list',
        '01 / Исследования': '01 / Research', '02 / Консалтинг и обучение': '02 / Consulting and training',
        'Консультация': 'Consultation', 'Профессиональный разбор вашего кейса.': 'Professional review of your case.',
        'Персональный аудит': 'Personal audit', 'Глубокий анализ вашей личной безопасности.': 'In-depth analysis of your personal security.',
        'Обучающий курс OSINT': 'OSINT training course', 'Подготовка материала': 'Material preparation',
        'Комплексные проверки': 'Comprehensive checks', 'Мониторинг угроз': 'Threat monitoring', 'Аналитика цифровых активов': 'Digital asset intelligence', 'Работа с источником': 'Source handling',
        '02 / Кейсы': '02 / Case studies', '03 / Достижения': '03 / Achievements', '04 / Опыт работы': '04 / Work experience', '05 / Отказ от ответственности': '05 / Disclaimer',
        'Задача': 'Objective', 'Результат': 'Result', 'Роль': 'Role', 'Исследователь': 'Researcher', 'Открыть отчёт ': 'Open report ', 'Подробнее ': 'Read more ',
        'Основной узел связи: новости, аналитика и рефлексия': 'Main communication hub: news, analysis and reflection',
        'Образовательный контент, разборы инструментов и лекции.': 'Educational content, tool breakdowns and lectures.',
        'Аналитика, кейсы и цифровой след в виде быстрого дофамина.': 'Analysis, case studies and digital footprints in a quick format.',
        'Инструменты и скрипты для автоматизации задач.': 'Tools and scripts for task automation.',
        'Примеры отчетов и реализованных проектов.': 'Examples of reports and completed projects.',
        'Услуги и Прайс-лист': 'Services and price list', 'Прайс-лист': 'Price list',
        'Основной узел связи: новости, аналитика и рефлексия': 'Main communication hub: news, analysis and reflection',
        'Identity': 'Identity', 'Active Data Node': 'Active Data Node',
        'Право быть забытым': 'Right to be forgotten', 'Помощь в удалении/скрытии нежелательной информации.': 'Help removing or hiding unwanted information.',
        'Deep Check (Комплексное исследование)': 'Deep Check (Comprehensive research)', 'Due Diligence': 'Due Diligence',
        'Проверка контрагента.': 'Counterparty check.', 'Смотреть программу.': 'View the program.', 'от $50': 'from $50', '$15/час': '$15/hour',
        'Полная программа обучения — 7 дней. Смотреть программу.': 'Full training program — 7 days. View the program.',
        'Портфолио': 'Portfolio', 'Политическая и этическая декларация': 'Political and ethical declaration',
        'Миссия и академическая направленность': 'Mission and academic focus', 'Отказ от деструктивной деятельности': 'Rejection of destructive activity',
        'Порядок взаимодействия и ТЗ': 'Interaction and brief', 'Категории-исключения': 'Excluded categories', 'Финансовая политика': 'Financial policy', 'Возврат средств и гарантии': 'Refunds and guarantees',
        'Валюта': 'Currency', 'Схема 50/50': '50/50 scheme',
        'Срочные запросы тарифицируются с коэффициентом x2.': 'Urgent requests are charged at a x2 rate.',
        'Открыть отчёт': 'Open report', 'Разведка на основе открытых данных, деанонимизация и аналитика цифровых активов.': 'Open-source intelligence, deanonymization and digital asset analysis.'
    };

    const reverse = Object.fromEntries(Object.entries(translations).map(([ru, en]) => [en, ru]));
    const savedLanguage = localStorage.getItem('xaynov-language') || 'ru';

    function translate(language) {
        document.documentElement.lang = language;
        document.documentElement.dataset.language = language;
        document.querySelectorAll('.language-toggle').forEach((button) => {
            button.setAttribute('aria-pressed', language === 'en');
            button.setAttribute('aria-label', language === 'en' ? 'Switch to Russian' : 'Switch to English');
        });
        document.querySelectorAll('title, body *:not(script):not(style)').forEach((element) => {
            if (element.children.length === 0 && element.textContent.trim()) {
                const value = element.textContent.trim();
                const translated = language === 'en' ? translations[value] : reverse[value];
                if (translated) element.textContent = element.textContent.replace(value, translated);
            }
        });
        document.querySelectorAll('[alt]').forEach((element) => {
            const translated = language === 'en' ? translations[element.alt] : reverse[element.alt];
            if (translated) element.alt = translated;
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        translate(savedLanguage);
        document.querySelectorAll('.language-toggle').forEach((button) => {
            button.addEventListener('click', () => {
                const language = document.documentElement.lang === 'en' ? 'ru' : 'en';
                localStorage.setItem('xaynov-language', language);
                translate(language);
            });
        });
    });
})();
