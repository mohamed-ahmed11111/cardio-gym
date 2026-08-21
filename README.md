# Arabic Fit Hub

Build a Premium Arabic Gym Website — Next.js + React

Create a complete, production-quality, premium gym website using Next.js (App Router) + React + TypeScript + Tailwind CSS.

The website must be Arabic-first, fully RTL, mobile-first, responsive, modern, fast, accessible, SEO-friendly, and professionally structured.

This is a frontend project with static/mock data for now. Do NOT create a backend or database. Structure the project cleanly so a backend can be added later without rewriting the frontend.

1. PROJECT CONCEPT

Build a premium Egyptian gym website that feels like a real commercial fitness brand, not a generic template.

The website should help visitors:

Discover the gym

Explore services

Browse trainers

View membership plans

See current offers

Check class schedules

See member transformations

Learn about gym achievements

Read customer testimonials

View the gym gallery

Find the gym location

Contact the gym through WhatsApp

Call the gym directly

Request a free trial

The primary audience is mobile users, so the entire experience must be designed Mobile First.

2. BRAND / VISUAL STYLE

Create a premium, powerful, athletic visual identity.

Style:

Dark premium fitness aesthetic

Modern

Bold

Clean

High-end

Energetic

Professional

Strong typography

High-quality imagery

Subtle glassmorphism where appropriate

Smooth micro-interactions

Premium cards

Strong CTAs

Use a dark base with a strong accent color.

Suggested palette:

Black / near-black background

Dark charcoal surfaces

White typography

One energetic accent color such as red, orange, or lime

Do not overuse gradients.

Do not make the design look like a cheap gym template.

The final result should feel similar to a premium fitness brand website.

3. LANGUAGE & RTL

Arabic is the primary language.

The entire website must use:

Arabic content

RTL layout

Proper Arabic typography

Correct RTL spacing

Correct alignment

RTL animations/transitions where appropriate

Use a professional Arabic font such as Cairo or Tajawal.

Also prepare the architecture for an optional English version later.

Add a language switcher:

العربية | English

Arabic should be the default language.

4. NAVIGATION

Create a responsive Navbar.

Desktop navigation:

الرئيسية

من نحن

الخدمات

المدربين

الاشتراكات

العروض

المواعيد

التحولات

الإنجازات

معرض الصور

تواصل معنا

Include:

Gym logo

Language switcher

Primary CTA: "اشترك الآن"

On mobile:

Use a premium hamburger menu.

The mobile menu must be easy to use and visually polished.

IMPORTANT:

Do NOT rely only on the Navbar for navigation.

Most visitors will use mobile phones.

The Home page must contain navigation cards and CTA buttons that take users directly to the dedicated pages.

5. HOME PAGE

The Home page should act as a complete overview of the gym.

Every major section should show a preview and include a clear CTA leading to its full dedicated page.

Hero Section

Create a powerful full-screen hero section.

Include:

High-quality gym background image or video-style visual

Dark overlay for readability

Gym logo/name

Strong Arabic headline:

"غيّر جسمك... غيّر حياتك"

Supporting text:

"ابدأ رحلتك نحو جسم أقوى وحياة أفضل مع فريق من أفضل المدربين."

Buttons:

"ابدأ الآن"

"احجز تجربتك المجانية"

Add subtle entrance animation.

6. GYM STATISTICS

Create an animated statistics section.

Example data:

+2500 عضو
+15 مدرب محترف
+8 سنوات خبرة
+30 بطولة وإنجاز

Use animated counters when the section enters the viewport.

7. SERVICES PREVIEW

Show the main services as premium cards.

Services:

كمال الأجسام

بناء العضلات

خسارة الوزن

الكارديو

التدريب الشخصي

التمارين الجماعية

Each card:

Image/Icon

Title

Description

Hover effect

"اعرف المزيد"

Add:

"اكتشف جميع الخدمات"

which navigates to:

/services

Create a dedicated Services page with complete details.

8. TRAINERS PREVIEW

Show 3–4 featured trainers on Home.

Each trainer card:

Professional photo

Name

Specialty

Experience

Rating

Short description

Example:

"كابتن أحمد حسن"
"مدرب كمال أجسام"
"8 سنوات خبرة"
★★★★★

Button:

