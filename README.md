# 🧠 Learning Support Directory

A responsive, searchable directory of Learning Support Providers built with **React**, **TypeScript**, **Vite**, and **modular CSS**. The application demonstrates real-world patterns like state management with **React Context**, client-side routing, and simulated API integration.

---

## 🚀 Features

- 🔍 **Search Functionality** with **debouncing** to optimize performance during typing.
- ⚛️ **React Context API** for centralized state management of providers and loading states.
- 🧩 **Component-based architecture** with reusable, styled UI elements.
- 🎨 **CSS Modules** for scoped, maintainable styles across all components.
- 🔄 **Simulated API Integration** using local JSON data via `fetchProvider.ts`.
- 📱 **Responsive design** with device-specific layout adjustments.
- ⚠️ **Error & Loading states** handled gracefully with custom messages and loaders.

---

## 🗂️ Folder Structure

```
src/
│
├── api/
│   └── fetchProvider.ts          # Simulates API call from local JSON
│
├── components/
│   ├── Loader/                   # Reusable loading spinner
│   └── ProviderCard/            # UI card for displaying provider info
│
├── contexts/
│   └── providerContext.tsx      # React Context for providers state
│
├── pages/
│   └── ProviderList/            # Main listing page with search
│
├── styles/
│   └── (CSS Modules)            # Scoped component styles
│
├── utils/
│   └── debounce.ts              # Debounce utility for performance
│
└── App.tsx                      # Routing and layout
```

---

## 🧪 Simulated Data

Data is stored in a local JSON file and fetched through `fetchProvider.ts` inside the `api/` folder. This mock API simulates async behavior to mimic real-world loading.

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/learning-support-directory.git
cd learning-support-directory
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run locally

```bash
yarn dev
```

### 4. Build for production

```bash
yarn run build
```

---

## 🛠 Technologies Used

- **React** + **TypeScript**
- **Vite** for fast bundling
- **CSS Modules** for scoped styling
- **React Router** for routing
- **Context API** for global state
- **ESLint + Prettier** (optional for formatting & linting)

---

## 🧠 Future Improvements

- 🗃️ Integrate a real backend (e.g. Firebase or Express API)
- ✅ Add unit tests with React Testing Library
- 🌐 Implement pagination or infinite scrolling
- 🌈 Theme toggle (light/dark mode)
- 💬 Provider detail page with richer content


