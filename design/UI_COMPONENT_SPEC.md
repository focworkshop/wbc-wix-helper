# WBC Design System - Complete UI Component Specification

> **Version:** 2.0  
> **Date:** 2026-04-15  
> **Methodology:** Atomic Design (Tokens > Atoms > Molecules > Organisms > Templates)  
> **Aesthetic:** Modern, welcoming, premium church branding

---

## Table of Contents

1. [Level 0: Design Tokens](#level-0-design-tokens)
2. [Level 1: Atoms](#level-1-atoms)
3. [Level 2: Molecules](#level-2-molecules)
4. [Level 3: Organisms](#level-3-organisms)
5. [Level 4: Layout Primitives](#level-4-layout-primitives)
6. [Level 5: Templates](#level-5-templates)

---

## Level 0: Design Tokens

Design tokens are the single source of truth for all visual values. Every component references these CSS custom properties. Never hard-code a color, font size, or spacing value directly.

### 0.1 Color Palette

**Foundation Colors:** `#003F68` (Navy), `#FFE82C` (Yellow), `#EB4E32` (Red-Orange), `#FFFFFF` (White)

#### Brand Primary: Deep Navy `#003F68`

| Token | CSS Variable | Value | Usage | Contrast |
|:------|:-------------|:------|:------|:---------|
| Brand Primary | `--color-brand-primary` | `#003F68` | Buttons, links, nav active, focus rings, footer bg | AA on white (8.2:1) |
| Brand Primary Dark | `--color-brand-primary-dark` | `#002E4D` | Hover state for primary buttons | AAA on white (11.2:1) |
| Brand Primary Light | `--color-brand-primary-light` | `#E6F0F7` | Subtle highlight bg, active nav, `.badge--primary` | Decorative |
| Brand Primary Muted | `--color-brand-primary-muted` | `#4D7A96` | Lightened navy for secondary contexts | AA on white (4.6:1) |

#### Brand Accent: Warm Red-Orange `#EB4E32`

| Token | CSS Variable | Value | Usage | Contrast |
|:------|:-------------|:------|:------|:---------|
| Brand Accent | `--color-brand-accent` | `#EB4E32` | Hero CTA, Donate button, key conversion actions | AA-large on white (3.7:1) |
| Brand Accent Dark | `--color-brand-accent-dark` | `#D03A20` | Hover state for accent buttons | AA on white (4.8:1) |
| Brand Accent Light | `--color-brand-accent-light` | `#FDE8E4` | Accent badge bg, subtle accent tint | Decorative |

#### Brand Highlight: Bright Yellow `#FFE82C`

| Token | CSS Variable | Value | Usage | Contrast |
|:------|:-------------|:------|:------|:---------|
| Brand Highlight | `--color-brand-highlight` | `#FFE82C` | Badges, banners, footer link hover | Decorative (never as text bg without dark text) |
| Brand Highlight Soft | `--color-brand-highlight-soft` | `#FFF9D6` | Default badge background, info callouts | Decorative |
| Brand Highlight Text | `--color-brand-highlight-text` | `#7A6D00` | Accessible text ON yellow backgrounds | AA on `#FFF9D6` (5.1:1) |

#### Neutrals (navy-undertoned)

| Token | CSS Variable | Value | Usage | Contrast |
|:------|:-------------|:------|:------|:---------|
| Text Main | `--color-text-main` | `#0F2A3C` | Body text, headings on light backgrounds | AAA on white (14.1:1) |
| Text Muted | `--color-text-muted` | `#5A7282` | Meta text, dates, captions, secondary info | AA on white (4.7:1) |
| Text Inverse | `--color-text-inverse` | `#FFFFFF` | Text on dark / image backgrounds | -- |
| Text Inverse Muted | `--color-text-inverse-muted` | `rgba(255,255,255,0.8)` | Subtitles on hero banners | -- |
| Background Light | `--color-bg-light` | `#F5F7FA` | Page background — cool off-white | -- |
| Background Card | `--color-bg-card` | `#FFFFFF` | Card surfaces, form containers, modals | -- |
| Border | `--color-border` | `#D5DDE3` | Input borders, dividers, card borders | -- |
| Border Focus | `--color-border-focus` | `rgba(0,63,104,0.2)` | Focus ring glow (navy-tinted) | -- |

#### Semantic Colors

| Token | CSS Variable | Value | Usage |
|:------|:-------------|:------|:------|
| Error | `--color-error` | `#D93025` | Form errors (distinct from accent red) |
| Error Light | `--color-error-light` | `#FDECEA` | Error background tint |
| Success | `--color-success` | `#1A7F4B` | Success states, confirmations |
| Success Light | `--color-success-light` | `#E6F5ED` | Success background tint |
| Warning | `--color-warning` | `#C68A00` | Warning states (darkened yellow) |
| Warning Light | `--color-warning-light` | `#FFF9D6` | Warning background tint |
| Overlay Dark | `--color-overlay-dark` | `rgba(0,30,50,0.6)` | Modal/hero overlay (navy-tinted) |

#### Color Usage Rules

- **Navy** (`--color-brand-primary`): The dominant color. Used for navigation, primary buttons, links, footer, overlays. Conveys trust and authority.
- **Red-Orange** (`--color-brand-accent`): Reserved for high-priority conversion actions only (Donate button, hero CTAs). Never use for body links or navigation — it should pop against the navy.
- **Yellow** (`--color-brand-highlight`): Sparingly. Badges, hover accents on footer links, special promotional banners. Never as a button background (insufficient contrast for text). Always pair with `--color-brand-highlight-text` for any text on yellow.
- **Error Red** (`--color-error` / `#D93025`): Intentionally different from the accent red (`#EB4E32`) so form errors are not confused with brand elements.

### 0.2 Typography

| Token | CSS Variable | Value | Fallback Stack |
|:------|:-------------|:------|:---------------|
| Heading Font | `--font-heading` | `'Outfit'` | `'Outfit', 'Helvetica Neue', Arial, sans-serif` |
| Body Font | `--font-body` | `'Inter'` | `'Inter', 'Segoe UI', Roboto, sans-serif` |

**Font Import:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap
```

**Type Scale:**

| Name | Size (Desktop) | Size (Mobile <=768px) | Weight | Line Height | Font Family | CSS Class |
|:-----|:---------------|:----------------------|:-------|:------------|:------------|:----------|
| Display | 56px | 40px | 700 | 1.1 | Heading | `.text-display` |
| Page Title | 48px | 36px | 700 | 1.2 | Heading | `h1.page-title` |
| Section Title | 30px | 24px | 600 | 1.3 | Heading | `h2.section-title` |
| Card Title | 20px | 18px | 600 | 1.3 | Heading | `.card-title` |
| Profile Name | 18px | 16px | 600 | 1.3 | Heading | `.profile-name` |
| Body | 16px | 15px | 400 | 1.6 | Body | `.body-text` |
| Body Small | 14px | 13px | 400 | 1.5 | Body | `.body-text-sm` |
| Meta | 14px | 13px | 500 | 1.4 | Body | `.meta-text` |
| Label | 14px | 13px | 600 | 1.2 | Body | `.form-label` |
| Caption | 12px | 12px | 400 | 1.4 | Body | `.caption` |
| Error | 12px | 12px | 500 | 1.4 | Body | `.error-text` |
| Nav Link | 15px | 14px | 500 | 1.0 | Heading | `.nav-link` |
| Button Text | 16px | 15px | 600 | 1.0 | Heading | (within button) |
| Button Text Sm | 14px | 13px | 600 | 1.0 | Heading | (within button) |

### 0.3 Spacing Scale

Base unit: **8px**. All spacing uses multiples of this base.

| Token | CSS Variable | Value | Typical Usage |
|:------|:-------------|:------|:-------------|
| spacing-1 | `--spacing-1` | `8px` | Tight gap (label-to-input, icon padding) |
| spacing-2 | `--spacing-2` | `16px` | Standard gap (between paragraphs, card inner padding) |
| spacing-3 | `--spacing-3` | `24px` | Medium gap (section inner padding, grid gap) |
| spacing-4 | `--spacing-4` | `32px` | Large gap (page side padding, grid gap on desktop) |
| spacing-5 | `--spacing-5` | `40px` | Section separator |
| spacing-6 | `--spacing-6` | `48px` | Major section gap (between organisms) |
| spacing-8 | `--spacing-8` | `64px` | Page-level top/bottom margins |
| spacing-10 | `--spacing-10` | `80px` | Hero bottom to first content section |

### 0.4 Elevation (Shadows)

| Token | CSS Variable | Value | Usage |
|:------|:-------------|:------|:------|
| Shadow None | `--shadow-none` | `none` | Flat elements |
| Shadow SM | `--shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` | Cards at rest, form containers |
| Shadow MD | `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` | Cards on hover, dropdowns |
| Shadow LG | `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` | Modals, popovers |
| Shadow Focus | `--shadow-focus` | `0 0 0 3px rgba(37,99,235,0.2)` | Input focus ring |

### 0.5 Border Radius

| Token | CSS Variable | Value | Usage |
|:------|:-------------|:------|:------|
| Radius SM | `--radius-sm` | `4px` | Small elements, badges |
| Radius MD | `--radius-md` | `8px` | Cards, buttons, inputs, images |
| Radius LG | `--radius-lg` | `12px` | Modals, large containers |
| Radius Full | `--radius-full` | `50%` | Profile photo circles |

### 0.6 Transitions

| Token | CSS Variable | Value | Usage |
|:------|:-------------|:------|:------|
| Transition Fast | `--transition-fast` | `all 0.15s ease` | Color changes, opacity |
| Transition Base | `--transition-base` | `all 0.2s ease` | Transform, shadow lifts |
| Transition Slow | `--transition-slow` | `all 0.3s ease` | Layout shifts, expand/collapse |

### 0.7 Breakpoints

| Name | Width | Usage |
|:-----|:------|:------|
| Mobile | `<= 480px` | Single column, stacked layouts, touch-optimized |
| Tablet | `<= 768px` | 2-column grids collapse to 1, nav may toggle |
| Desktop | `<= 1024px` | Standard layout, side-by-side content |
| Wide | `<= 1200px` | Max content width, centered container |
| Max Container | `1200px` | Hard cap on content width |
| Max Text | `800px` | Reading-optimized text block width |
| Max Form | `600px` | Form container width |

### 0.8 Z-Index Scale

| Token | Value | Usage |
|:------|:------|:------|
| `--z-base` | `1` | Default stacking |
| `--z-dropdown` | `100` | Dropdown menus |
| `--z-sticky` | `200` | Sticky nav header |
| `--z-overlay` | `500` | Overlay backgrounds |
| `--z-modal` | `1000` | Modals, lightboxes |

---

## Level 1: Atoms

Atoms are the smallest indivisible UI elements. They cannot be decomposed further.

---

### 1.1 `h1.page-title` - Page Title

The primary page identifier. Exactly one per page.

| Property | Value |
|:---------|:------|
| **Element** | `<h1 class="page-title">` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `48px` desktop / `36px` mobile |
| **Font Weight** | `700` (Bold) |
| **Line Height** | `1.2` |
| **Letter Spacing** | `-0.02em` |
| **Color** | `var(--color-text-main)` / `#0F2A3C` |
| **Color (on hero)** | `var(--color-text-inverse)` / `#FFFFFF` |
| **Margin** | Bottom `var(--spacing-2)` / `16px` |
| **Max Characters** | 40 recommended, 60 absolute max (avoid wrapping) |
| **Responsive** | Font shrinks to 36px at `<= 768px` |
| **Limitation** | Max 1 per page. Never nested inside another heading. |
| **Used in** | Hero Banner (organism), standalone page headers in T6 |

---

### 1.2 `h2.section-title` - Section Title

Divides major content areas within a page.

| Property | Value |
|:---------|:------|
| **Element** | `<h2 class="section-title">` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `30px` desktop / `24px` mobile |
| **Font Weight** | `600` (Semibold) |
| **Line Height** | `1.3` |
| **Color** | `var(--color-text-main)` |
| **Margin** | Top `var(--spacing-6)` / `48px`, Bottom `var(--spacing-2)` / `16px` |
| **Max Characters** | 60 recommended |
| **First in section** | Override `margin-top: 0` when it is the first child |
| **Used in** | Split Content, Text Block, Grid section headers |

---

### 1.3 `h3.card-title` / `p.card-title` - Card Title

Title text inside grid cards.

| Property | Value |
|:---------|:------|
| **Element** | `<h3 class="card-title">` or `<p class="card-title">` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `20px` desktop / `18px` mobile |
| **Font Weight** | `600` |
| **Line Height** | `1.3` |
| **Color** | `var(--color-text-main)` |
| **Margin** | Bottom `var(--spacing-1)` / `8px` |
| **Overflow** | `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` |
| **Max Characters** | 40 hard limit (CSS truncates with ellipsis) |
| **Used in** | card-media molecule, card-content area |

---

### 1.4 `.profile-name` - Profile Name

Name heading inside team profile cards.

| Property | Value |
|:---------|:------|
| **Element** | `<h3 class="profile-name">` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `18px` desktop / `16px` mobile |
| **Font Weight** | `600` |
| **Line Height** | `1.3` |
| **Color** | `var(--color-text-main)` |
| **Margin** | Bottom `4px` |
| **Max Characters** | 30 |
| **Used in** | profile-bio molecule |

---

### 1.5 `.body-text` - Body Paragraph

Standard reading text for all long-form content.

| Property | Value |
|:---------|:------|
| **Element** | `<p class="body-text">` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `16px` desktop / `15px` mobile |
| **Font Weight** | `400` (Regular) |
| **Line Height** | `1.6` (160%) |
| **Color** | `var(--color-text-main)` |
| **Color (on hero)** | `var(--color-text-inverse-muted)` / `rgba(255,255,255,0.8)` |
| **Max Width** | `65ch` (characters) for optimal reading comfort |
| **Margin** | Bottom `var(--spacing-2)` / `16px` |
| **Used in** | Split Content, Text Block, hero subtitles, card descriptions |

---

### 1.6 `.body-text-sm` - Small Body Text

Slightly smaller paragraph text for secondary content or dense layouts.

| Property | Value |
|:---------|:------|
| **Element** | `<p class="body-text-sm">` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `14px` desktop / `13px` mobile |
| **Font Weight** | `400` |
| **Line Height** | `1.5` |
| **Color** | `var(--color-text-main)` |
| **Max Width** | `65ch` |
| **Used in** | Profile bios (clamped), card descriptions, footer text |

---

### 1.7 `.meta-text` - Meta Text

Small informational text for dates, durations, categories, roles.

| Property | Value |
|:---------|:------|
| **Element** | `<span class="meta-text">` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `14px` / `13px` mobile |
| **Font Weight** | `500` (Medium) |
| **Line Height** | `1.4` |
| **Color** | `var(--color-text-muted)` / `#5A7282` |
| **Display** | `block` |
| **Margin** | Bottom `var(--spacing-1)` / `8px` |
| **Used in** | Cards (dates, speaker names), profile roles, audio duration |

---

### 1.8 `.error-text` - Error Text

Inline validation error message for form fields.

| Property | Value |
|:---------|:------|
| **Element** | `<span class="error-text">` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `12px` |
| **Font Weight** | `500` |
| **Line Height** | `1.4` |
| **Color** | `var(--color-error)` / `#D93025` |
| **Display** | `block` |
| **Margin** | Top `4px` |
| **Visibility** | Hidden by default, shown on invalid state |
| **Used in** | form-group molecule |

---

### 1.9 `.btn-primary` - Primary Button

The main call-to-action button. High visual prominence.

| Property | Value |
|:---------|:------|
| **Element** | `<button class="btn-primary">` or `<a class="btn-primary">` |
| **Min Width** | `120px` |
| **Height** | `48px` |
| **Padding** | `12px 24px` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `16px` |
| **Font Weight** | `600` |
| **Color** | `#FFFFFF` |
| **Background** | `var(--color-brand-primary)` / `#003F68` |
| **Border** | `none` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Cursor** | `pointer` |
| **Transition** | `var(--transition-base)` / `all 0.2s ease` |
| **Hover: Background** | `var(--color-brand-primary-dark)` / `#002E4D` |
| **Hover: Transform** | `translateY(-2px)` |
| **Hover: Shadow** | `var(--shadow-md)` |
| **Disabled: Opacity** | `0.5` |
| **Disabled: Cursor** | `not-allowed` |
| **Disabled: Transform** | `none` |
| **Max Label Length** | 20 characters |
| **Used in** | Form submit, general actions, secondary navigation CTAs |

---

### 1.9b `.btn-accent` - Accent Button (Donate / Hero CTA)

High-visibility conversion button using the red-orange accent color. Reserved for the single most important action on a page.

| Property | Value |
|:---------|:------|
| **Element** | `<button class="btn-accent">` or `<a class="btn-accent">` |
| **Min Width** | `120px` |
| **Height** | `48px` |
| **Padding** | `12px 24px` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `16px` |
| **Font Weight** | `600` |
| **Color** | `#FFFFFF` |
| **Background** | `var(--color-brand-accent)` / `#EB4E32` |
| **Border** | `none` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Cursor** | `pointer` |
| **Transition** | `var(--transition-base)` |
| **Hover: Background** | `var(--color-brand-accent-dark)` / `#D03A20` |
| **Hover: Transform** | `translateY(-2px)` |
| **Hover: Shadow** | `var(--shadow-md)` |
| **Max Label Length** | 20 characters |
| **Used in** | Nav "Donate" button, hero banner CTA, donation form submit |
| **Limitation** | Max 1 accent button visible per viewport. If multiple CTAs are needed, use `.btn-primary` (navy) for the secondary one. |

---

### 1.10 `.btn-outline` - Secondary/Outline Button

A lower-prominence action button.

| Property | Value |
|:---------|:------|
| **Element** | `<button class="btn-outline">` or `<a class="btn-outline">` |
| **Padding** | `10px 20px` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `14px` |
| **Font Weight** | `600` |
| **Color** | `var(--color-brand-primary)` |
| **Background** | `transparent` |
| **Border** | `2px solid var(--color-brand-primary)` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Cursor** | `pointer` |
| **Display** | `inline-block` |
| **Transition** | `var(--transition-base)` |
| **Hover: Background** | `var(--color-brand-primary)` |
| **Hover: Color** | `#FFFFFF` |
| **Hover: Transform** | `translateY(-1px)` |
| **Used in** | Card "Read More" buttons, split-content secondary actions |

---

### 1.10b `.btn-pill` - Pill Button (Document Downloads)

Cream/yellow rounded button used for bilingual document download links in the member area.

| Property | Value |
|:---------|:------|
| **Element** | `<a class="btn-pill">` |
| **Display** | `inline-block` |
| **Padding** | `8px 24px` |
| **Font Family** | `var(--font-heading)` / Outfit |
| **Font Size** | `14px` |
| **Font Weight** | `600` |
| **Color** | `var(--color-brand-highlight-text)` |
| **Background** | `var(--color-brand-highlight)` / cream |
| **Border** | `none` |
| **Border Radius** | `24px` (pill shape) |
| **Cursor** | `pointer` |
| **Transition** | `var(--transition-fast)` |
| **Hover: Background** | `var(--color-brand-highlight)` saturated |
| **Hover: Transform** | `translateY(-1px)` |
| **Used in** | card-document molecule (T7) |
| **Limitation** | Only use inside `.card-document`. Not for general buttons — use `.btn-primary` or `.btn-outline` instead. |

---

### 1.11 `.btn-icon` - Icon Button

Minimal button with only an icon (close, menu toggle).

| Property | Value |
|:---------|:------|
| **Element** | `<button class="btn-icon">` |
| **Width / Height** | `40px` / `40px` |
| **Padding** | `8px` |
| **Background** | `transparent` |
| **Border** | `none` |
| **Border Radius** | `var(--radius-md)` |
| **Color** | `var(--color-text-muted)` |
| **Cursor** | `pointer` |
| **Hover: Background** | `var(--color-bg-light)` |
| **Hover: Color** | `var(--color-brand-primary)` |
| **Used in** | Modal close, mobile nav toggle |

---

### 1.12 `.text-field` - Text Input

Standard single-line text input for forms.

| Property | Value |
|:---------|:------|
| **Element** | `<input type="text" class="text-field">` |
| **Width** | `100%` (of parent) |
| **Max Width** | `100%` (constrained by form-container at 600px) |
| **Height** | `48px` |
| **Padding** | `12px 16px` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `16px` (prevents iOS zoom) |
| **Color** | `var(--color-text-main)` |
| **Background** | `#FFFFFF` |
| **Border** | `1px solid var(--color-border)` |
| **Border Radius** | `6px` |
| **Transition** | `var(--transition-base)` |
| **Placeholder Color** | `var(--color-text-muted)` |
| **Focus: Border Color** | `var(--color-brand-primary)` |
| **Focus: Box Shadow** | `var(--shadow-focus)` / `0 0 0 3px rgba(37,99,235,0.2)` |
| **Focus: Outline** | `none` |
| **Disabled: Background** | `var(--color-bg-light)` |
| **Disabled: Cursor** | `not-allowed` |
| **Used in** | form-group molecule |

---

### 1.13 `.textarea-field` - Textarea

Multi-line text input.

| Property | Value |
|:---------|:------|
| **Element** | `<textarea class="textarea-field">` |
| **Width** | `100%` |
| **Min Height** | `120px` |
| **Padding** | `12px 16px` |
| **Font Family** | `var(--font-body)` / Inter |
| **Font Size** | `16px` |
| **Border** | `1px solid var(--color-border)` |
| **Border Radius** | `6px` |
| **Resize** | `vertical` |
| **Focus** | Same as `.text-field` |
| **Used in** | form-group molecule (message fields, prayer requests) |

---

### 1.14 `.select-field` - Select Dropdown

Styled native select element.

| Property | Value |
|:---------|:------|
| **Element** | `<select class="select-field">` |
| **Width** | `100%` |
| **Height** | `48px` |
| **Padding** | `12px 16px` |
| **Appearance** | `none` (custom dropdown arrow via background-image) |
| **Background Image** | Chevron-down SVG positioned `right 16px center` |
| **Other styles** | Same border, radius, focus as `.text-field` |
| **Used in** | form-group molecule (fund designation, language preference) |

---

### 1.15 `.badge` - Badge / Tag

Small inline label for categories or status.

| Property | Value |
|:---------|:------|
| **Element** | `<span class="badge">` |
| **Display** | `inline-block` |
| **Padding** | `4px 10px` |
| **Font Family** | `var(--font-body)` |
| **Font Size** | `12px` |
| **Font Weight** | `600` |
| **Color** | `var(--color-brand-primary)` |
| **Background** | `var(--color-brand-primary-light)` |
| **Border Radius** | `var(--radius-sm)` / `4px` |
| **Text Transform** | `uppercase` |
| **Letter Spacing** | `0.05em` |
| **Used in** | Card categories, sermon series labels |

---

### 1.16 `.divider` - Horizontal Divider

A thin line to visually separate sections.

| Property | Value |
|:---------|:------|
| **Element** | `<hr class="divider">` |
| **Width** | `100%` |
| **Height** | `1px` |
| **Background** | `var(--color-border)` |
| **Border** | `none` |
| **Margin** | `var(--spacing-5) 0` / `40px 0` |
| **Used in** | Between text blocks, inside split-content sections |

---

### 1.17 `.img-cover` - Cover Image (Generic)

Standard responsive image with cover behavior.

| Property | Value |
|:---------|:------|
| **Element** | `<img class="img-cover">` |
| **Width** | `100%` |
| **Height** | `auto` (or specified by parent container) |
| **Object Fit** | `cover` |
| **Object Position** | `center` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Display** | `block` |
| **Used in** | Split content images, card images, hero backgrounds |

---

### 1.18 `.img-profile` - Profile Photo (Circular)

Circular headshot image for team members.

| Property | Value |
|:---------|:------|
| **Element** | `<img class="img-profile">` |
| **Width** | `120px` |
| **Height** | `120px` |
| **Object Fit** | `cover` |
| **Object Position** | `center top` (faces are usually in upper portion) |
| **Border Radius** | `var(--radius-full)` / `50%` |
| **Border** | `3px solid var(--color-bg-card)` |
| **Box Shadow** | `var(--shadow-sm)` |
| **Image Requirements** | Square source image, min 240x240px, consistent lighting/background |
| **Used in** | profile-bio molecule |

---

### 1.19 `.audio-player` - Audio Player

Native HTML5 audio element with consistent styling.

| Property | Value |
|:---------|:------|
| **Element** | `<audio class="audio-player" controls>` |
| **Width** | `100%` |
| **Height** | `40px` (browser default) |
| **Margin** | Top `var(--spacing-2)` / `16px` |
| **Border Radius** | `var(--radius-sm)` |
| **Accent Color** | `var(--color-brand-primary)` (modern browsers) |
| **Used in** | card-media molecule (T4), individual sermon detail |

---

## Level 2: Molecules

Molecules are groups of atoms that function as a cohesive unit.

---

### 2.1 `.card-media` - Media Grid Card

The universal card component for grid layouts.

```
Structure:
<div class="card-media">
  <img class="card-media__image" src="..." alt="...">
  <div class="card-media__content">
    <span class="meta-text">Category or Date</span>
    <h3 class="card-title">Card Title Text</h3>
    <p class="body-text-sm">Short description excerpt...</p>
    <a class="btn-outline" href="#">Read More</a>
  </div>
</div>
```

| Property | Value |
|:---------|:------|
| **Width** | Fluid, controlled by grid. Min `280px`, max `1fr` |
| **Height** | Auto (content-driven), approx `360px` typical |
| **Background** | `var(--color-bg-card)` / `#FFFFFF` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Overflow** | `hidden` |
| **Box Shadow** | `var(--shadow-sm)` at rest |
| **Display** | `flex`, `flex-direction: column` |
| **Cursor** | `pointer` |
| **Transition** | `var(--transition-base)` |
| **Hover: Transform** | `translateY(-4px)` |
| **Hover: Box Shadow** | `var(--shadow-md)` |

**`.card-media__image`** (child):

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Height** | `180px` |
| **Object Fit** | `cover` |
| **Aspect Ratio** | `16 / 9` |
| **Image Requirements** | Min 560x315px, optimized WebP < 100KB |

**`.card-media__content`** (child):

| Property | Value |
|:---------|:------|
| **Padding** | `var(--spacing-2)` / `16px` |
| **Flex Grow** | `1` |
| **Display** | `flex`, `flex-direction: column` |

**Limitations:**
- Card title max 40 characters (CSS truncation with ellipsis)
- Description max 3 lines (use `-webkit-line-clamp: 3` if needed)
- All cards in the same grid MUST use the same image aspect ratio
- Do not nest cards inside cards

---

### 2.2 `.card-media--audio` - Audio Media Card (T4 variant)

Extends `.card-media` with an embedded audio player and a two-button action group.

```
Structure:
<div class="card-media card-media--audio">
  <img class="card-media__image" src="..." alt="...">
  <div class="card-media__content">
    <span class="meta-text">April 12, 2026 | Rev. Alan Yu</span>
    <h3 class="card-title">Sermon Title Here</h3>
    <audio class="audio-player" controls>
      <source src="sermon.mp3" type="audio/mpeg">
    </audio>
    <div class="btn-group">
      <a class="btn-outline" href="notes.pdf" target="_blank">Notes</a>
      <a class="btn-outline" href="sermon.mp3" download>Download</a>
    </div>
  </div>
</div>
```

Same specs as `.card-media` plus:
- `.audio-player` atom for in-card streaming
- `.btn-group` molecule with two side-by-side actions:
  - **Notes** — opens sermon PDF notes in a new tab (`target="_blank"`)
  - **Download** — triggers MP3 file download (`download` attribute). This button is **optional** and can be omitted if no audio file is available for download.

---

### 2.2b `.btn-group` - Button Group

A horizontal row of equal-width action buttons used inside cards.

```
Structure:
<div class="btn-group">
  <a class="btn-outline" href="#" target="_blank">Notes</a>
  <a class="btn-outline" href="#" download>Download</a>
</div>
```

| Property | Value |
|:---------|:------|
| **Element** | `<div class="btn-group">` |
| **Display** | `flex` |
| **Gap** | `var(--spacing-1)` / `8px` |
| **Width** | `100%` (fills card content area) |
| **Margin** | Top `var(--spacing-2)` / `16px` |
| **Child `.btn-outline`** | `flex: 1` (equal width), `text-align: center`, `padding: 8px 12px`, `font-size: 13px` |
| **Max Buttons** | 2-3 (more will become too narrow on mobile) |
| **Used in** | card-media--audio (T4), any card needing multiple actions |

---

### 2.3 `.profile-bio` - Profile Bio Card

Team member card for profile grids.

```
Structure:
<div class="profile-bio">
  <img class="img-profile" src="..." alt="Pastor Name">
  <h3 class="profile-name">Rev. Dr. Name</h3>
  <span class="meta-text">Senior Pastor</span>
  <p class="body-text-sm">Short bio paragraph about this person's background 
     and role at the church...</p>
  <a class="btn-outline" href="#">Read Full Bio</a>
</div>
```

| Property | Value |
|:---------|:------|
| **Width** | Fluid, controlled by grid. Min `280px` |
| **Padding** | `var(--spacing-3)` / `24px` (top `var(--spacing-4)`) |
| **Background** | `var(--color-bg-card)` |
| **Border Radius** | `var(--radius-md)` / `8px` |
| **Box Shadow** | `var(--shadow-sm)` |
| **Text Align** | `center` |
| **Display** | `flex`, `flex-direction: column`, `align-items: center` |
| **Transition** | `var(--transition-base)` |
| **Hover: Transform** | `translateY(-4px)` |
| **Hover: Box Shadow** | `var(--shadow-md)` |

**Bio text constraints:**
- Line clamp: 3 lines (`-webkit-line-clamp: 3`)
- Overflow: hidden with ellipsis
- Full bio accessible via "Read Full Bio" link / modal

---

### 2.4 `.form-group` - Form Field Group

Accessible label + input + error message unit.

```
Structure:
<div class="form-group">
  <label class="form-label" for="fieldId">Field Label</label>
  <input class="text-field" id="fieldId" type="text" placeholder="Placeholder...">
  <span class="error-text" role="alert">Error message here</span>
</div>
```

| Property | Value |
|:---------|:------|
| **Display** | `flex`, `flex-direction: column` |
| **Gap** | `var(--spacing-1)` / `8px` |
| **Margin Bottom** | `var(--spacing-3)` / `24px` |
| **Width** | `100%` |

**`.form-label`** (child):

| Property | Value |
|:---------|:------|
| **Font Size** | `14px` |
| **Font Weight** | `600` |
| **Color** | `var(--color-text-main)` |

---

### 2.5 `.nav-link-group` - Navigation Link Set

The centered group of navigation links in the header.

```
Structure:
<div class="nav-link-group">
  <a class="nav-link" href="#">Welcome</a>
  <a class="nav-link" href="#">Worship</a>
  <a class="nav-link active" href="#">Ministries</a>
  <a class="nav-link" href="#">Sermons</a>
</div>
```

| Property | Value |
|:---------|:------|
| **Display** | `flex` |
| **Gap** | `var(--spacing-3)` / `24px` |
| **Align Items** | `center` |

**`.nav-link`** (child):

| Property | Value |
|:---------|:------|
| **Font Family** | `var(--font-heading)` |
| **Font Size** | `15px` |
| **Font Weight** | `500` |
| **Color** | `var(--color-text-main)` |
| **Position** | `relative` |
| **Transition** | `color 0.2s ease` |
| **Hover: Color** | `var(--color-brand-primary)` |
| **Underline Effect** | `::after` pseudo-element, `height: 2px`, `background: var(--color-brand-primary)`, `width: 0` -> `width: 100%` on hover, `transition: width 0.2s ease` |
| **Active state** | `.nav-link.active` has `color: var(--color-brand-primary)` and `::after width: 100%` |

---

### 2.6 `.social-embed` - Social Media Embed Container

Wrapper for iframe-based social media widgets.

```
Structure:
<div class="social-embed">
  <iframe src="..." title="Social Feed"></iframe>
</div>
```

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Max Width** | `600px` |
| **Margin** | `var(--spacing-6) auto` |
| **Border Radius** | `var(--radius-md)` |
| **Overflow** | `hidden` |
| **Box Shadow** | `var(--shadow-sm)` |

---

### 2.7 `.profile-bio--compact` - Compact Profile Card (T7 variant)

Extends `.profile-bio` for use on dark (blue) surfaces. Removes card background, shadow, and bio text. Shows only headshot, name, and a single meta-text line (term dates or role title).

```
Structure:
<div class="profile-bio profile-bio--compact">
  <img class="img-profile" src="..." alt="Name">
  <h3 class="profile-name">Chinese Name English Name</h3>
  <span class="meta-text">Jan 2025 - Dec 2027</span>
</div>
```

| Property | Value |
|:---------|:------|
| **Extends** | `.profile-bio` |
| **Background** | `transparent` (overrides white card) |
| **Box Shadow** | `none` |
| **Padding** | `var(--spacing-2)` |
| **Bottom Gradient** | `none` (::after hidden) |
| **Hover** | No transform or shadow (static on dark surface) |
| **`.profile-name` Color** | `#FFFFFF` (white on blue) |
| **`.meta-text` Color** | `rgba(255,255,255,0.75)` (dimmed white) |
| **`.meta-text` Font Size** | `13px` |
| **`.img-profile` Size** | `140px` x `140px` (larger than standard 120px) |
| **`.img-profile` Border** | `rgba(255,255,255,0.15)` (subtle white) |
| **`.img-profile` Shadow** | `0 0 20px rgba(150,130,200,0.25)` (subtle purple glow) |
| **Used in** | T7 Member Area — Deacon Board grid, Administrative Staff grid |
| **Limitation** | Only use on `.member-area` (blue background). Do NOT use on light surfaces. |

---

### 2.8 `.card-document` - Document Download Card

White card with centered icon, title, and bilingual download buttons. Used for member-only documents.

```
Structure:
<div class="card-document">
  <img class="card-document__icon" src="icon.svg" alt="">
  <h3 class="card-document__title">Document Title</h3>
  <div class="card-document__links">
    <a class="btn-pill" href="doc-en.pdf" target="_blank">English</a>
    <a class="btn-pill" href="doc-zh.pdf" target="_blank">Chinese</a>
  </div>
</div>
```

| Property | Value |
|:---------|:------|
| **Background** | `var(--color-bg-card)` / `#FFFFFF` |
| **Border Radius** | `var(--radius-lg)` / `12px` |
| **Padding** | `var(--spacing-4) var(--spacing-3)` |
| **Text Align** | `center` |
| **Display** | `flex`, `flex-direction: column`, `align-items: center` |
| **Transition** | `var(--transition-base)` |
| **Hover: Transform** | `translateY(-4px)` |
| **Hover: Box Shadow** | `var(--shadow-md)` |

**`.card-document__icon`**: `width: 80px`, `height: 80px`, `object-fit: contain`, stroke color `var(--color-brand-accent)` (coral)

**`.card-document__title`**: Outfit 18px/600, `var(--color-text-main)`, bottom margin `var(--spacing-2)`

**`.card-document__links`**: flex column, gap `var(--spacing-1)`, full width. Contains `.btn-pill` children.

| **Minimum Required Content** | 1 icon (SVG or image), 1 title, at least 1 download link |
| **Used in** | T7 Member Area — Member's Documents section |
| **Limitation** | Max 3 download links per card. Icon should be a line-style SVG matching coral accent color. |

---

### 2.9 `.card-link` - Quick Link Card

White card with bold title and a list of text links to external resources.

```
Structure:
<div class="card-link">
  <h3 class="card-link__title">Resource Title</h3>
  <div class="card-link__list">
    <a href="..." target="_blank">Link Label</a>
    <a href="..." target="_blank">Link Label</a>
  </div>
</div>
```

| Property | Value |
|:---------|:------|
| **Background** | `var(--color-bg-card)` / `#FFFFFF` |
| **Border Radius** | `var(--radius-lg)` / `12px` |
| **Padding** | `var(--spacing-4)` |
| **Text Align** | `center` |
| **Display** | `flex`, `flex-direction: column`, `align-items: center`, `justify-content: center` |
| **Min Height** | `200px` |
| **Transition** | `var(--transition-base)` |
| **Hover: Transform** | `translateY(-4px)` |
| **Hover: Box Shadow** | `var(--shadow-md)` |

**`.card-link__title`**: Outfit 22px/700, `var(--color-text-main)`, bottom margin `var(--spacing-2)`, line-height 1.2

**`.card-link__list`**: flex column, gap `var(--spacing-1)`, no list-style, no padding. Links: `color: var(--color-brand-primary)`, underlined, 14px/500. Hover: `color: var(--color-brand-accent)`.

| **Minimum Required Content** | 1 title, at least 1 link |
| **Used in** | T7 Member Area — Useful Links section |
| **Limitation** | Max 4 links per card. All links should open in new tab (`target="_blank"`). |

---

## Level 3: Organisms

Organisms are complex UI components composed of multiple molecules and atoms.

---

### 3.1 `nav.global-header` - Global Navigation Bar

The site-wide sticky header. Present on every page.

```
Structure:
<nav class="global-header">
  <a class="global-header__logo" href="/">
    <img src="logo.svg" alt="Westside Baptist Church" height="40">
  </a>
  <div class="nav-link-group">
    <a class="nav-link" href="/welcome">Welcome</a>
    <a class="nav-link" href="/worship">Worship</a>
    ...
  </div>
  <div class="global-header__actions">
    <button class="btn-primary">Donate</button>
    <button class="btn-icon mobile-menu-toggle" aria-label="Menu">
      <svg>...</svg>
    </button>
  </div>
</nav>
```

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Height** | `80px` |
| **Position** | `sticky`, `top: 0` |
| **Z-Index** | `var(--z-sticky)` / `200` |
| **Background** | `rgba(255,255,255,0.9)` |
| **Backdrop Filter** | `blur(10px)` (glassmorphism) |
| **Border Bottom** | `1px solid var(--color-border)` |
| **Display** | `flex` |
| **Align Items** | `center` |
| **Justify Content** | `space-between` |
| **Padding** | `0 var(--spacing-4)` / `0 32px` |
| **Max Content** | Inner content capped at `1200px`, centered |

**Logo area:**
- Logo image: `height: 40px`, `width: auto`
- Flex-shrink: 0

**Mobile behavior (<=768px):**
- `.nav-link-group` hidden, replaced by hamburger `.mobile-menu-toggle`
- Mobile menu slides down as a full-width panel below the nav bar
- Menu panel: `background: var(--color-bg-card)`, `shadow-lg`, `padding: var(--spacing-3)`
- Nav links stack vertically with `padding: 12px 0` each

---

### 3.2 `header.hero-banner` - Hero Banner

The large visual header introducing a page.

```
Structure:
<header class="hero-banner" style="background-image: url('hero.jpg');">
  <div class="hero-banner__overlay"></div>
  <div class="hero-banner__content">
    <h1 class="page-title">Page Title</h1>
    <p class="body-text">Optional subtitle paragraph here.</p>
    <a class="btn-primary" href="#">Call to Action</a>
  </div>
</header>
```

| Property | Value |
|:---------|:------|
| **Width** | `100vw` (full viewport) |
| **Height (internal)** | `40vh`, `min-height: 300px` |
| **Height (home)** | `60vh`, `min-height: 400px` (add class `.hero-banner--home`) |
| **Position** | `relative` |
| **Display** | `flex`, `align-items: center`, `justify-content: center` |
| **Text Align** | `center` |
| **Background Size** | `cover` |
| **Background Position** | `center` |

**Overlay** (`.hero-banner__overlay` or `::before`):

| Property | Value |
|:---------|:------|
| **Position** | `absolute`, `inset: 0` |
| **Background** | `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))` |
| **Z-Index** | `1` |

**Content** (`.hero-banner__content`):

| Property | Value |
|:---------|:------|
| **Position** | `relative` |
| **Z-Index** | `2` |
| **Max Width** | `800px` |
| **Padding** | `0 var(--spacing-3)` |
| **Color** | `var(--color-text-inverse)` |

**Image requirements:**
- Minimum: 1920x800px (landscape)
- Format: WebP preferred, JPEG fallback
- Max file size: 300KB (optimized)
- Subject: Place main subject in center (overlaid text blocks edges)

**Limitations:**
- Subtitle text max 120 characters
- CTA button is optional (omit for internal pages)
- Background image MUST have the dark gradient overlay for text readability (WCAG)

---

### 3.3 `section.split-content` - Split Content Block

Two-column layout: image + text side by side.

```
Structure:
<section class="split-content">
  <div class="split-content__media">
    <img class="img-cover" src="..." alt="Description">
  </div>
  <div class="split-content__text">
    <h2 class="section-title">Section Heading</h2>
    <p class="body-text">Paragraph text goes here...</p>
    <ul class="body-list">
      <li>List item one</li>
      <li>List item two</li>
    </ul>
    <a class="btn-outline" href="#">Learn More</a>
  </div>
</section>
```

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Max Width** | `1200px` |
| **Margin** | `var(--spacing-6) auto` / `48px auto` |
| **Padding** | `0 var(--spacing-4)` / `0 32px` |
| **Display** | `grid` |
| **Grid Columns** | `1fr 1fr` (desktop), `1fr` (mobile <=768px) |
| **Gap** | `var(--spacing-6)` / `48px` |
| **Align Items** | `center` |

**Reverse variant:** `.split-content--reverse` swaps column order (text left, image right) using `direction: rtl` on parent and `direction: ltr` on children.

**Image:**
- Aspect ratio: flexible, but recommend 4:3 or 3:2
- Min width: 500px source
- Border radius: `var(--radius-md)`

**`.body-list`** (list inside split content):

| Property | Value |
|:---------|:------|
| **Margin** | Bottom `var(--spacing-2)` |
| **Padding Left** | `20px` |
| **List Style** | `disc` |
| **Li Margin** | Bottom `8px` |
| **Li Font** | Same as `.body-text` |

---

### 3.4 `section.text-block` - Full-Width Text Block

Centered, reading-optimized text container for long-form content.

```
Structure:
<section class="text-block">
  <h2 class="section-title">Section Heading</h2>
  <p class="body-text">Long paragraph content...</p>
  <p class="body-text">Another paragraph...</p>
  <hr class="divider">
  <p class="body-text">More content after divider...</p>
</section>
```

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Max Width** | `800px` (reading-optimized) |
| **Margin** | `var(--spacing-6) auto` |
| **Padding** | `0 var(--spacing-4)` |
| **Text Align** | `left` |

---

### 3.5 `.grid-container` - Responsive Card Grid

The wrapper that arranges cards in a responsive grid.

```
Structure:
<div class="grid-container">
  <div class="card-media">...</div>
  <div class="card-media">...</div>
  <div class="card-media">...</div>
  ...
</div>
```

| Property | Value |
|:---------|:------|
| **Display** | `grid` |
| **Grid Columns** | `repeat(auto-fill, minmax(280px, 1fr))` |
| **Gap** | `var(--spacing-4)` / `32px` |
| **Max Width** | `1200px` |
| **Margin** | `var(--spacing-4) auto var(--spacing-6) auto` |
| **Padding** | `0 var(--spacing-4)` |

Results in: 3 columns on desktop (>960px), 2 columns on tablet (>560px), 1 column on mobile.

---

### 3.5b `.member-area` - Member Area Wrapper

Full-width blue background wrapper for all T7 member content. Provides the continuous dark surface that distinguishes the member dashboard from public pages.

| Property | Value |
|:---------|:------|
| **Element** | `<main class="member-area">` |
| **Background** | `var(--color-brand-primary)` / deep blue |
| **Color** | `#FFFFFF` |
| **Padding** | Bottom `var(--spacing-6)` |
| **Used in** | T7 only |
| **Limitation** | Only 1 per page. All member content must be inside this wrapper. |

---

### 3.5c `.member-section` - Member Section Block

Constrained inner content block within `.member-area`. Provides max-width and padding for each distinct section.

```
Structure:
<section class="member-section">
  <h2 class="section-title">Section Heading</h2>
  <!-- content -->
</section>
```

| Property | Value |
|:---------|:------|
| **Max Width** | `1200px` |
| **Margin** | `0 auto` |
| **Padding** | `var(--spacing-6) var(--spacing-4) 0` |
| **h2.section-title** | `color: #FFFFFF`, `border-left-color: var(--color-brand-highlight)` |
| **body-text / body-text-sm** | `color: rgba(255,255,255,0.75)` |
| **body-list li** | `color: rgba(255,255,255,0.75)` |

**`.member-section__columns`**: CSS Grid `1fr 1fr` (collapses to `1fr` on mobile <=768px). Used for bilingual side-by-side content (Chinese left, English right).

| **Used in** | T7 — wraps Deacon Board, Board Portfolio, and Staff sections |

---

### 3.6 `.form-container` - Form Container Card

Centered white card that wraps a complete form.

```
Structure:
<div class="form-container">
  <h2 class="section-title">Form Title</h2>
  <p class="body-text">Brief instruction text.</p>
  <form>
    <div class="form-group">...</div>
    <div class="form-group">...</div>
    <button class="btn-primary btn-primary--full">Submit</button>
  </form>
</div>
```

| Property | Value |
|:---------|:------|
| **Max Width** | `600px` |
| **Margin** | `var(--spacing-6) auto` |
| **Padding** | `var(--spacing-4)` / `32px` |
| **Background** | `var(--color-bg-card)` |
| **Border Radius** | `var(--radius-md)` |
| **Box Shadow** | `var(--shadow-sm)` |

**`.btn-primary--full`** (full-width submit):

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Margin Top** | `var(--spacing-2)` |

---

### 3.7 `.modal` - Modal / Lightbox

Overlay dialog for expanded profile bios, image galleries, or confirmations.

```
Structure:
<div class="modal" id="modalId">
  <div class="modal__overlay"></div>
  <div class="modal__content">
    <button class="btn-icon modal__close" aria-label="Close">&times;</button>
    <h2 class="section-title">Modal Title</h2>
    <p class="body-text">Modal content...</p>
  </div>
</div>
```

| Property | Value |
|:---------|:------|
| **Position** | `fixed`, `inset: 0` |
| **Display** | `none` (hidden), `flex` (when `.modal--active`) |
| **Align/Justify** | `center` |
| **Z-Index** | `var(--z-modal)` / `1000` |
| **Padding** | `var(--spacing-4)` |

**`.modal__overlay`:**
- Background: `var(--color-overlay-dark)` / `rgba(0,0,0,0.5)`
- Backdrop-filter: `blur(8px)`

**`.modal__content`:**
- Background: `var(--color-bg-card)`
- Max-width: `600px`, Width: `100%`
- Max-height: `90vh`
- Border-radius: `var(--radius-lg)` / `12px`
- Box-shadow: `var(--shadow-lg)`
- Padding: `var(--spacing-6)` / `48px`
- Overflow-y: `auto`

---

### 3.8 `footer.site-footer` - Site Footer

Global footer present on every page.

```
Structure:
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <img src="logo-white.svg" alt="WBC" height="32">
      <p class="body-text-sm">Westside Baptist Church</p>
      <p class="body-text-sm">8506 Ash Street, Vancouver, BC</p>
    </div>
    <div class="site-footer__links">
      <h4>Quick Links</h4>
      <a href="#">Welcome</a>
      <a href="#">Worship</a>
      ...
    </div>
    <div class="site-footer__contact">
      <h4>Contact</h4>
      <p class="body-text-sm">info@westsidebaptist.ca</p>
      <p class="body-text-sm">604-266-5602</p>
    </div>
  </div>
  <div class="site-footer__bottom">
    <p class="caption">&copy; 2026 Westside Baptist Church. All rights reserved.</p>
  </div>
</footer>
```

| Property | Value |
|:---------|:------|
| **Width** | `100%` |
| **Background** | `var(--color-brand-primary)` / `#003F68` (deep navy) |
| **Color** | `rgba(255,255,255,0.8)` |
| **Padding** | `var(--spacing-6) var(--spacing-4)` |

**`.site-footer__inner`:**
- Max-width: 1200px, centered
- Display: grid, `grid-template-columns: 2fr 1fr 1fr` (desktop), `1fr` (mobile)
- Gap: `var(--spacing-4)`

**Footer links:** `color: rgba(255,255,255,0.7)`, hover `color: #fff`

**`.site-footer__bottom`:**
- Border-top: `1px solid rgba(255,255,255,0.1)`
- Margin-top: `var(--spacing-4)`
- Padding-top: `var(--spacing-3)`
- Text-align: center

---

## Level 4: Layout Primitives

These are the structural wrappers that define page-level arrangement.

### 4.1 `main.page-wrapper`

The outermost content wrapper below the nav and hero.

| Property | Value |
|:---------|:------|
| **Max Width** | `1200px` |
| **Margin** | `0 auto` |
| **Padding** | `var(--spacing-4)` |
| **Min Height** | `60vh` (ensures footer stays near bottom) |

### 4.2 `.page-header-minimal`

Used in T6 when there is no hero banner. Provides a centered title on a clean background.

```
<div class="page-header-minimal">
  <h1 class="page-title">Page Title</h1>
  <p class="body-text">Optional subtitle.</p>
</div>
```

| Property | Value |
|:---------|:------|
| **Text Align** | `center` |
| **Padding** | `var(--spacing-8) var(--spacing-4) var(--spacing-4)` |
| **Background** | `var(--color-bg-light)` |

### 4.3 `.grid-container--4col` - 4-Column Grid Variant

Modifier on `.grid-container` that uses a smaller minimum column width to achieve 4 columns on desktop.

| Property | Value |
|:---------|:------|
| **Grid Columns** | `repeat(auto-fill, minmax(220px, 1fr))` |
| **Responsive (<=768px)** | `repeat(2, 1fr)` |
| **Responsive (<=480px)** | `1fr` |
| **Used in** | T7 — all grids (profiles, documents, links) |

---

## Level 5: Templates

Seven templates built from the above components. See the `/templates/` folder for complete HTML implementations.

| Template | Organisms Used | Primary Molecule | Pages |
|:---------|:--------------|:-----------------|:------|
| **T1** Homepage | global-header, hero-banner (60vh), grid-container, social-embed, site-footer | card-media | 1 |
| **T2** Content | global-header, hero-banner (40vh), split-content, text-block, site-footer | -- | ~30 |
| **T3** Grid | global-header, hero-banner (40vh), grid-container, site-footer | card-media | 7 |
| **T4** Media | global-header, hero-banner (40vh), grid-container, site-footer | card-media--audio | 2 |
| **T5** Team | global-header, hero-banner (40vh), grid-container, modal, site-footer | profile-bio | 6 |
| **T6** Form | global-header, page-header-minimal, form-container, site-footer | form-group | 5 |
| **T7** Member | global-header, hero-banner (40vh), member-area, member-section, grid-container (4col), site-footer | profile-bio--compact, card-document, card-link | 1 |

---

## Appendix: Accessibility Checklist

- All images must have descriptive `alt` text
- All form inputs must have associated `<label>` elements (via `for`/`id`)
- Color contrast: all text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Focus states visible on all interactive elements (buttons, inputs, links)
- Hero banner overlay gradient is mandatory for white-on-image text readability
- Keyboard navigation: all interactive elements reachable via Tab
- Skip-to-content link recommended as first element inside `<body>`
