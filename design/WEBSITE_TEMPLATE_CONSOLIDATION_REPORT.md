# Westside Baptist Church - Website Template Consolidation Report

> **Date:** 2026-04-15  
> **Scope:** Full visual audit of https://www.westsidebaptist.ca/ — every navigable page  
> **Methodology:** Designer-perspective visual review (layout, UI components, content patterns)  
> **Goal:** Consolidate all page layouts into a maximum of 7 reusable templates for the website revamp

---

## Executive Summary

After auditing **50+ unique page slugs** (excluding ~560 dynamic collection entries for sermons, bulletins, and news), we identified **7 distinct layout patterns** that can serve every page on the current site. The pages fall into clear functional categories: landing hubs, narrative/informational content, card-based collections, media archives, people profiles, form/transaction pages, and authenticated member areas.

---

## PART 1: Comprehensive Page-by-Page Analysis

### 1.1 Primary Navigation Pages

| # | URL | Language | Page Title | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:----|:---------|:-----------|:-----------------------|:---------------------------|:------------|
| 1 | `/` (home) | Mixed ZH/EN | Westside Baptist Church (Home / 歡迎) | Sticky nav, full-height hero banner with photo background + gradient overlay, 3-column news/update card grid, social media embed widget (Facebook/Instagram feed), footer | `nav.global-header`, `header.hero-banner` (60vh), Grid of `div.card-media`, Social Widget | **T1** |
| 2 | `/welcome` | EN | Welcome | Sticky nav, internal hero banner (40vh), split-content block (large photo left + heading/paragraphs/bulleted list right), secondary text blocks, outline "Read More" button, footer | `nav.global-header`, `header.hero-banner` (40vh), `section.split-content`, `section.text-block`, `button.btn-outline` | **T2** |
| 3 | `/copy-of-敬拜` | EN | Worship | Sticky nav, internal hero banner, worship schedule info as split-content (image + text with service times), embedded content sections | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 4 | `/general-7` | ZH | 敬拜 (Worship) | Sticky nav, hero banner, worship information blocks (service times, location), image sections | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 5 | `/sermons` | Mixed ZH/EN | 講道 (Sermons) | Sticky nav, hero banner, scrollable grid of media cards (each with audio player, sermon title, date, speaker meta-text), pagination/load-more | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` with `<audio>` | **T4** |
| 6 | `/projects-3` | EN | Ministry | Sticky nav, hero banner, card grid showing ministry categories/news items with thumbnail images, titles, dates, and "Read More" buttons | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` | **T3** |
| 7 | `/ministries` | ZH | 事工 (Ministries) | Sticky nav, hero banner, icon/image card grid (6 ministry categories each with cover image, Chinese title, short description, link) | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` | **T3** |
| 8 | `/copy-of-教牧同工` | EN | Pastoral Team | Sticky nav, hero banner, grid of profile cards (circular headshot, name, role title, short bio paragraph for each pastor) | `nav.global-header`, `header.hero-banner`, Grid of `div.profile-bio` | **T5** |
| 9 | `/pastoralteam` | ZH | 教牧同工 (Pastoral Team) | Sticky nav, hero banner, grid of profile cards (circular headshot, Chinese name, role, bio) | `nav.global-header`, `header.hero-banner`, Grid of `div.profile-bio` | **T5** |
| 10 | `/copy-of-認識西浸` | EN | About Us | Sticky nav, hero banner, split-content (church photo + history/mission text), additional text blocks with church values | `nav.global-header`, `header.hero-banner`, `section.split-content`, `section.text-block` | **T2** |
| 11 | `/about-認識西浸` | ZH | 認識西浸 (About) | Sticky nav, hero banner, split-content (church photo + Chinese text about history/mission), list of church values | `nav.global-header`, `header.hero-banner`, `section.split-content`, `section.text-block` | **T2** |
| 12 | `/visitor2` | Mixed ZH/EN | Guest Record / 聯絡 | Sticky nav, centered page title (no hero), white card form container (600px max-width) with multi-field guest registration form (name, email, phone, etc.), primary submit button | `nav.global-header`, `h1.page-title`, `div.form-group` x N, `button.btn-primary` | **T6** |
| 13 | `/giving` | Mixed ZH/EN | 奉獻 (Giving) | Sticky nav, hero banner, split-content (giving philosophy text + image), inline form elements for donation info | `nav.global-header`, `header.hero-banner`, `section.split-content`, `div.form-group` | **T2** |
| 14 | `/cm-news-database` | ZH | 最新消息 (Latest News) | Sticky nav, hero banner, grid of date-titled news cards (weekly bulletins) with publication date, title, thumbnail | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` | **T3** |
| 15 | `/members` | Mixed ZH/EN | Log In / 會友登入 | Sticky nav, hero banner, full-width blue bg, compact profile grid (circular headshots, bilingual names, term dates), bilingual nested list (board portfolio), document download cards (icon + title + bilingual PDF links), quick-link cards (title + external links), footer | `nav.global-header`, `header.hero-banner`, `.member-area`, Grid of `div.profile-bio--compact`, `.member-section__columns`, Grid of `div.card-document`, Grid of `div.card-link` | **T7** |

