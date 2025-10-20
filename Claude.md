# NMT Landing Page - Component Analysis & Implementation Plan

## Project Overview
Creating a single-page landing for NMT (НМТ) preparation courses using the existing Vite-based template. The landing page needs:
- SEO optimization
- SSR (Server-Side Rendering)
- Mapping data from `detailed-products-md.md` and `nmt-landing-spec.md` to existing components

---

## Data Sources Summary

### From `detailed-products-md.md`:
**Main Product: НМТ Preparation Courses**
- Formats: Group (5 students, 90 min) & Individual (1-on-1, 60 min)
- Programs: Standard (9 months), Accelerated (6 months), Express (3 months), Personal, Annual for 10th graders
- Pricing: Group 450 UAH, Individual 650 UAH
- Key Features: Small groups, individual approach, mentor support (1 month free, then 1200 UAH/month), free knowledge monitoring, level-based groups, real test simulations, 24/7 personal cabinet, live online lessons, flexible schedule
- Subjects: Ukrainian, Math, History of Ukraine, English (others on request)
- Free trial lesson: 60 min, up to 10 students

**Other Products** (secondary):
- External studies (5-11 grades): 750$/year, 375$/semester, 75$/month
- Main distance learning format (1-11 grades): 1300$/year for 1-4 grade, 1700$/year for 5-11 grade

### From `nmt-landing-spec.md`:
**Landing Structure Requirements:**
1. Header with navigation + contacts
2. Hero section with main CTA
3. Social proof / numbers section (to be added later)
4. "Why choose us" - 9 key features
5. Course programs section (5 different programs)
6. "How it works" - 6 step process
7. Teachers section
8. Pricing/packages
9. Testimonials/reviews
10. FAQ
11. Contact form + CTA

**Technical Requirements:**
- Responsive (desktop, tablet, mobile)
- Fast loading optimized images
- SEO (meta tags, keywords, image alt tags)
- Animations (scroll effects, hover effects)
- Forms connected to CRM
- Multiple CTAs: "Sign up", "Get consultation", "Free trial lesson"
- Google Analytics 4 + Facebook Pixel
- SSL + spam protection
- Easy content editing

---

## Component Mapping Analysis

### ✅ DIRECTLY REUSABLE COMPONENTS

#### 1. **Hero/Banner Section** → `src/components/homes/home-one/Banner.tsx`
- **Current structure:** Title, subtitle, CTA buttons, image with decorations
- **Needed for NMT:**
  - Title: "Підготовка до НМТ та ЗНО за ефективною методикою"
  - Subtitle: "Групові та індивідуальні заняття з живими викладачами"
  - CTAs: "Записатися на безкоштовний урок", "Отримати консультацію"
  - Note about payment installments
- **Reusability:** 95% - Just replace content, keep structure and animations
- **Location:** `src/components/homes/home-one/Banner.tsx:1-74`

#### 2. **Features Section** → `src/components/homes/home-one/Features.tsx`
- **Current structure:** Grid of feature items with icons, titles, descriptions
- **Needed for NMT:** 9 key features (small groups, individual approach, mentor support, etc.)
- **Reusability:** 100% - Perfect match, just update data
- **Data source:** Create new data file based on `feature_data` pattern
- **Location:** `src/components/homes/home-one/Features.tsx:1-37`

#### 3. **Course Programs Section** → `src/components/homes/home-one/CourseArea.tsx`
- **Current structure:** Tabs with swiper carousel showing courses
- **Needed for NMT:** 5 different programs (Standard, Accelerated, Express, Personal, Annual)
- **Reusability:** 80% - Adapt tabs to show program types, cards for each program
- **Modifications needed:**
  - Remove carousel if showing all 5 programs as cards
  - Adjust card content to show: duration, frequency, total lessons, format
- **Location:** `src/components/homes/home-one/CourseArea.tsx:1-132`