"عرض الملف"

Navigate to:

/trainers/[id]

Add:

"شاهد جميع المدربين"

Navigate to:

/trainers

9. TRAINERS PAGE

Create a complete trainers page.

Features:

Search by trainer name

Filter by specialization

Trainer cards

Responsive grid

Smooth animations

Trainer details page:

/trainers/[id]

Include:

Large profile image

Bio

Experience

Certifications

Specialties

Achievements

Rating

Training programs

Weekly availability

Contact CTA

10. MEMBERSHIP PLANS

Create a premium pricing section.

Plans:

Basic

Gym access

Locker

Cardio area

Pro

Full gym access

Group classes

Nutrition guidance

Elite

Everything in Pro

Personal trainer

Customized nutrition plan

Body analysis

Create pricing toggle:

شهري
3 شهور
6 شهور
سنوي

Prices should update dynamically based on selected duration.

Highlight the recommended plan.

Buttons:

"اشترك الآن"

"اعرف التفاصيل"

Dedicated page:

/memberships

11. OFFERS

Create a dedicated offers page:

/offers

Home should show only 2–3 featured offers.

Each offer should include:

Title

Discount

Description

Old price

New price

Expiry date

CTA

Create an animated countdown timer for the featured offer.

Example:

"عرض الصيف"

"خصم 40%"

Countdown:

الأيام | الساعات | الدقائق | الثواني

Button:

"استفد من العرض"

Home CTA:

"عرض كل العروض"

Navigate to:

/offers

12. CLASS SCHEDULE

Create:

/schedule

Display gym classes in a clean responsive schedule.

Example:

Saturday:
6:00 PM — Muscle Building
7:00 PM — HIIT
8:00 PM — Cardio

Features:

Day filter

Class type filter

Trainer filter

Mobile-friendly schedule cards

Desktop table layout

Home should display today's classes as a preview.

Button:

"عرض الجدول كامل"

13. MEMBER TRANSFORMATIONS

Create:

/transformations

This should be one of the strongest visual sections.

Display Before / After transformations.

Each transformation:

Before image

After image

Member name

Starting weight

Current weight

Duration

Program

Short success story

Create an interactive Before/After slider.

Example:

محمد أحمد
95 KG → 78 KG
16 أسبوع

Home shows 2–3 featured transformations.

CTA:

"شاهد قصص النجاح"

14. ACHIEVEMENTS

Create:

/achievements

Include:

Championship wins

Medals

Member milestones

Gym milestones

Create a visual timeline.

Example:

2018 — تأسيس الجيم
2020 — أول بطولة
2023 — توسعة صالة التدريب
2026 — أكثر من 2500 عضو

Add animated statistics and timeline reveal animations.

15. TESTIMONIALS

Create customer reviews.

Each testimonial:

Customer image

Name

Program

Rating

Review

Use a responsive carousel/slider.

Home shows selected reviews.

Dedicated page:

/testimonials

CTA:

"شاهد جميع الآراء"

16. GALLERY

Create:

/gallery

Categories:

صالة التدريب

الأجهزة

المدربين

التمارين

البطولات

الفعاليات

Use:

Responsive masonry/grid layout

Image hover effects

Lightbox

Smooth image transitions

Home shows a small gallery preview.

CTA:

"شاهد المعرض كامل"

17. ABOUT PAGE

Create:

/about

Include:

Gym story

Vision

Mission

Values

Why choose us

Facilities

Equipment

Professional environment

Gym photos

Use a professional storytelling layout.

18. CONTACT / FREE TRIAL

Create a strong CTA section near the bottom of Home.

Title:

"جاهز تبدأ رحلة التغيير؟"

Subtitle:

"احجز تجربتك المجانية اليوم وابدأ أول خطوة نحو هدفك."

Create a contact/free trial form.

Fields:

الاسم

رقم الهاتف

الهدف من التدريب

الباقة المفضلة

الرسالة

Goal options:

بناء العضلات

خسارة الوزن

اللياقة

تدريب شخصي

أخرى

Buttons:

"إرسال الطلب"

"تواصل عبر WhatsApp"

IMPORTANT:

Since this is currently a frontend/static project, do NOT pretend that form submissions are stored in a database.

The WhatsApp button should construct a WhatsApp message using the entered information.

