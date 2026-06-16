# PeptX Age — Frontend-архитектура B2B E-Commerce платформы исследований

Коммерческий проект (MVP) по проектированию и разработке многостраничной интерфейсной архитектуры для платформы по продаже высокоочищенных пептидов, нутрицевтиков и аминокислот исследовательским лабораториям и B2B-клиентам.

* **Тип проекта:** Коммерческий продакшн / MVP (Фриланс)
* **Роль:** Frontend Developer (Интерфейсная часть от А до Я, архитектура навигации)
* **Статус:** ✅ Завершен (Фаза 1: Интерфейс и разводка логики)

---

## 🚀 Ключевые технические вызовы и решения

### 1. Проектирование многостраничной архитектуры (MPA)
Проект включает в себя 13+ функциональных страниц с глубокой вложенностью. Главным вызовом было связать их в единую, интуитивно понятную экосистему без потери контекста пользователя.
* **Решение:** Разработана унифицированная модульная структура сквозных компонентов (Header/Footer), внедрена система хлебных крошек (breadcrumbs) для прозрачного трекинга пути. Создана сквозная навигационная карта, обеспечивающая бесшовный переход от главной страницы к узкоспециализированным каталогам.

### 2. UX-логика многоэтапной воронки заказа
Для B2B-сегмента критически важно минимизировать количество шагов от выбора товара до подтверждения заявки, предусмотрев редактирование на лету.
* **Решение:** Спроектирована и сверстана отказоустойчивая структура корзины (`basket.html`) с элементами интерактивного изменения объема заказа (±) и калькуляцией данных. Реализован чистый переход на страницу чекаута (`order.html`) с группировкой полей ввода, снижающей когнитивную нагрузку на закупщика. Код подготовлен к интеграции State Management (localStorage / fetch API).

### 3. Двухколоночный интерфейс Личного Кабинета (ЛК)
Требовалось создать эргономичное рабочее пространство клиента, объединяющее историю заказов, личные данные и статусы обработки.
* **Решение:** Реализован гибкий двухколоночный макет (`lk.html`) с фиксированным боковым меню и динамической контентной областью. Внедрена система цветовой индикации статусов заказов (оплачено/не оплачено). Карточки прошлых покупок полностью дублируют структуру элементов корзины для визуального единообразия, настроены inline-формы для быстрого изменения профиля.

### 4. Проектирование состояний ошибок и Graceful Degradation
Важно было исключить тупиковые сценарии поведения пользователя (User Flow) при сбоях поиска или попытке несанкционированного доступа.
* **Решение:** Сверстаны специализированные экраны-заглушки. Страница `catalog_error.html` не просто сообщает о пустом поиске, а удерживает пользователя блоком рекомендаций «Популярные пептиды». Экран `notes_fail.html` выступает в роли умного Auth-Prompt барьера: корректно закрывает приватную базу знаний от неавторизованных лиц и сразу предлагает CTA-кнопки «Войти / Регистрация».

---

## 🛠️ Технологический стек

* **Markup:** HTML5 (Семантическая разметка, ARIA-атрибуты доступности для экранных дикторов).
* **Styles:** CSS3 / SCSS (Разметка по Flexbox и Grid, методология **BEM** для изоляции стилей компонентов).
* **Typography & Icons:** Локальное подключение кастомных шрифтов через `@font-face` (оптимизация FOIT/FONT), интеграция Material Icons через гибкое data-icon API.
* **JavaScript:** ES6+ (Подготовка архитектуры под Event Delegation и асинхронные AJAX/fetch запросы).

---

## 📸 Галерея интерфейса и структура страниц

Ниже представлена детальная схема связей и интерфейсы спроектированных экранов системы:

### 1. Главный экран и Сквозные компоненты (`index.html`)
Точка входа с Hero-секцией, промо-баннерами и сквозным мультиязычным Header (RU/ENG).

<img width="1918" height="737" alt="image" src="https://github.com/user-attachments/assets/a2184c9c-c867-42e2-b7fb-85e1604df09a" />

<img width="1900" height="881" alt="image" src="https://github.com/user-attachments/assets/3b25203c-7588-4e15-94df-aaa4355787cf" />

<img width="1901" height="421" alt="image" src="https://github.com/user-attachments/assets/056d1420-ee7b-4a2c-897e-df1d10652299" />

<img width="1900" height="797" alt="image" src="https://github.com/user-attachments/assets/5fd6e797-db8d-45b9-a5c2-1cde3822ee12" />

<img width="1900" height="326" alt="image" src="https://github.com/user-attachments/assets/24f184a2-436e-4b4b-9c91-5cfdb428ec3d" />


