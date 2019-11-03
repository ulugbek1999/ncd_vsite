
import Vue from 'vue'

export const CMS_DOMAIN = 'https://manage.ncd.kz';
export const AUTH_DOMAIN = 'http://127.0.0.1:8000';

// DICTIONARY handles the website in different languages
export const DICTIONARY = {
  'ru': {
    login: 'Войти',
    registration: 'Регистрация',
    vacancies: 'Вакансии',
    about_company: 'О компании',
    services: 'Услуги',
    documents: 'Документы',
    partners: 'Партнеры',
    education: 'Образование',
    faq: 'Вопросы',
    contacts: 'Контакты',
    our_mission: 'Наша миссия',
    cooperation: 'Сотрудничество',
    our_services: 'Наши услуги',
    copyright: '2019 NCD. Все права защищены',
    close: 'Закрыть'
  },
  'kz': {
    login: 'Kіrý',
    registration: 'Тіркеу',
    vacancies: 'Jumys oryndary',
    about_company: 'Kompanııa týraly',
    services: 'Qyzmetter',
    documents: 'Qujattar',
    partners: 'Serіktester',
    education: 'Bilim',
    faq: 'Suraqtar',
    contacts: 'Baılanys málіmetterі',
    our_mission: 'Bіzdіń mıssııamyz',
    cooperation: 'Yntymaqtastyq',
    our_services: 'Bizdiñ qızmetterimiz',
    copyright: '2019 NCD. Barlıq quqıqtar saqtalğan',
    close: 'Jabw'
  },
  'en': {
    login: 'Login',
    registration: 'Registration',
    vacancies: 'Vacancies',
    about_company: 'About company',
    services: 'Services',
    documents: 'Documents',
    partners: 'Partners',
    education: 'Education',
    faq: 'FAQ',
    contacts: 'Contacts',
    our_mission: 'Our mission',
    cooperation: 'Cooperation',
    our_services: 'Our services',
    copyright: '2019 NCD. All rights reserved',
    close: 'Close'
  },
  'uz': {
    login: 'Kirish',
    registration: 'Ro\'yxatdan o\'tish',
    vacancies: 'Ish o\'rinlari',
    about_company: 'Kompaniya haqida',
    services: 'Xizmatlar',
    documents: 'Hujjatlar',
    partners: 'Hamkorlar',
    education: 'Ta\'lim',
    faq: 'Savollar',
    contacts: 'Kontaktlar',
    our_mission: 'Bizning maqsadimiz',
    cooperation: 'Hamkorlik',
    our_services: 'Bizning xizmatlarimiz',
    copyright: '2019 NCD. Barcha huquqlar himoyalangan',
    close: 'Yopish'
  },
};

export const eventBus = new Vue()
