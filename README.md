# BIOTOX by MedReg — Expert Toxicology Website

A high-fidelity single-page responsive React + TypeScript application built on top of Vite. It showcases MedReg's expert toxicology services with vibrant layout transitions, full responsive styling, dark/light mode persistence, and zero-FOUC theme state configurations.

## 🚀 Features

- **React + TypeScript + Vite**: Fast HMR and lightweight production bundle.
- **Zero-FOUC Theme Management**: Smooth light/dark theme toggles utilizing media listeners and FOUC prevention logic.
- **Responsive Layout System**: Perfect styling down to 320px small mobile screen sizes up to ultrawide desktops.
- **IntersectionObserver Animations**: Lightweight viewport triggers to transition elements into view dynamically.
- **Clean SVG Icon Modules**: Utilizes componentized `@tabler/icons-react` icons.

## 🛠️ Tech Stack & Scripts

- **Framework**: React 19, TypeScript
- **Bundler**: Vite 8
- **Styling**: Pure Vanilla CSS (`src/index.css`)
- **Icons**: `@tabler/icons-react`

### Available Scripts

- Run development server: `npm run dev`
- Compile production bundle: `npm run build`
- Preview build: `npm run preview`

---

## ☁️ Deploying to Vercel

The repository has been configured to build and deploy directly on Vercel:

1. Go to your **[Vercel Dashboard](https://vercel.com)**.
2. Click **Add New** > **Project**.
3. Import this repository: `jigarsolanki0212/biotox`.
4. Vercel will auto-detect the framework as **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

The project compiles with zero compilation errors, making it ready to be served immediately.