Example generated message:

"السلام عليكم، أنا محمد وأرغب في الاشتراك في الجيم.
هدفي: بناء العضلات
الباقة: Pro
وأرغب في معرفة التفاصيل."

Use a configurable WhatsApp number in one centralized configuration file.

Do NOT hardcode the number in multiple components.

19. WHATSAPP FLOATING BUTTON

Add a floating WhatsApp button visible across the website.

Position it safely so it does not cover important content.

When clicked:

Open WhatsApp with a predefined message.

Use a configurable gym WhatsApp number.

20. PHONE CALL

Add a "اتصل بنا" button.

On mobile, clicking it should open the phone dialer using a tel link.

21. GOOGLE MAPS

Contact section should include:

Gym address

Opening hours

Google Maps area/embed or map link

"افتح الموقع على الخريطة"

Use placeholder gym location data that can easily be changed later.

22. SOCIAL MEDIA

Include:

Instagram

Facebook

TikTok

WhatsApp

Use placeholder links/configuration values.

Keep all social links centralized.

23. FOOTER

Create a premium footer.

Include:

Gym logo

Short description

Quick links

Services

Contact information

Social media

Opening hours

Copyright

Example:

"© 2026 Gym Name. جميع الحقوق محفوظة."

24. REACT ARCHITECTURE

Use reusable React components.

Do NOT put the entire website in one huge component.

Create reusable components such as:

Navbar

MobileMenu

Hero

SectionHeading

StatCounter

ServiceCard

TrainerCard

MembershipCard

OfferCard

CountdownTimer

ScheduleCard

TransformationCard

BeforeAfterSlider

AchievementTimeline

TestimonialCard

GalleryGrid

ContactForm

WhatsAppButton

Footer

CTASection

Components should be clean and reusable.

25. DATA ARCHITECTURE

Keep static data separate from UI components.

Create a structure similar to:

src/
app/
components/
data/
lib/
types/
config/

Data files:

trainers.ts

services.ts

memberships.ts

offers.ts

schedules.ts

transformations.ts

achievements.ts

testimonials.ts

gallery.ts

Create TypeScript types/interfaces for the data.

Do NOT duplicate the same data in multiple components.

26. NEXT.JS ROUTING

Use Next.js App Router.

Create routes:

/
/about
/services
/services/[id]
/trainers
/trainers/[id]
/memberships
/offers
/schedule
/transformations
/achievements
/testimonials
/gallery
/contact

Use dynamic routes for trainers and services.

Create:

loading.tsx

error.tsx

not-found.tsx

Where appropriate.

27. SEARCH & FILTERING

Implement real frontend interactions.

Trainer search:

Search by name.

Trainer filters:

Specialization

Experience

Schedule filters:

Day

Class type

Trainer

Services filtering if useful.

Use React state properly.

28. ANIMATIONS

Use Framer Motion / Motion for React where appropriate.

Animations should include:

Hero entrance

Scroll reveal

Card hover

Button interactions

Counter animations

Page transitions where appropriate

Gallery transitions

Mobile menu animation

Modal/lightbox animation

IMPORTANT:

Do not over-animate the website.

Animations must feel premium and smooth.

Respect:

prefers-reduced-motion

for accessibility.

29. RESPONSIVE DESIGN

Mobile-first is mandatory.

Optimize specifically for:

iPhone

Android phones

Tablets

Laptops

Desktop

Large screens

Pay special attention to:

Touch targets

Typography

Button sizes

Horizontal scrolling

Cards

Forms

Navigation

Before/After slider

Gallery

Schedule

No horizontal overflow.

30. ACCESSIBILITY

Follow accessibility best practices.

Include:

Semantic HTML

Proper headings hierarchy

Alt text

Keyboard navigation

Visible focus states

Accessible buttons

Accessible forms

Good color contrast

ARIA labels where necessary

Do NOT disable browser accessibility features.

31. SEO

Implement proper Next.js SEO.

Each page should have appropriate:

Title

Description

Metadata

Open Graph metadata where appropriate

Create meaningful page titles in Arabic.

Example:

"أفضل جيم في بني سويف | Gym Name"

Also prepare:

sitemap

robots configuration

Use semantic HTML.

32. PERFORMANCE

Optimize the website for speed.

