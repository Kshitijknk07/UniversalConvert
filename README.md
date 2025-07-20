# UniversalConvert

UniversalConvert is a **frontend-only** demo web app for file conversion, built with React, Vite, and Tailwind CSS. It showcases a modern, responsive UI for converting documents, images, audio, and video files between 100+ formats. **Note: This project is a UI/UX demo only—no actual file conversion or backend integration is implemented.**

---

## Features
- Clean, modern dashboard for simulated file conversion
- Drag & drop upload and conversion type selection
- Demo settings for appearance, language, storage, privacy, and notifications
- Recent conversions and stats (all data is local and simulated)
- Responsive design and accessible UI
- Toast notifications and error handling for demo actions

---

## Tech Stack
- [React](https://react.dev/) + [React Router]
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (preferred) or [npm](https://www.npmjs.com/)

### Installation & Running Locally
```sh
cd uni
pnpm install      # or npm install
pnpm dev          # or npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## Scripts
- `pnpm dev` — Start local dev server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build
- `pnpm lint` — Lint code with ESLint

---

## Customization
- All features are simulated in the browser. No real file uploads, conversions, authentication, or storage.
- Modify `tailwind.config.ts` for theme changes.
- Edit `src/App.tsx` to add/remove pages.
- All UI logic is in `src/components/`.

---

## Accessibility
- ARIA labels and roles for interactive elements
- Keyboard accessible actions and focus management
- Toast notifications for feedback

---

## License
This project is for demo and educational purposes only. No warranty or guarantee of functionality. See [LICENSE](LICENSE) if provided.

---

> **Note:** UniversalConvert is a frontend demo. No files are actually converted or uploaded. All data is local and for demonstration only.