# Family Scripture

**Live site:** https://familyscripture.com

A daily study app for the whole family, plus a weekly study for spouses.

- **📖 Family Study** — the daily devotional: theme, key verse, discussion questions, three age-tiered readings, and a prayer. 60 studies rotate through the year. Every reading is **matched to that day's theme**: 🌱 a kid-safe Bible story for little ones (4–8), 🌿 a matching passage for big kids (9–12), and 🌳 a fuller passage for teens & adults.
- **🧒 Kids Quiz** — built into the Family Study page, right below the study: three tap-to-answer questions (labeled A/B/C) about the day's theme, with instant right/wrong feedback, a star score, and a hands-on fun challenge. Answers save per device; "Try again" resets the day.
- **⭐ Memory Verse of the Week** — 52 kid-friendly classics with a hide-the-words practice game; mark "I can say it!" when memorized.
- **🙏 Prayers** — add prayer requests; they carry over week to week until answered, then check them off and they move into a dated answered-prayer journal.
- **💑 Couples Study** — one marriage-focused study per week, 52 in all: a passage to read together, five discussion questions, a practical "this week's practice," and a prayer.
- **Also**: streak milestones with confetti and medals, 🔊 read-aloud (browser speech), 📤 share the verse as an image, holiday specials (Christmas Eve/Day, New Year, Good Friday, Easter, Thanksgiving — with their own quizzes and themed readings), and offline support via a service worker.

## How to use

Open the site and it shows today's study — everyone in the family sees the same study on the same day (it's computed from the date, no login or server needed).

- **⚙️ Settings** (sliders icon in the header): light/dark theme, font size, Bible **translation** (WEB, KJV, BBE — simplest English, ASV), and your **kids' ages** — only the age groups in your family are shown in the readings. All settings are per device.
- Verse text comes from bible-api.com when online and is cached in the browser for offline use afterward.
- **Show text** panels display numbered verses in a scrollable box — tap verses to select them, then **Share** sends just that section (share sheet on phones, clipboard on desktop) with a smart reference like "Psalms 37:3-5,8".
- **Mark Complete** tracks a daily streak per device (stored in localStorage).
- The header date stepper browses past/future days (and weeks on the Couples Study); **Print** gives a clean paper copy.

## Sharing with the family

Send everyone https://familyscripture.com. On a phone, open it in Safari/Chrome and choose **Add to Home Screen** — it then launches like an app and works offline.

## Development

Static site, no build step. Edit the files, commit, and `git push` — GitHub Pages auto-deploys to the domain in about a minute. When changing any file in the service worker's `ASSETS` list, bump `CACHE` in `sw.js` so clients pick up the new version.
