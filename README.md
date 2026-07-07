# Family Bible Study

**Live site:** https://solomonpadilla-sketch.github.io/family-bible-study/

An app with two studies:

- **☀️ Morning Study** — a daily family devotional: theme, key verse, discussion questions, scripture readings, and a morning prayer. 60 devotionals rotate through the year, and the readings are unique every day. Readings are tiered by age, so each reader graduates up as they grow: 🌱 the Proverbs chapter matching the date (little ones, 4–8), 🌿 the Psalm of the day (big kids, 9–12), and 🌳 a New Testament chapter (teens & adults — covers all 260 NT chapters in about 8½ months).
- **🧒 Kids Quiz** — a daily interactive questionnaire matched to the morning study's theme: three tap-to-answer questions with instant right/wrong feedback and a star score, plus a hands-on fun challenge. Answers save per device; "Try again" resets the day.
- **💑 Couples Study** — one marriage-focused study per week, 52 in all (a full year): a passage to read together, five discussion questions, a practical "this week's practice," and a prayer.

## How to use

Open `index.html` in any browser — double-click it, or serve the folder. Everyone in the family sees the same study on the same day (it's computed from the date, no server needed).

- Verse text comes from the **World English Bible** (public domain) via bible-api.com when online, and is cached in the browser for offline use afterward.
- **Mark Complete** tracks a daily streak per device (stored in localStorage).
- Arrow buttons browse past/future days and weeks; **Print** gives a clean paper copy.

## Sharing with the family

Copy the whole folder (all three files: `index.html`, `daily.js`, `weekly.js`) to any device — AirDrop, USB, or a shared folder — and open `index.html`.
