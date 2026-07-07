# Vaibhav Salaklan — Portfolio

A single-page portfolio built with **React (Vite) + Tailwind CSS + Framer Motion**, deployed to
GitHub Pages as a user site (`vaibhav1011.github.io`).

## Local development

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build into /dist
npm run preview # preview the production build locally
```

## Before you deploy

1. **Resume** — replace `public/resume.pdf` with your real PDF (keep the filename).
2. **Contact details** — edit `src/data.js` (`CONTACT`): confirm your phone number, LinkedIn URL, and email.
3. **Contact form** — the form is decorative: clicking **Send** shows a thank-you message but
   nothing is emailed or navigated. Visitors reach you via the email / phone / social links
   beside it. (To make it actually send later, wire `handleSubmit` in `src/components/Contact.jsx`
   to a service like [formspree.io](https://formspree.io).)
4. **Library project link** — the third project card shows "Repository link coming soon". When you
   have the repo URL, set `github:` on that project in `src/data.js` and the button appears automatically.

## Deploy to GitHub Pages (user site)

Because this is a **user site** (`vaibhav1011.github.io`), the site is served from the domain root
and `vite.config.js` uses `base: '/'`.

### One-time setup

```bash
# From this PORTFOLIO folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main

# Create the repo named EXACTLY vaibhav1011.github.io on GitHub, then:
git remote add origin https://github.com/vaibhav1011/vaibhav1011.github.io.git
git push -u origin main
```

### Deploy

```bash
npm run deploy
```

This runs the build and publishes `/dist` to a `gh-pages` branch via the `gh-pages` package.

Then, on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
and select the **`gh-pages`** branch, folder **`/ (root)`**. Save.

Your site goes live at **https://vaibhav1011.github.io** (first deploy can take 1–2 minutes).

Re-deploy any time after making changes with:

```bash
git add . && git commit -m "Update" && git push   # save source
npm run deploy                                      # publish new build
```

## Custom domain (optional, later)

1. Buy a domain (e.g. from Namecheap / Google Domains).
2. In your DNS provider, add these records pointing at GitHub Pages:
   - **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** record for `www` → `vaibhav1011.github.io`
3. Create a file named `CNAME` (no extension) inside `public/` containing just your domain, e.g.:
   ```
   www.yourdomain.com
   ```
   (Putting it in `public/` ensures it's copied into every build so the custom domain sticks.)
4. Commit + `npm run deploy`, then in **Settings → Pages → Custom domain**, enter your domain and
   enable **Enforce HTTPS**.

## Tech notes

- **Fonts:** Space Grotesk (display/name/headings) + Inter (body), loaded via Google Fonts in `index.html`.
  Space Grotesk's heaviest weight is 700; combined with tight tracking it reads as the bold grotesk look.
- **Scrollspy** navbar highlighting lives in `src/hooks/useScrollSpy.js`.
- **Animations** use Framer Motion `whileInView` for section fade/slide-up on scroll.
- Colors and fonts are defined as Tailwind theme tokens in `tailwind.config.js` (`ink`, `mint`, `body`, etc.).
