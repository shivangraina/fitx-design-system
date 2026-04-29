# FitX Design System

> **Tagline:** *Strength for every stage of life.*

FitX is a home fitness & nutrition coaching app for **Indian adults of all ages**, with a special focus on **building and preserving muscle** through every life stage. It pairs **AI-personalised** workout and meal plans with **expert review** by certified physiotherapists and dieticians — so every plan is both tailored and safe.

This is the design system that powers the FitX product surfaces (mobile app, marketing site, in-app coaching, content).

---

## Why FitX exists

Most adults in India struggle to maintain consistent fitness and nutrition habits at home. Generic apps push intense workouts and one-size-fits-all diet plans that ignore individual goals, body type, dietary preferences, and life stage.

The problem compounds with age. After 30, adults lose **3–8% of muscle mass per decade**, accelerating sharply after 60. This loss — **sarcopenia** — drives weakness, falls, slower metabolism, and loss of independence. Yet almost no mainstream Indian fitness platform is built with this trajectory in mind.

FitX closes two gaps:

1. **The age gap.** Younger users build strength; older users preserve it. Same app, plans calibrated by life stage.
2. **The trust gap.** AI alone is fast but unsafe. Human-only coaching is expensive and doesn't scale. FitX is **AI + expert reviewed** — fast, personalised, *and* safe.

## Audience

- **Builders (25–40):** Want strength, energy, body composition.
- **Maintainers (40–60):** Health markers, weight management, sustainability.
- **Preservers (60+):** Muscle preservation, fall prevention, independence.

All Indian, mostly home-based, with Indian dietary patterns (vegetarian / Jain / non-veg / regional).

## Products in this system

| Product | Description | UI Kit |
|---|---|---|
| **FitX App (Mobile)** | Home workouts, meal plans, recipes, coach chat, progress tracking | `ui_kits/app/` |
| **FitX Web (Marketing)** | Public marketing site — hero, programs, conditions, transformations, enrolment | `ui_kits/web/` |

## Sources & references