#### 4. **FAQ Section** → `src/components/common/faq/FaqOne.tsx`
- **Current structure:** Accordion with title, description
- **Needed for NMT:** FAQ about lesson times, subject selection, level-based groups, mentor support, trial lesson
- **Reusability:** 100% - Perfect accordion structure
- **Data:** Update FAQ data array with NMT-specific questions
- **Location:** `src/components/common/faq/FaqOne.tsx:1-59`

#### 5. **Teachers/Instructors Section** → `src/components/homes/home-one/Instructor.tsx`
- **Current structure:** Grid of instructor cards with photo, name, designation, rating, social links
- **Needed for NMT:** Teacher profiles (to be provided)
- **Reusability:** 95% - Great structure, just replace data
- **Location:** `src/components/homes/home-one/Instructor.tsx:1-98`

#### 6. **Counter/Stats Section** → `src/components/homes/home-one/Counter.tsx`
- **Current structure:** 4-column stats display with animated counters
- **Needed for NMT:** Social proof numbers (students prepared, score improvement, etc.) - to be added later
- **Reusability:** 100% - Perfect for social proof section
- **Location:** `src/components/homes/home-one/Counter.tsx:1-59`

#### 7. **Testimonials Section** → `src/components/common/CommonTestimonial.tsx`
- **Current structure:** Swiper slider with testimonial cards (rating, quote, name, designation)
- **Needed for NMT:** Student/parent reviews (currently none, placeholder needed)
- **Reusability:** 100% - Ready to use
- **Location:** `src/components/common/CommonTestimonial.tsx:1-93`

#### 8. **CTA Section** → `src/components/homes/home-four/Cta.tsx`
- **Current structure:** Two-column section with image, title, description, and CTA button
- **Needed for NMT:** Multiple CTAs throughout page, final CTA at bottom
- **Reusability:** 90% - Can adapt for various CTAs needed
- **Location:** `src/components/homes/home-four/Cta.tsx:1-34`

---

### 🔧 COMPONENTS NEEDING MODIFICATION

#### 9. **"How It Works" Section** - NO DIRECT MATCH (NEED TO CREATE)
- **Needed for NMT:** 6-step timeline/process flow
  1. Fill out application
  2. Free knowledge monitoring
  3. Teacher creates personal plan
  4. Lessons + mentor support
  5. Test preparation + simulations
  6. Test result
- **Finding:** No existing timeline/stepper component found in template
- **Solution:** Create new component with numbered steps, icons, and connecting lines
- **Inspiration:** Can use layout from `Features` component but adapt for sequential steps with numbering
- **Action:** CREATE NEW component `NMTHowItWorks.tsx`

#### 10. **Pricing Section** - NO PRICING COMPONENT FOUND (NEED TO CREATE)
- **Needed for NMT:**
  - Group: 450 UAH / 90 min
  - Individual: 650 UAH / 60 min
  - Highlight free trial lesson
  - Note about payment installments via bank
- **Finding:** No dedicated pricing table/cards component in template. Prices shown inline in course cards.
- **Solution:** Create pricing cards component with 2 columns (Group vs Individual)
- **Design pattern:** Can follow card layout from `CourseArea` but simpler, focused on price comparison
- **Action:** CREATE NEW component `NMTPricing.tsx`

---

### 📋 COMPONENTS FOUND - READY TO USE

