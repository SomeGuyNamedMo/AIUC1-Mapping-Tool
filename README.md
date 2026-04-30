# Interactive Framework Mapping Tool

A static, interactive framework mapping microsite.

A visitor describes their AI application (deployment shape, modalities, jurisdictions, audience, data categories) and instantly sees:

1. The framework requirements that apply to them, grouped by Principle.
2. Why each one activated (universal mandatory, modality-driven, automation, external-facing).
3. Which other regulations and standards their context triggers (EU AI Act, HIPAA, FCRA, FHA, NYC LL 144, Colorado AI Act, SB 53, FTC AI guidance).
4. The full mapping catalog — 17 linked frameworks — showing how many framework controls map into each.

## Files

- `index.html` — page shell and static markup.
- `assets/css/main.css` — ordered stylesheet entry point.
- `assets/css/01-base.css` — design tokens, reset, and global styles.
- `assets/css/02-layout.css` — top bar, hero, and page layout.
- `assets/css/03-controls.css` — buttons, form fields, chips, and toggles.
- `assets/css/04-results.css` — results header and scorecard.
- `assets/css/05-matrix.css` — crosswalk matrix and detail panel.
- `assets/css/06-glossary.css` — crosswalk glossary and cards.
- `assets/css/07-about-footer.css` — about card and footer.
- `assets/css/08-wizard.css` — stepper, step panes, map, and wizard footer.
- `assets/css/09-responsive.css` — tab navigation, animation utilities, responsive rules, and motion preferences.
- `assets/js/01-dom.js` — safe DOM helpers.
- `assets/js/02-data.js` — embedded framework and mapping data.
- `assets/js/03-state.js` — form state.
- `assets/js/04-engine.js` — activation and recommendation logic.
- `assets/js/05-form.js` — form wizard, navigation, region picker, and controls.
- `assets/js/06-tabs.js` — results tab behavior.
- `assets/js/07-results.js` — coverage, matrix, and glossary rendering.
- `assets/js/08-boot.js` — event binding and initial render.
- `scripts/generate-data.rb` — regenerates `assets/js/02-data.js` from the framework source data.
- `README.md` — this file.

No build step. No dependencies. Open `index.html` directly or drop it on any static host.

## Hosting

Any of these work:

```bash
# Local preview
python3 -m http.server 8000
# → http://localhost:8000/

# Or just open in a browser
open index.html
```

For production, push the folder to:

- **Vercel** — `vercel deploy .`
- **Netlify** — drag the folder into the dashboard, or `netlify deploy --dir=.`
- **GitHub Pages** — commit, set Pages source to the folder
- **S3 / CloudFront** — `aws s3 sync . s3://your-bucket/ --acl public-read`

## Where the data comes from

The constants in `assets/js/02-data.js` mirror the source framework data, embedded verbatim:

| Microsite block | Source |
| --- | --- |
| `REQUIREMENTS` | `<frameworks-root>/aiuc-1/principles/{a..f}-*.yaml` |
| `UNIVERSAL` | Requirements with `capabilities: [universal]` |
| `MODALITY_ACTIVATIONS`, `AUTOMATION_ACTIVATIONS`, `EXTERNAL_ACTIVATIONS` | `<frameworks-root>/aiuc-1/scoping/derivation.yaml` |
| `RECOMMENDATION_RULES` | `<frameworks-root>/recommendations.yaml` |
| `CROSSWALKS` (counts + sample mappings) | `<frameworks-root>/aiuc-1/crosswalks/*.yaml` |
| `PRINCIPLES` | `<frameworks-root>/aiuc-1/framework.yaml` |

If the canonical framework data changes, regenerate the microsite data:

```bash
ruby scripts/generate-data.rb
```

To verify parity without rewriting the file:

```bash
ruby scripts/generate-data.rb --check
```

## Privacy

Everything runs in the visitor's browser. No analytics, no network calls beyond Google Fonts. No data is sent or stored.

## Design system

Uses the AIUC design tokens directly (Instrument Serif / DM Sans / JetBrains Mono, coral accent on warm-black surfaces). No Tailwind, no UI library. Visual target is `AIUC Design System/ui_kits/assessment-tool/standalone.html`.