### 1.2 Ministry Sub-Pages & Team Pages

| # | URL | Language | Page Title | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:----|:---------|:-----------|:-----------------------|:---------------------------|:------------|
| 16 | `/cm-praise-team` | ZH | CM Praise Team / 敬拜隊 | Sticky nav, profile widget with cover photo (980px x 250px), team member roster grid with photos, names, and roles | `nav.global-header`, `header.hero-banner`, Grid of `div.profile-bio` | **T5** |
| 17 | `/copy-of-cm-praise-team` | EN | CM Hospitality Team | Sticky nav, profile widget header, team member grid with photos and roles | `nav.global-header`, `header.hero-banner`, Grid of `div.profile-bio` | **T5** |
| 18 | `/general-5-1` | EN | EM Praise Team | Sticky nav, profile widget header, team member grid | `nav.global-header`, `header.hero-banner`, Grid of `div.profile-bio` | **T5** |
| 19 | `/copy-of-cm-hospitality-team` | EN | CitRUs | Sticky nav, profile/program header, content description, possibly team grid | `nav.global-header`, `header.hero-banner`, `section.split-content` or `div.profile-bio` | **T2** or **T5** |
| 20 | `/children-ministry` | Mixed | Children Ministry | Sticky nav, graphic hero banner, grid of program cards (First Look, 252 Primary, 252 Intermediate, XP3 Middle School, XP3 High School) with icons and descriptions | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` | **T3** |
| 21 | `/general-5-3` | EN | AWANA | Sticky nav, hero/header section, program description with split-content (AWANA logo + program details text) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |

### 1.3 Dynamic Collection Item Pages (Templates for individual entries)

| # | URL Pattern | Language | Page Title Pattern | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:------------|:---------|:-------------------|:-----------------------|:---------------------------|:------------|
| 22 | `/ministries/{slug}` (6 items) | ZH | Individual Ministry (e.g. 小組事工, 少年事工) | Sticky nav, hero banner with ministry name, split-content (ministry photo + description text with activities and schedule) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 23 | `/children-ministry/{slug}` (5 items) | EN | Individual Program (e.g. Citrus: 252 Primary) | Sticky nav, program header, split-content (program logo/image + age group, schedule, description) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 24 | `/sermons/{slug}` (~205 items) | Mixed | Individual Sermon (e.g. 天國的律法) | Sticky nav, sermon title header, embedded audio player, sermon date/speaker meta, body text/notes | `nav.global-header`, `h1.page-title`, `<audio>` player, `span.meta-text`, `p.body-text` | **T4** (detail) |
| 25 | `/cm-news-database-1/{slug}` (~206 items) | ZH | Weekly Bulletin (e.g. 2026年4月11日崇拜) | Sticky nav, bulletin title/date header, rich text content block with announcements, embedded images/PDFs | `nav.global-header`, `h1.page-title`, `section.text-block` | **T2** (detail) |
| 26 | `/em-news-database/{slug}` (~155 items) | EN | Weekly Bulletin (e.g. Announcements - April 12, 2026) | Sticky nav, bulletin title/date header, rich text content with announcements | `nav.global-header`, `h1.page-title`, `section.text-block` | **T2** (detail) |

### 1.4 Event & Campaign Pages

| # | URL | Language | Page Title | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:----|:---------|:-----------|:-----------------------|:---------------------------|:------------|
| 27 | `/event-details/youth-discipleship-class` | EN | Youth Discipleship Class | Sticky nav, event hero image, event title, date/time/location details, description text, RSVP/registration button | `nav.global-header`, `header.hero-banner`, `section.split-content`, `button.btn-primary` | **T2** |
| 28 | `/event-details/wbc-mini-vbs` | EN | WBC Mini-VBS | Sticky nav, event image banner, event details (date, time, location), description, registration CTA | `nav.global-header`, `header.hero-banner`, `section.split-content`, `button.btn-primary` | **T2** |
| 29 | `/event-details/wbc-summer-youth-camp...` | Mixed | WBC Summer Youth Camp | Sticky nav, event image, bilingual event details, registration form/button | `nav.global-header`, `header.hero-banner`, `section.split-content`, `button.btn-primary` | **T2** |
| 30 | `/vbs-1` | EN | Mini VBS | Sticky nav, campaign hero banner with VBS branding, event details (split-content with poster image + schedule/registration info) | `nav.global-header`, `header.hero-banner`, `section.split-content`, `button.btn-primary` | **T2** |
| 31 | `/youthsummercamp` | EN | Youth Summer Camp | Sticky nav, hero banner, camp details (split-content layout with photo + dates/pricing/registration info) | `nav.global-header`, `header.hero-banner`, `section.split-content`, `button.btn-primary` | **T2** |
| 32 | `/copy-of-youth-discipleship-1` | EN | Youth Discipleship | Sticky nav, hero banner, program description with schedule, registration info | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 33 | `/holy-week-devotional` | EN | Holy Week Devotional | Sticky nav, themed hero banner, devotional content sections (daily readings, scripture, reflection text) | `nav.global-header`, `header.hero-banner`, `section.text-block` | **T2** |
| 34 | `/schedule` | EN | Schedule | Sticky nav, page title, structured schedule/calendar view (grid or table layout showing times and events) | `nav.global-header`, `h1.page-title`, Table/Grid schedule display | **T3** |

### 1.5 Donation & Transaction Pages

| # | URL | Language | Page Title | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:----|:---------|:-----------|:-----------------------|:---------------------------|:------------|
| 35 | `/donationpage` | EN | Donation Page | Sticky nav, centered page title (no hero), full-page Wix donation form (donor info, amount, payment method, recurring toggle) | `nav.global-header`, `h1.page-title`, `div.form-group` x N, `button.btn-primary` | **T6** |
| 36 | `/donate-bolivia-2026` | EN | Bolivia 2026 | Sticky nav, campaign-specific title/hero, campaign description text, targeted donation form | `nav.global-header`, `h1.page-title`, `section.split-content`, `div.form-group`, `button.btn-primary` | **T6** |
| 37 | `/donate-serve-2026` | EN | SERVE 2026 | Sticky nav, campaign title, SERVE program description, donation form | `nav.global-header`, `h1.page-title`, `section.split-content`, `div.form-group`, `button.btn-primary` | **T6** |
| 38 | `/donation-thank-you-page` | EN | Thank You | Sticky nav, centered confirmation message, return-to-home button | `nav.global-header`, `h1.page-title`, `section.text-block`, `button.btn-primary` | **T6** |

### 1.6 Informational & Miscellaneous Pages

| # | URL | Language | Page Title | UI Components Observed | Consolidated UI Components | Template ID |
|:--|:----|:---------|:-----------|:-----------------------|:---------------------------|:------------|
| 39 | `/aim` | EN | Active In Mission | Sticky nav, hero banner, mission program description (split-content with photos + mission trip details) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 40 | `/動感使命` | ZH | 動感使命 (Active In Mission) | Sticky nav, hero banner, Chinese version of mission program content | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 41 | `/openings` | EN | Ministry Openings | Sticky nav, hero banner, split-content layout listing available positions (title + description + requirements) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 42 | `/services-4` | EN | Facility Rental | Sticky nav, hero banner, facility information (split-content with room photos + rental details/pricing), possibly a booking form | `nav.global-header`, `header.hero-banner`, `section.split-content`, optional `div.form-group` | **T2** |
| 43 | `/day-one` | EN | Day One | Sticky nav, hero banner or page title, content about the Day One program/initiative | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |
| 44 | `/blog` | EN | Blog | Sticky nav, hero banner, blog post listing grid (cards with featured image, title, date, excerpt, read more) | `nav.global-header`, `header.hero-banner`, Grid of `div.card-media` | **T3** |
| 45 | `/copy-of-patrick-english` | EN | Pastor Profile | Sticky nav, individual profile layout (large photo + name, role, full bio text) | `nav.global-header`, `header.hero-banner`, `div.profile-bio` (expanded) | **T5** (detail) |
| 46 | `/copy-of-2026-2028-執事選舉結果` | EN | Deacon Election Results | Sticky nav, page title, announcement text block with results | `nav.global-header`, `h1.page-title`, `section.text-block` | **T2** |
| 47 | `/general-5-2` | EN | Team Calendar | Sticky nav, embedded Google Calendar or scheduling widget | `nav.global-header`, `h1.page-title`, Embedded calendar widget | **T2** |
| 48 | `/cm-latest-news-1` | ZH | CM Latest News | Sticky nav, hero banner, news content blocks | `nav.global-header`, `header.hero-banner`, `section.text-block` | **T2** |
| 49 | `/cm-latest-news-2` | ZH | CM Latest News 2 | Sticky nav, hero banner, news content blocks | `nav.global-header`, `header.hero-banner`, `section.text-block` | **T2** |
| 50 | `/welcome/pawn2023` | EN | Praise & Worship Night 2023 | Sticky nav, event hero, event recap/photos (gallery or split-content) | `nav.global-header`, `header.hero-banner`, `section.split-content` | **T2** |

### 1.7 System / Utility Pages (Wix Built-in)

| # | URL | Language | Page Title | Template ID |
|:--|:----|:---------|:-----------|:------------|
| 51 | `/search` | EN | Search Results | Wix system (no custom template needed) |
| 52 | `/checkout` | EN | Checkout | Wix system (no custom template needed) |
| 53 | `/members-1` | EN | Members Area | Wix system (no custom template needed) |
| 54 | `/account/*` (6 pages) | EN | My Account, Orders, Settings, etc. | Wix system (no custom template needed) |
| 55 | `/profile/*` (3 pages) | EN | Profile, Events, Followers | Wix system (no custom template needed) |
| 56 | Popup pages (6 lightboxes) | Mixed | Facility room details, announcements | Popup/Modal overlay (not a full page template) |

---

## PART 2: Template Distribution Summary

| Template ID | Template Name | # of Pages Using It | Percentage |
|:------------|:-------------|:---------------------|:-----------|
| **T1** | Homepage / Aggregator | 1 | 2% |
| **T2** | Simple Content Layout | ~30 | 60% |
| **T3** | Grid / Collection Layout | 7 | 14% |
| **T4** | Media Archive | 2 (listing + ~205 detail entries) | 4% |
| **T5** | Team Profiles | 6 | 12% |
| **T6** | Form / Transaction | 5 | 10% |
| **T7** | Member Area | 1 | 2% |

> **Key Insight:** T2 (Simple Content Layout) is the workhorse template, covering the vast majority of the site. This is expected — most pages on a church website are informational in nature (about us, event details, program descriptions, news articles, devotionals).

---

## PART 3: Consolidated Template Specifications

---

### Template T1: Homepage / Aggregator

| Attribute | Detail |
|:----------|:-------|
| **Name** | Homepage / Aggregator |
| **Purpose** | Primary landing page that routes visitors to key content areas |
| **UI Components** | `nav.global-header` (sticky, glassmorphism), `header.hero-banner` (60vh, full-width photo + gradient overlay + centered title + CTA button), responsive card grid (3-column, auto-fill at 280px min), social media embed widget, `footer` |
| **Functions** | (1) High-impact first impression with hero visual, (2) Dynamic content feed showing latest updates/news via card grid, (3) Social media integration for community engagement, (4) Primary navigation hub directing to all major sections |
| **Minimum Required Content** | 1 compelling hero background image (optimized < 300KB WebP), hero title + subtitle text, at least 3 card items (each with image, title, date, short excerpt), social media account/feed URL |
| **Limitations** | Do NOT use for deep-content reading or long-form text. Keep content "snackable" — this is a routing hub only. Do NOT exceed 5-6 cards in the grid (information overload). Do NOT use for sub-pages. Only 1 page on the entire site should use T1. |

---

### Template T2: Simple Content Layout

| Attribute | Detail |
|:----------|:-------|
| **Name** | Simple Content Layout |
| **Purpose** | General-purpose informational page for narrative content, program descriptions, event details, and announcements |
| **UI Components** | `nav.global-header`, `header.hero-banner` (40vh, optional — can substitute with `h1.page-title` on minimal background), `section.split-content` (2-column CSS Grid: image left + text right, collapses to 1-column on mobile), `section.text-block` (centered 800px max-width for long-form reading), optional `div.form-group` for inline forms, `button.btn-primary` / `button.btn-outline` |
| **Functions** | (1) Informational storytelling (About, Welcome), (2) Program/event descriptions (VBS, Youth Camp, AWANA), (3) Service information (Worship times, Facility Rental), (4) Announcements and articles (News bulletins, Devotionals, Election results), (5) Can stack multiple split-content and text-block sections vertically for rich pages |
| **Minimum Required Content** | Clear page title, at least 1 body paragraph, 1 representative image/graphic. For split-content: 1 image + 1 heading + 1 paragraph minimum. |
| **Limitations** | Do NOT use for lists of more than 5 repeating uniform items — switch to T3 (Grid) instead. Do NOT use for team/people directories — use T5. Do NOT add more than 3 split-content sections on one page (becomes visually repetitive). Keep inline forms to max 3 fields; for complex forms, use T6 instead. |

---

### Template T3: Grid / Collection Layout

| Attribute | Detail |
|:----------|:-------|
| **Name** | Grid / Collection Layout |
| **Purpose** | Displays categorized listings, directories, archives, and repeating content items in a uniform card grid |
| **UI Components** | `nav.global-header`, `header.hero-banner` (40vh), responsive CSS Grid container (auto-fill, 280px min-width columns), multiple `div.card-media` molecules (each: 16:9 cover image 180px tall + `p.card-title` + `span.meta-text` for date/category + `button.btn-outline`), optional pagination or "Load More" button, optional filter/search bar |
| **Functions** | (1) Ministry directory (Ministries, Children Ministry programs), (2) News/bulletin archive (CM News Database, EM News), (3) Blog post listing, (4) Project/initiative gallery, (5) Schedule/calendar grid view, (6) Hierarchical navigation to sub-sections |
| **Minimum Required Content** | At least 3 items in the grid with uniform styling. Each card needs: 1 image (16:9 aspect ratio), 1 title (max 40 chars), 1 meta-text line (date or category), 1 action link |
| **Limitations** | Do NOT use for long-form reading — cards must be "snackable" with users clicking through for details. All cards MUST have uniform dimensions (mismatched image sizes will break the grid). Do NOT mix card types (e.g., some with images, some without) in the same grid. Do NOT use for fewer than 3 items (looks sparse). |

---

### Template T4: Media Archive

| Attribute | Detail |
|:----------|:-------|
| **Name** | Media Archive |
| **Purpose** | Specialized listing and playback for audio/video content (sermons, recordings, podcasts) |
| **UI Components** | `nav.global-header`, `header.hero-banner` (40vh), responsive grid of specialized `div.card-media` molecules (extended with HTML5 `<audio>` or `<video>` player), `p.card-title` (sermon/media title), `span.meta-text` (date, speaker, duration), optional download button, optional filter by date/speaker/series |
| **Functions** | (1) Sermon audio archive with in-page playback, (2) Chronological browsing of media content, (3) Resource downloading (MP3s, PDFs), (4) Individual media detail view with player + notes/transcript |
| **Minimum Required Content** | Reliable audio/video source URL, date, title, and speaker/author for each media item. At minimum 3 media items for the listing view. |
| **Limitations** | EXCLUSIVELY for time-series playable media content. Do NOT repurpose for static text, image galleries, or general directories. Media files must be hosted on reliable CDN (not local uploads). Audio/video source URLs must use HTTPS. Do NOT mix audio and video cards in the same grid — keep media type consistent. |

---

### Template T5: Team Profiles

| Attribute | Detail |
|:----------|:-------|
| **Name** | Team Profiles |
| **Purpose** | Showcases people — pastoral staff, ministry teams, leadership, volunteer groups |
| **UI Components** | `nav.global-header`, `header.hero-banner` (40vh with team photo), CSS Grid of `div.profile-bio` molecules (each: circular headshot 120px diameter + `h3` name + `span.meta-text` role/title + `p.body-text` bio truncated to 3 lines + optional "Read More" link), optionally expandable to full individual profile page |
| **Functions** | (1) Pastoral team directory, (2) Ministry team rosters (Praise Team, Hospitality Team), (3) Individual staff profile detail pages, (4) Builds personal connection and trust with visitors, (5) Visualizes organizational structure |
| **Minimum Required Content** | Consistent headshot photography for ALL team members shown (same scale, background style, lighting). Name, role/title, and at least 1-2 sentence bio for each person. Minimum 2 profiles to justify using this template. |
| **Limitations** | The visual layout WILL look unprofessional if headshots are inconsistent in quality, cropping, or background. High-quality structured photography is MANDATORY. Do NOT mix placeholder images with real photos. Do NOT use for non-people content (e.g., don't put ministry descriptions in profile cards). Bio text MUST be abbreviated to max 3 lines in the grid view — link to a detail page for full bios. |

---

### Template T6: Form / Transaction

| Attribute | Detail |
|:----------|:-------|
| **Name** | Form / Transaction |
| **Purpose** | Conversion-focused pages for data capture, registration, authentication, and financial transactions |
| **UI Components** | `nav.global-header`, `h1.page-title` on minimal off-white background (NO hero banner — intentionally distraction-free), white centered form card container (max-width 600px, border-radius 8px, subtle shadow), stacked `div.form-group` molecules (each: bold label + `input.text-field` 48px height + `span.error` validation), terminal `button.btn-primary` (full-width submit), optional post-submission confirmation message, optional campaign context text block above form |
| **Functions** | (1) Guest/visitor registration form, (2) General and campaign-specific donation forms, (3) Member login/authentication, (4) Newsletter signup, (5) Event RSVP, (6) Post-submission thank-you confirmation |
| **Minimum Required Content** | Page title, configured form fields with clear labels, submit button with action-oriented label (e.g., "Donate", "Register", "Log In"), post-submission confirmation message or redirect |
| **Limitations** | Do NOT add sidebars, heavy navigation, image galleries, or excessive text — the focus MUST be purely on form conversion. Do NOT put more than 8-10 form fields on a single page (use multi-step if needed). Do NOT add hero banners — the clean, minimal design is intentional to reduce cognitive load. Do NOT link away from the page within the form area (prevents abandonment). Campaign donation pages MAY include a brief context paragraph above the form, but keep it under 100 words. |

---

### Template T7: Member Area

| Attribute | Detail |
|:----------|:-------|
| **Name** | Member Area |
| **Purpose** | Authenticated member dashboard providing governance information, downloadable documents, and quick links to internal resources |
| **UI Components** | `nav.global-header` (sticky), `header.hero-banner` (40vh), `.member-area` (full-width blue background wrapper), `.member-section` (constrained inner blocks), `.grid-container--4col` with `div.profile-bio--compact` (circular headshot + bilingual name + term date/role), `.member-section__columns` (bilingual two-column nested lists), `.grid-container--4col` with `div.card-document` (icon + title + `.btn-pill` bilingual download links), `.grid-container--4col` with `div.card-link` (bold title + text links), `footer.site-footer` |
| **Functions** | (1) Deacon board directory with term dates, (2) Board portfolio / responsibility assignments in bilingual format, (3) Administrative staff directory with bilingual roles, (4) Bilingual document downloads (handbook, annual reports, policies), (5) Quick links to external resources (Google Sheets, schedules, indexes) |
| **Minimum Required Content** | At least 1 governance section (profile grid OR portfolio list), consistent headshot photos for all profiles shown, document links must point to valid PDFs, external links must open in new tabs |
| **Limitations** | REQUIRES authentication — this template is only for logged-in members. Do NOT use for public-facing content. The entire content area uses a dark blue background — do NOT mix with light-background sections within `.member-area`. Profile photos MUST be consistent quality (same as T5 requirement). Document cards should have uniform icon style (coral line SVGs). Max 4 cards per row in the document and link grids. |

---

## PART 4: Template-to-Page Quick Reference Matrix

| Template | Pages |
|:---------|:------|
| **T1** | Home (`/`) |
| **T2** | Welcome, Worship (EN/ZH), About (EN/ZH), Giving, Ministry Openings, Facility Rental, Active In Mission (EN/ZH), Day One, AWANA, VBS, Youth Summer Camp, Youth Discipleship, Holy Week Devotional, Praise & Worship 2023, Deacon Election Results, Team Calendar, CM Latest News 1 & 2, Individual Ministry pages (x6), Individual Children Ministry pages (x5), Individual Bulletin pages (x361), Event Detail pages (x3) |
| **T3** | Ministries (ZH), Children Ministry, CM News Database, Projects/Ministry (EN), Blog, Schedule |
| **T4** | Sermons listing, Individual Sermon pages (x205) |
| **T5** | Pastoral Team (EN/ZH), CM Praise Team, CM Hospitality Team, EM Praise Team, Pastor Profile (individual) |
| **T6** | Visitor/Guest Record, Donation Page, Bolivia 2026, SERVE 2026, Thank You Page, Members Login |
| **T7** | Members Area (post-login `/members`) |

---

## PART 5: Observations & Recommendations for Revamp

### Language Architecture
- The current site uses **separate page slugs** for EN and ZH versions of the same content (e.g., `/copy-of-敬拜` vs `/general-7`). This doubles the page count and creates maintenance burden.
- **Recommendation:** Implement proper i18n with a single page per concept and language toggle (e.g., `/worship?lang=en` / `/worship?lang=zh`), reducing ~50 page slugs to ~30.

### Naming Convention Cleanup
- Many slugs use Wix auto-generated names (`copy-of-`, `general-5-1`, `projects-3`) which are not SEO-friendly or human-readable.
- **Recommendation:** Establish clean, semantic URL slugs (e.g., `/em-praise-team`, `/facility-rental`, `/about`).

### Template Consolidation Wins
- The current site has pages that look visually different but structurally identical. By enforcing these 7 templates, the revamp achieves:
  - **Consistent user experience** across all pages
  - **Faster content creation** (authors pick a template, fill in content)
  - **Reduced development/maintenance** (7 templates vs ~50 unique layouts)
  - **Better responsive behavior** (tested once, works everywhere)

### Content Gaps Identified
- Several pages appear to have thin or duplicate content (e.g., `cm-latest-news-1` and `cm-latest-news-2` appear redundant)
- Some pages lack hero images or have inconsistent photography quality
- Team pages have mixed photo quality across profiles