### 2. Модуль Каталогов (`catalog.html`, `catalog_peptid.html, catalog_error.html`)
Основная сетка товаров с фильтрацией, специализированная линейка PeptX Age Line и fallback-состояние пустого поиска (`catalog_error.html`).

<img width="1896" height="888" alt="image" src="https://github.com/user-attachments/assets/f6146973-ccbb-4bd1-8c25-6a74801ff96f" />

<img width="1901" height="887" alt="image" src="https://github.com/user-attachments/assets/4b3cf17d-56ca-49de-ab13-354153a0aeee" />

<img width="1901" height="887" alt="image" src="https://github.com/user-attachments/assets/3c90052d-01ad-4cd8-9099-4723012f35f4" />

<img width="1901" height="887" alt="image" src="https://github.com/user-attachments/assets/e2149bb4-f3b2-415b-a8e7-baff15ac5684" />

<img width="1898" height="892" alt="image" src="https://github.com/user-attachments/assets/ae18c57d-2878-41c1-a104-836807abca11" />

<img width="1902" height="892" alt="image" src="https://github.com/user-attachments/assets/cac824cb-c4dc-4c01-9f10-e0179dbadf56" />


### 3. Карточка Продукта (`product.html`)
Сложная страница товара с интерактивными табами (Описание, Сроки хранения, Сертификаты соответствия) и двойным CTA (Добавить в корзину / Купить в 1 клик).

<img width="1900" height="892" alt="image" src="https://github.com/user-attachments/assets/ddce67e7-e519-44fa-aa5f-e56946346dec" />

<img width="1900" height="606" alt="image" src="https://github.com/user-attachments/assets/cb1cac89-0038-45e5-bcd1-801d59dc7094" />

<img width="1898" height="898" alt="image" src="https://github.com/user-attachments/assets/4985213b-c5b7-49f8-aa32-be8f07d43094" />

<img width="1895" height="791" alt="image" src="https://github.com/user-attachments/assets/322dba28-7a48-4157-9dc9-a4bab511c7d2" />

<img width="1892" height="846" alt="image" src="https://github.com/user-attachments/assets/a6ab9456-1aa3-4c24-95d3-6d72a5388658" />


### 4. Модуль Корзины и Чекаута (`basket.html`, `order.html`)
Табличная верстка элементов корзины с кросс-сейл блоком рекомендаций и чистая форма оформления доставки.

<img width="1900" height="886" alt="image" src="https://github.com/user-attachments/assets/62372ccb-758a-4bae-bc7e-1a8dcd4b3a49" />

<img width="1893" height="887" alt="image" src="https://github.com/user-attachments/assets/ec95155f-1990-4138-a4ca-fb917ef861ad" />

<img width="1898" height="898" alt="image" src="https://github.com/user-attachments/assets/d3b6e3fe-932e-4b47-b229-072a6419d5cf" />

### 5. Личный Кабинет и Авторизация (`lk.html`, `login.html`)
Двухколоночный дашборд пользователя со статусами заказов и экраны авторизации/регистрации с валидацией UX.

<img width="1898" height="891" alt="image" src="https://github.com/user-attachments/assets/6fd52d77-69fe-4a73-98eb-aa3a73b693c9" />

<img width="1913" height="893" alt="image" src="https://github.com/user-attachments/assets/01057bd9-23de-4393-9e69-34de6af9453f" />

<img width="1900" height="892" alt="image" src="https://github.com/user-attachments/assets/26c6c02c-cf73-4de0-90ea-5a8f92c5bacc" />

<img width="1905" height="880" alt="image" src="https://github.com/user-attachments/assets/6d7eb4ec-62e0-4bb9-8ce6-7657e53afe8f" />


### 6. База знаний и FAQ (`notes.html`, `notes_fail.html`, `faq.html`)
Информационный контур: аккордеоны часто задаваемых вопросов и сетка статей блога с ограничением доступа.

<img width="1898" height="887" alt="image" src="https://github.com/user-attachments/assets/bf35f895-56b7-47a1-8886-8e441056d6a5" />

<img width="1895" height="891" alt="image" src="https://github.com/user-attachments/assets/d626a1ba-1fac-4555-906d-c3beb559af4a" />

<img width="1902" height="823" alt="image" src="https://github.com/user-attachments/assets/d7cc14f7-3cca-4f50-af96-d1f4bcaa2526" />

<img width="1913" height="852" alt="image" src="https://github.com/user-attachments/assets/49d3b254-7cf6-4a90-b705-5aaf9121a182" />

<img width="1900" height="892" alt="image" src="https://github.com/user-attachments/assets/e8ffe0de-70df-4837-9f67-9eefc79847a9" />

---
*Проект спроектирован с учетом строгих требований к масштабируемости кода, чистоте BEM-архитектуры и полностью готов к посадке на динамический бэкенд-фреймворк.*