Use:

Next.js Image

Lazy loading where appropriate

Optimized assets

Proper image sizing

Minimal unnecessary JavaScript

Reusable components

Server Components where appropriate

Client Components only when interaction/state is needed

Avoid unnecessarily large libraries.

33. SECURITY

This is a frontend application, so do not claim that frontend code can be completely hidden.

Do NOT add fake security such as:

Disabling right-click

Blocking F12

Blocking Ctrl+Shift+I

Blocking Ctrl+U

Detecting DevTools

Closing the page when DevTools opens

Keyboard shortcut blocking

These do not provide real security and harm user experience.

Instead follow real security best practices:

Never expose passwords

Never expose private API keys

Never expose database credentials

Never put secrets in client-side code

Use environment variables for configuration

Separate public configuration from secrets

Keep future sensitive operations server-side

Validate data server-side when backend is added

Prepare for rate limiting when backend is added

Use secure HTTP/security headers where supported

Follow Next.js security best practices

For this static frontend, make sure no sensitive information exists in the source code.

34. CONFIGURATION

Create one centralized configuration file for:

Gym name

Phone number

WhatsApp number

Email

Address

Google Maps link

Instagram

Facebook

TikTok

Opening hours

Do not duplicate these values throughout the application.

Use environment variables where appropriate.

35. CODE QUALITY

Write clean production-style code.

Requirements:

TypeScript

Reusable components

Strong typing

No duplicated logic

No unnecessary useEffect

No giant components

Clear naming

Organized folders

Clean imports

No unused variables

No console errors

No broken links

No broken images

36. ERROR HANDLING

Create polished states for:

Loading

Empty data

Invalid trainer ID

Invalid service ID

404 page

Error page

Do not show raw technical errors to users.

Use friendly Arabic messages.

Example:

"عذرًا، الصفحة التي تبحث عنها غير موجودة."

37. UX DETAILS

Add small premium details:

Smooth scrolling

Active navigation states

Sticky navigation where appropriate

Scroll-to-top behavior on route changes

Hover states

Button loading states where applicable

Toasts/feedback for form actions

Clear CTAs

Consistent spacing

Consistent border radius

Consistent shadows

Consistent typography

38. IMPORTANT HOME PAGE UX RULE

The Home page must NOT simply contain long blocks of content.

Each section should be a concise preview.

Every major section must have a CTA that navigates to its dedicated page.

Examples:

Offers → "عرض كل العروض" → /offers

Trainers → "شاهد جميع المدربين" → /trainers

Services → "اكتشف جميع الخدمات" → /services

Memberships → "شاهد جميع الباقات" → /memberships

Schedule → "عرض الجدول كامل" → /schedule

Transformations → "شاهد قصص النجاح" → /transformations

Achievements → "اكتشف إنجازاتنا" → /achievements

Gallery → "شاهد المعرض كامل" → /gallery

Testimonials → "شاهد جميع الآراء" → /testimonials

This is especially important because most users will visit from mobile devices.

39. FINAL QUALITY REQUIREMENT

Before considering the project complete:

Check every route

Check every button

Check every navigation link

Check every dynamic route

Check mobile layout

Check desktop layout

Check RTL

Check Arabic typography

Check forms

Check WhatsApp links

Check phone links

Check gallery

Check filters

Check countdown

Check animations

Check accessibility

Check SEO metadata

Check for console errors

Check for broken images

Check for TypeScript errors

Check for build errors

The website must look like a real premium gym brand.

Do not generate a generic template.

Do not leave unfinished sections.

Do not use lorem ipsum.

Use realistic Arabic gym content and realistic mock data.

Make the design visually impressive while keeping it fast, accessible, and maintainable.

The final project should be ready to run locally and deploy to GitHub + Vercel.

FINAL GOAL

Create a premium Arabic RTL gym website that demonstrates strong skills in:

Next.js

React

TypeScript

Tailwind CSS

Responsive design

RTL development

Dynamic routes

Component architecture

Static data architecture

Interactive UI

Animations

Accessibility

SEO

Performance

Frontend security best practices

The final result should be impressive enough to be used as a professional portfolio project and later customized for a real gym.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ahlan-gym-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9fecada0-d63d-4a40-976c-1cfd57389b43).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
