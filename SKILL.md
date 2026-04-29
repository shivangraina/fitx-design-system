---
name: fitx-design
description: Use this skill to generate well-branded interfaces and assets for FitX (home fitness & nutrition coaching for Indian adults of all ages, focused on building and preserving muscle through every life stage), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/app/`, `ui_kits/web/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` for tokens. Lift components from `ui_kits/app/Components.jsx` and `ui_kits/web/Web.jsx` rather than re-inventing them.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (mobile screen? marketing page? slide? email?), ask some questions about audience and life stage (FitX serves 25–40 builders, 40–60 maintainers, 60+ preservers), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Brand reminders:
- Voice: warm, age-inclusive, never hype. We say "you" and "we"; members not users.
- No emoji in chrome. No bluish-purple gradients. No saccharine wellness pastels.
- Saffron `#E0653A` is the only accent for CTAs. Forest `#1F4D3F` for brand-dark surfaces. Cream `#F7F1E7` for page bg, never pure white.
- Fraunces for display, Inter for UI, Fraunces (tabular) for stats.
- Indian food references are first-class: dal, roti, sabzi, paneer, millet — not exotic.