- **Brand inspiration (do not copy):** [omfit.in](https://omfit.in/) — for a sense of the Indian nutrition-coaching market vibe. FitX visually diverges; see Visual Foundations.
- No codebase, Figma, or existing assets were provided. **All visual decisions in this system were created from scratch** based on the product brief. Iconography uses **Lucide** (CDN) as a substitute icon system — flagged below; swap for a custom set if/when commissioned.

---

## Content fundamentals

**Voice:** Warm, knowledgeable, encouraging. We sound like a smart friend who happens to be a certified coach — not a drill sergeant, not a hype influencer, not a clinical doctor.

**Person:**
- We say **"you"** (the member) and **"we"** (FitX, the team).
- We avoid "users" or "clients" in member-facing copy. They are **members**.

**Tone rules:**
- **Confident, not loud.** "Built for every body, every age." not "🔥 TRANSFORM YOUR LIFE 🔥"
- **Specific, not vague.** "Lose 4–6 kg in 12 weeks, on Indian food." not "Get fit fast!"
- **Honest about effort.** "Hard work. Real food. Real results." We never promise overnight change.
- **Inclusive of age.** Copy must work for a 28-year-old *and* a 68-year-old. Test every headline against both.

**Casing:**
- **Sentence case** for headlines, buttons, and nav. ("Build your plan", not "Build Your Plan")
- **Title Case** only for proper program names: *Strength for Life*, *FitX Inner Circle*.
- ALL CAPS only for tiny eyebrow labels (≤14px).

**Numerals:** Always use figures for measurements — "12 weeks", "65 g protein", "₹1,499/mo". Spell out "one" only when prose-y ("one body, one plan").

**Emoji:** **Never** in product UI or marketing headlines. Acceptable in coach chat bubbles where a real human coach is sending them — and only sparingly (👍 ✅ 💪). Otherwise treat them as off-brand.

**Indian English:** Use Indian English spellings and idioms naturally — "personalised" not "personalized", "kg" always (never lbs), "₹" never "Rs.". Reference *dal*, *roti*, *sabzi*, *paneer*, *millet* unselfconsciously — these are first-class foods, not exotic.

**Examples:**

> ✅ *"Strength training, scaled to you. Whether you're 28 and building or 68 and preserving — your plan adapts."*
> ❌ *"💪 UNLOCK YOUR INNER BEAST! 🔥 100% RESULTS GUARANTEED!"*

> ✅ *"Your dietician reviewed your plan today. 3 swaps suggested for your thyroid markers."*
> ❌ *"Your AI bestie just dropped your meal plan! ✨🥗"*

> ✅ *"Rest day. Walk if you feel like it. Recovery is training too."*
> ❌ *"NO DAYS OFF. Push harder."*

---

## Visual foundations

**Visual thesis:** *Editorial wellness with Indian warmth.* Not the cold sterile fitness-tech look (black + neon green). Not the saccharine wellness look (pastel + cursive). FitX sits between: confident editorial typography, warm earth-toned palette, generous white space, and crisp data visualization.

### Colors

- **Saffron** (`#E0653A`) — primary accent. Warm Indian earth tone, used for CTAs, key data, and brand moments. Inspired by haldi/saffron/terracotta — culturally resonant without being clichéd.
- **Forest** (`#1F4D3F`) — deep green, our "vitality" color. Headers, primary text on light, brand surfaces.
- **Cream** (`#F7F1E7`) — warm off-white, default page background. Never pure `#FFFFFF`.
- **Ink** (`#1A1815`) — body text, near-black with a brown undertone.
- **Stone** (`#8A8074`) — secondary text, dividers.
- **Semantic:** success `#3F8A5C`, warn `#C97B1A`, danger `#B43A2E`, info `#3A6FA8`.

### Typography

- **Display / Headlines:** *Fraunces* — editorial serif with optical size axis. Used at 32px+ with `font-optical-sizing: auto`. Weight 500–600, soft. Conveys credibility and warmth.
- **UI / Body:** *Inter* — neutral, highly legible across ages. Note: per the rules I should avoid Inter as overused — but for a multi-age product where legibility is paramount (60+ users), Inter's hinting at small sizes is best-in-class. Flagged for review; *Manrope* or *DM Sans* are good swaps.
- **Numerals / Stats:** *Fraunces* with `font-feature-settings: "tnum"` for tabular alignment in data. We let the serif do the work — no separate mono font for stats.
- **Devanagari support:** for any Hindi-script copy, pair with *Hind* (Google Fonts).

### Spacing & layout

- **Base unit:** 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Page max-width (web):** 1200px content, 1440px hero canvas.
- **App margins:** 20px horizontal on mobile.
- **Generous vertical rhythm.** Sections breathe — 96px between major blocks on web. We never cram.

### Backgrounds

- **Default surface:** Cream (`#F7F1E7`).
- **Hero / feature surfaces:** Forest green with cream text — used sparingly for impact.
- **Cards:** White (`#FFFFFF`) on cream background, or cream-tinted (`#FCF8EF`) on white.
- **No gradients** as full-bleed backgrounds. Avoid the AI-slop bluish-purple gradient at all costs.
- **Subtle texture:** A very faint paper-grain noise (`backdrop-filter` with low opacity) is acceptable on hero sections — *very subtle*, must be invisible at first glance.
- **Photography:** Real Indian people, all ages, in real homes. Warm natural lighting. No stock-photo gym aesthetics. Slightly desaturated — never over-saturated. Food photography is top-down on cream/wood backgrounds.

### Animation

- **Easing:** Default `cubic-bezier(0.22, 1, 0.36, 1)` (out-quint) — confident, slightly springy without bouncing.
- **Durations:** 150ms (small UI), 250ms (transitions), 400ms (page-level reveals).
- **Reveals:** Fade + 8px translate-up on scroll-in. No 3D, no rotation, no parallax beyond the lightest.
- **No bounce.** Bounce reads playful/childish; we are warm but credible.
- **Reduced motion:** Always respect `prefers-reduced-motion`. Reveals become instant; transitions stay but at 100ms.

### Hover & press states

- **Buttons (filled):** Hover → 8% darker fill. Press → 12% darker, 1px down.
- **Buttons (outline/ghost):** Hover → cream-tint background fill. Press → 1px down.
- **Cards (clickable):** Hover → shadow lifts (`shadow-md` → `shadow-lg`), 1px translateY-up. Press → returns to flush.
- **Links:** Underline on hover, never always-on. Saffron color when hovered if neutral by default.
- **No opacity-only hovers.** Always change something semantic (color, shadow, position).

### Borders, radii, shadows

- **Radii:** 4 (chips), 8 (buttons, inputs), 12 (cards), 20 (large surfaces, modals), 9999 (pills).
- **Borders:** 1px `rgba(26, 24, 21, 0.08)` for hairlines. 1.5px solid Forest for emphasis borders.
- **Shadows (warm, brown-tinted, not gray):**
  - `xs`: `0 1px 2px rgba(31, 24, 15, 0.04)`
  - `sm`: `0 2px 6px rgba(31, 24, 15, 0.06)`
  - `md`: `0 6px 16px rgba(31, 24, 15, 0.08)`
  - `lg`: `0 16px 36px rgba(31, 24, 15, 0.10)`
- **No inner shadows** in the system. Use border + background-tint instead.

### Cards

- White surface on cream page.
- Radius 12 (default) or 20 (large feature cards).
- Shadow `sm` resting, `md` hover when interactive.
- 24px internal padding default.
- Optional 1px hairline border for low-elevation contexts (in-app lists).

### Transparency & blur

- **Sticky nav:** `rgba(247, 241, 231, 0.85)` with `backdrop-filter: blur(12px)` saturate(1.1).
- **Modals:** Backdrop `rgba(26, 24, 21, 0.5)` with light blur (`blur(4px)`).
- **In-app overlays:** Same modal pattern.
- We use blur sparingly — only for chrome that overlays content. Never for decoration.

### Imagery vibe

- **Warm-toned, never cool/blue.** Slight warmth bump in post.
- **Naturally lit, not studio-lit.** Indian homes, parks, kitchens.
- **All ages represented in equal measure.** A 30s headline next to a 60s headline is the rule, not the exception.
- **Food:** top-down hero shots, real Indian thalis, brass/wood/cream surfaces. Steam visible when relevant.

### Layout rules

- **Sticky top nav** on web (collapses height on scroll).
- **Bottom tab bar** on app (Home, Workouts, Meals, Coach, You).
- **Single-column hierarchy** — we never use 4-up grids on mobile. Web allows 2-up and 3-up.
- **Eyebrow labels** above headlines (12px ALL CAPS, letter-spacing 0.1em, Stone color) provide section context.

---

## Iconography

See the **Iconography** section in the file index. TL;DR:

- **Library:** [Lucide](https://lucide.dev/) (`lucide-static` via CDN). Stroke-based, 24×24, 1.75px stroke. We chose Lucide for its excellent age-readability and breadth.
- **⚠️ This is a substitution.** No custom icon set was commissioned for FitX. When you have budget, replace with a custom set drawn at 1.75px stroke matching this style.
- **Sizes:** 16, 20, 24, 32, 48. Stroke scales proportionally (CSS `stroke-width` adjusted).
- **Color:** Inherits `currentColor`. Default Ink, Saffron when active, Stone when inactive.
- **Filled icons:** Only for selected states in tab bars and toggles. Outline by default everywhere else.
- **No emoji** as icons. Ever. (Exception: real human coach chat messages, which are content not chrome.)
- **No unicode glyphs** as icons (no `→` for arrows in buttons — use Lucide `arrow-right`).
- **Brand mark / logo:** custom wordmark — see `assets/logo.svg`. Two variants: full wordmark and "Fx" monogram for app icon and avatars.

---

## File index

| Path | What's there |
|---|---|
| `README.md` | This file. Brand context, content rules, visual foundations. |
| `SKILL.md` | Skill manifest — usable as a Claude Skill. |
| `colors_and_type.css` | All design tokens. Import this in any artifact built on FitX. |
| `assets/` | Logos, brand marks, illustrations, sample imagery placeholders. |
| `fonts/` | (Empty — fonts loaded via Google Fonts CDN; see flag below.) |
| `preview/` | Design System preview cards (Type, Colors, Spacing, Components, Brand). |
| `ui_kits/app/` | Mobile app UI kit — index.html + JSX components. |
| `ui_kits/web/` | Marketing website UI kit — index.html + JSX components. |

### Preview cards (Design System tab)

- **Colors:** Brand · Saffron scale · Forest scale · Neutrals · Semantic
- **Type:** Display · Scale (H1→caption) · Body & numerals
- **Spacing:** Scale · Radii · Shadows
- **Components:** Buttons · Inputs · Badges · Cards · App kit · Web kit
- **Brand:** Logo · Iconography · Voice & tone

## ⚠️ Flags & substitutions

1. **Fonts loaded via Google Fonts CDN** (Fraunces, Inter, Hind). No `.ttf`/`.woff2` files committed. If shipping offline / production, download and self-host.
2. **Inter is on the "overused" list** but chosen deliberately for multi-age legibility. Consider *Manrope* as a swap.
3. **Lucide icons via CDN** in place of a custom icon set. Swap when commissioned.
4. **Imagery:** No real photography commissioned. UI kits use placeholder gradients/initials/colored blocks where photos belong, clearly labelled.