#### 11. **Contact Form with CRM Integration** ✅
- **Found:** `src/forms/ContactForm.tsx`
- **Current fields:** Name, Email, Website, Message
- **Uses:** React Hook Form + Yup validation + EmailJS for sending
- **Integration:** Currently uses EmailJS (eaglesthemes service)
- **Needed for NMT:** Name, Phone, Email
- **Action:**
  - Adapt by removing "Website" field, adding "Phone" field
  - Update CRM integration endpoint (currently EmailJS - may need to update to client's CRM)
  - Simplify to just 3 fields for quick signup
- **Location:** `src/forms/ContactForm.tsx:1-79`

#### 12. **SEO Component** ✅
- **Found:** `src/components/SEO.tsx`
- **Action:** Review and configure for NMT landing page meta tags
- **Location:** `src/components/SEO.tsx:1-?` (need to review content)

---

### 🎨 ADDITIONAL USEFUL COMPONENTS FOUND

#### 13. **"Choose Us" / "Why Choose" Section** → `src/components/homes/home-four/Choose.tsx`
- **Structure:** Title, description, list of benefits with checkmarks, CTA, image
- **Potential use:** Could be alternative layout for "Why choose us" section
- **Reusability:** 85% - Nice visual alternative to Features component
- **Location:** `src/components/homes/home-four/Choose.tsx:1-67`

#### 14. **About Section with Stats** → `src/components/homes/home-one/About.tsx`
- **Structure:** Image with video popup, stats overlay ("36K+ Enrolled Students"), content with bullet points
- **Potential use:** Could combine with hero or use as secondary "about" section
- **Reusability:** 70% - Good for showing credibility
- **Location:** `src/components/homes/home-one/About.tsx:1-80`

#### 15. **Event Component** → `src/components/homes/home-four/Event.tsx`
- **Structure:** List of event items with date, title, location, time
- **Potential use:** Could be adapted to show upcoming course start dates or batches
- **Reusability:** 60% - If needed to show multiple course batches/sessions
- **Location:** `src/components/homes/home-four/Event.tsx:1-51`

---

## Component Priority Checklist

### Phase 1: Core Structure ✅
- [ ] Review and adapt `Banner.tsx` for hero section
- [ ] Configure `Features.tsx` with 9 NMT features
- [ ] Adapt `CourseArea.tsx` for 5 programs display
- [ ] Setup `FaqOne.tsx` with NMT FAQ data
- [ ] Review `SEO.tsx` component

### Phase 2: Content Sections 📝
- [ ] Setup `Instructor.tsx` for teachers (awaiting teacher data)
- [ ] Configure `Counter.tsx` for stats (awaiting numbers)
- [ ] Setup `CommonTestimonial.tsx` (awaiting reviews)

### Phase 3: Custom Components 🔨
- [ ] SEARCH: Find or create pricing section component
- [ ] SEARCH: Find or create "How it works" timeline component
- [ ] SEARCH: Find existing CRM-connected form
- [ ] CREATE: Multiple CTA buttons throughout page

### Phase 4: Technical Requirements ⚙️
- [ ] SSR setup for Vite
- [ ] SEO optimization (meta tags, Open Graph, etc.)
- [ ] Google Analytics 4 integration
- [ ] Facebook Pixel integration
- [ ] Image optimization
- [ ] Scroll animations (AOS library seems to be in use)
- [ ] Form validation and CRM connection testing

---

## Search Results Summary ✅

**FOUND:**
- ✅ Contact Form: `src/forms/ContactForm.tsx` (needs phone field added, CRM integration updated)
- ✅ CTA Component: `src/components/homes/home-four/Cta.tsx`
- ✅ SEO Component: `src/components/SEO.tsx`

**NOT FOUND (NEED TO CREATE):**
- ❌ Pricing table/cards component - Will create new
- ❌ Timeline/process steps component - Will create new
- ❌ No ready-made "How it works" section

---

## Next Steps

1. ~~**Search for missing components:**~~ ✅ COMPLETED
   - ~~Pricing tables/cards~~ - Not found, will create
   - ~~Process/timeline components~~ - Not found, will create
   - ~~Contact forms~~ - Found, needs modification
   - ~~CTA components~~ - Found

2. **Create data files:**
   - `NMTFeatureData.ts` - 9 features
   - `NMTProgramData.ts` - 5 course programs
   - `NMTFaqData.ts` - FAQ questions
   - `NMTInstructorData.ts` - Teachers (when provided)

3. **Review other home pages** for potentially useful components:
   - Check `home-two`, `home-three`, `home-four`, etc. for pricing sections
   - Look for timeline/process components

4. **Technical setup:**
   - Configure SSR
   - Setup analytics tracking
   - Optimize build for production

---

## Questions/Clarifications Needed

1. Do we have actual teacher data and photos ready?
2. Do we have real testimonials or should we use placeholders initially?
3. What are the exact social proof numbers (students helped, average score improvement)?
4. Which CRM system is the form connected to? Where is this form component?
5. Do we need Ukrainian language routing/i18n setup or is this Ukrainian-only?
6. Hosting environment for SSR - Node.js, Vercel, other?

---

## File Structure Plan

```
src/
├── components/
│   └── nmt-landing/
│       ├── NMTHero.tsx (adapted from Banner) ✅ READY
│       ├── NMTFeatures.tsx (adapted from Features) ✅ READY
│       ├── NMTPrograms.tsx (adapted from CourseArea) ✅ READY
│       ├── NMTHowItWorks.tsx ❌ NEW - CREATE
│       ├── NMTTeachers.tsx (adapted from Instructor) ✅ READY
│       ├── NMTPricing.tsx ❌ NEW - CREATE
│       ├── NMTTestimonials.tsx (adapted from CommonTestimonial) ✅ READY
│       ├── NMTFaq.tsx (adapted from FaqOne) ✅ READY
│       ├── NMTStats.tsx (adapted from Counter) ✅ READY
│       ├── NMTCta.tsx (adapted from Cta) ✅ READY
│       └── index.tsx
├── forms/
│   └── NMTContactForm.tsx (adapted from ContactForm) 🔧 MODIFY
├── data/
│   └── nmt-data/
│       ├── NMTFeatureData.ts ❌ CREATE
│       ├── NMTProgramData.ts ❌ CREATE
│       ├── NMTFaqData.ts ❌ CREATE
│       ├── NMTHowItWorksData.ts ❌ CREATE
│       ├── NMTInstructorData.ts ❌ CREATE (when teacher data provided)
│       └── NMTPricingData.ts ❌ CREATE
├── pages/
│   └── NMTLanding.tsx ❌ CREATE
└── layouts/
    └── headers/
        └── NMTHeader.tsx (adapted from HeaderOne) 🔧 MODIFY for sticky menu with NMT navigation
```

---

## Component Status Legend
- ✅ READY - Can adapt existing component with minimal changes
- 🔧 MODIFY - Exists but needs modification
- ❌ CREATE - Need to create from scratch

---

## Implementation Priority Order

### Sprint 1: Core Structure (2-3 days)
1. ✅ Create data files (all NMT content)
2. ✅ Setup NMTLanding page structure
3. ✅ Adapt NMTHeader with proper navigation
4. ✅ Adapt NMTHero (Banner)
5. ✅ Adapt NMTFeatures
6. ✅ Adapt NMTFaq

### Sprint 2: Custom Components (2-3 days)
7. ❌ Create NMTPricing component
8. ❌ Create NMTHowItWorks component
9. ✅ Adapt NMTPrograms (CourseArea)
10. 🔧 Modify NMTContactForm (add phone, update CRM)

### Sprint 3: Content & Polish (1-2 days)
11. ✅ Adapt NMTTeachers (when data available)
12. ✅ Adapt NMTStats (when numbers available)
13. ✅ Adapt NMTTestimonials (when reviews available)
14. ✅ Adapt NMTCta (multiple instances)

### Sprint 4: Technical (2-3 days)
15. ⚙️ SSR setup for Vite
16. ⚙️ SEO configuration (meta tags, Open Graph, structured data)
17. ⚙️ Google Analytics 4 integration
18. ⚙️ Facebook Pixel integration
19. ⚙️ Image optimization
20. ⚙️ CRM integration testing
21. ⚙️ Responsive testing (mobile, tablet, desktop)
22. ⚙️ Performance optimization

---

## Technical Stack Identified

From analyzing the template:
- **Framework:** React + TypeScript + Vite
- **Routing:** React Router DOM
- **Forms:** React Hook Form + Yup validation
- **Email/CRM:** EmailJS (currently) - may need to change
- **Animations:** AOS (Animate On Scroll) library
- **Carousel:** Swiper.js
- **Styling:** CSS/SCSS (need to verify)
- **Icons:** Custom flaticons + Font Awesome
- **Notifications:** react-toastify

**For SSR:** Will need to add framework like Vite SSR plugin or migrate to Next.js/Remix (TBD based on hosting requirements)
