import Vue from "vue";

export const CMS_DOMAIN = "https://manage.uzncd.com";
export const AUTH_DOMAIN = "https://admin.uzncd.com";

// DICTIONARY handles the website in different languages
export const DICTIONARY = {
  ru: {
    login: "Войти",
    registration: "Регистрация",
    vacancies: "Вакансии",
    about_company: "О компании",
    services: "Услуги",
    documents: "Документы",
    partners: "Партнеры",
    education: "Образование",
    faq: "Вопросы",
    contacts: "Контакты",
    our_mission: "Наша миссия",
    cooperation: "Сотрудничество",
    our_services: "Наши услуги",
    copyright: "2019 NCD. Все права защищены",
    close: "Закрыть",
    read_more: "Подробнее",
    candidates: "Аппликантов",
    employers: "Работодателей",
    year_of_exp: "Год опыта",
    name: "Имя",
    subject: "Тема",
    message: "Сообщение",
    send: "Отправить",
    navigation: "Навигация",
    about_us: "О нас",
    subscribe_mail: "Подпишитесь на рассылку",
    your: "Ваш",
    all_rights: "Все права защищены",
    main: "Главная",
    subscribe: "Подписаться",
    applicant_profile: "Профиль соискателя",
    applicant_profile_text: "Личная карточка для оценки квалификации",
    employment_abroad: "Трудоустройство за рубежом",
    employment_abroad_text: "Поможем найти достойную работу",
    help_with_visa: "Содействие в получении виз",
    help_with_visa_text: "Консультации по визовым вопросам",
    list_of_vacancies: "Список вакансий",
    vacancy: "Вакансия",
    country: "Страна",
    wages: "Заработная плата",
    apply: "Подать заявку",
    no_files: "Файлы не найдены."
  },
  kz: {
    login: "Kіrý",
    registration: "Тіркеу",
    vacancies: "Jumys oryndary",
    about_company: "Kompanııa týraly",
    services: "Qyzmetter",
    documents: "Qujattar",
    partners: "Serіktester",
    education: "Bilim",
    faq: "Suraqtar",
    contacts: "Baılanys málіmetterі",
    our_mission: "Bіzdіń mıssııamyz",
    cooperation: "Yntymaqtastyq",
    our_services: "Bizdiñ qızmetterimiz",
    copyright: "2019 NCD. Barlıq quqıqtar saqtalğan",
    close: "Jabw",
    read_more: "Köbirek",
    candidates: "Kandïdattar",
    employers: "Jumıs berwşiler",
    year_of_exp: "Täjirïbe jılı",
    name: "Atı",
    subject: "Atawı",
    message: "Mätin",
    send: "Jiberiñiz",
    navigation: "Site map",
    about_us: "Navïgacïya",
    subscribe_mail: "Jañalıqqa jazılıñız",
    your: "",
    all_rights: "Barlıq quqıqtar qorğalğan",
    main: "Bastı bet",
    subscribe: "Jazılw",
    applicant_profile: "Ötiniş berwşiniñ profïli",
    applicant_profile_text: "Jeke biliktilik kartası",
    employment_abroad: "Şetelde jumıs istew",
    employment_abroad_text: "Biz sizge layıqtı jumıs tabwğa kömektesemizу",
    help_with_visa: "Vïzalıq kömek",
    help_with_visa_text: "Vïza boyınşa keñesşi",
    list_of_vacancies: "Bos jumıs orındarı",
    vacancy: "Bos jumıs ornı",
    country: "El",
    wages: "Jalaqı",
    apply: "Tapsırıs berw",
    no_files: "Fayldar tabılmadı."
  },
  en: {
    login: "Login",
    registration: "Registration",
    vacancies: "Vacancies",
    about_company: "About company",
    services: "Services",
    documents: "Documents",
    partners: "Partners",
    education: "Education",
    faq: "FAQ",
    contacts: "Contacts",
    our_mission: "Our mission",
    cooperation: "Cooperation",
    our_services: "Our services",
    copyright: "2019 NCD. All rights reserved",
    close: "Close",
    read_more: "Read more",
    candidates: "Candidates",
    employers: "Employers",
    year_of_exp: "Year of experience",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send: "Send",
    navigation: "Site map",
    about_us: "About us",
    subscribe_mail: "Sign up for the newsletter",
    your: "Your",
    all_rights: "All rights reserved",
    main: "Main page",
    subscribe: "Subscribe",
    applicant_profile: "Applicant profile",
    applicant_profile_text: "Personal qualification card",
    employment_abroad: "Employment abroad",
    employment_abroad_text: "We will help you find a decent job",
    help_with_visa: "Visa assistance",
    help_with_visa_text: "We will give you an advice on visa",
    list_of_vacancies: "List of vacancies",
    vacancy: "Vacancy",
    country: "Country",
    wages: "Wages",
    apply: "Apply",
    no_files: "No files were found."
  },
  uz: {
    login: "Kirish",
    registration: "Ro'yxatdan o'tish",
    vacancies: "Ish o'rinlari",
    about_company: "Kompaniya haqida",
    services: "Xizmatlar",
    documents: "Hujjatlar",
    partners: "Hamkorlar",
    education: "Ta'lim",
    faq: "Savollar",
    contacts: "Kontaktlar",
    our_mission: "Bizning maqsadimiz",
    cooperation: "Hamkorlik",
    our_services: "Bizning xizmatlarimiz",
    copyright: "2019 NCD. Barcha huquqlar himoyalangan",
    close: "Yopish",
    read_more: "Batafsil",
    candidates: "Talabgorlar",
    employers: "Ish beruvchilar",
    year_of_exp: "Tajriba yili",
    name: "Ismi",
    subject: "Mavzu",
    message: "Matn",
    send: "Yuborish",
    navigation: "Navigatsiya",
    about_us: "Biz haqqimizda",
    subscribe_mail: "Yangiliklarga obuna boling",
    your: "",
    all_rights: "Barcha huquqlar himoyalangan",
    main: "Bosh sahifa",
    subscribe: "Obuna bo'lish",
    applicant_profile: "Arizachining anketasi",
    applicant_profile_text: "Shaxsiy malaka kartasi",
    employment_abroad: "Chet elda ishlash",
    employment_abroad_text: "Sizga munosib ish topishga yordam beramiz",
    help_with_visa: "Viza bo'yicha yordam",
    help_with_visa_text: "Viza bo'yicha maslahat",
    list_of_vacancies: "Bo'sh ish o'rinlar ro'yxatlari",
    vacancy: "Bo'sh ish o'rni",
    country: "Mamlakati",
    wages: "Oyligi",
    apply: "Ishga murojaat qilish",
    no_files: "Fayllar topilmadi."
  }
};

export const eventBus = new Vue();

export const ga_id = "UA-149343577-2";
